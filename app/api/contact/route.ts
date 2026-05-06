import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo (replace with database later)
let contactSubmissions: Array<{
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
}> = [];

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const payload =
      typeof body === 'object' && body !== null
        ? (body as Record<string, unknown>)
        : {};

    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';
    const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
    const message = typeof payload.message === 'string' ? payload.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create contact submission (in-memory for now)
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || undefined,
      message,
      createdAt: new Date(),
    };

    // Store in memory (temporary solution)
    contactSubmissions.push(contact);

    // Keep only last 100 submissions to prevent memory issues
    if (contactSubmissions.length > 100) {
      contactSubmissions = contactSubmissions.slice(-100);
    }

    console.log('New contact submission:', { name, email, phone, message });

    return NextResponse.json({
      success: true,
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        message: contact.message,
        createdAt: contact.createdAt,
      }
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
