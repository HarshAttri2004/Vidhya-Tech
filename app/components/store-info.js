import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

function maskMiddle(value, start = 4, end = 4) {
  if (!value) return '';
  if (value.length <= start + end) return value;
  return `${value.slice(0, start)}***${value.slice(-end)}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, phone, company, message } = req.body || {};
  const normalizedPayload = {
    name: String(name || '').trim(),
    email: String(email || '').trim(),
    phone: String(phone || '').trim(),
    company: String(company || '').trim(),
    message: String(message || '').trim(),
  };

  if (
    !normalizedPayload.name ||
    !normalizedPayload.email ||
    !normalizedPayload.phone ||
    !normalizedPayload.company ||
    !normalizedPayload.message
  ) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    if (
      !process.env.GOOGLE_SHEET_ID ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY
    ) {
      return res.status(500).json({ error: 'Google Sheets environment variables are missing.' });
    }

    const serviceAccountEmail = String(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '')
      .trim()
      .replace(/^['"]|['"]$/g, '');
    const privateKey = String(process.env.GOOGLE_PRIVATE_KEY || '')
      .trim()
      .replace(/^['"]|['"]$/g, '')
      .replace(/\\n/g, '\n')
      .replace(/\r/g, '');

    if (
      privateKey.includes('...YOUR_KEY_HERE...') ||
      !privateKey.includes('BEGIN PRIVATE KEY') ||
      !privateKey.includes('END PRIVATE KEY')
    ) {
      return res.status(500).json({
        error:
          'Invalid GOOGLE_PRIVATE_KEY in .env.local. Paste the full private_key value from your service-account JSON.',
      });
    }

    const rawSheetId = String(process.env.GOOGLE_SHEET_ID || '')
      .trim()
      .replace(/^['"]|['"]$/g, '');
    const spreadsheetId = rawSheetId.includes('/spreadsheets/d/')
      ? rawSheetId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1] || ''
      : rawSheetId;

    if (!spreadsheetId) {
      return res.status(500).json({
        error: 'Invalid GOOGLE_SHEET_ID. Use only the spreadsheet ID or a valid Google Sheets URL.',
      });
    }

    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0]; 
    if (!sheet) {
      return res.status(500).json({ error: 'No worksheet found in the spreadsheet.' });
    }
    
    await sheet.setHeaderRow(['Name', 'Email', 'Phone Number', 'Company/Project Name', 'Message', 'Date']);

    await sheet.addRow({ 
      Name: normalizedPayload.name, 
      Email: normalizedPayload.email, 
      'Phone Number': normalizedPayload.phone,
      'Company/Project Name': normalizedPayload.company,
      Message: normalizedPayload.message, 
      Date: new Date().toLocaleString() 
    });

    return res.status(200).json({ success: true, message: 'Row added successfully!' });
  } catch (error) {
    const statusCode = error?.response?.status;
    const spreadsheetId = String(process.env.GOOGLE_SHEET_ID || '')
      .trim()
      .replace(/^['"]|['"]$/g, '')
      .match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1] ||
      String(process.env.GOOGLE_SHEET_ID || '').trim().replace(/^['"]|['"]$/g, '');
    const serviceAccountEmail = String(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '')
      .trim()
      .replace(/^['"]|['"]$/g, '');
    const safeLog = {
      message: error?.message || 'Unknown error',
      status: statusCode || null,
      reason: error?.response?.statusText || null,
      spreadsheetIdMasked: maskMiddle(spreadsheetId, 6, 6),
      serviceAccountMasked: maskMiddle(serviceAccountEmail, 4, 10),
    };
    console.error('store-info error:', safeLog);
    if (statusCode === 404) {
      return res.status(404).json({
        error:
          'Spreadsheet not found. Check GOOGLE_SHEET_ID and ensure the sheet is shared with the service account email as Editor.',
      });
    }
    if (statusCode === 403) {
      return res.status(403).json({
        error:
          'Permission denied for spreadsheet. Share the sheet with the service account email and verify Sheets API access.',
      });
    }
    return res.status(500).json({ error: error.message });
  }
}
