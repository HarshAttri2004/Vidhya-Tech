import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isRenderablePortfolio(project: {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string | null;
}) {
  return (
    isNonEmptyString(project.title) &&
    isNonEmptyString(project.description) &&
    isNonEmptyString(project.image) &&
    isNonEmptyString(project.category) &&
    isNonEmptyString(project.link)
  );
}

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ data: portfolios.filter(isRenderablePortfolio) });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, image, link, category, order } = await req.json();

    if (!isNonEmptyString(title) || !isNonEmptyString(description) || !isNonEmptyString(image) || !isNonEmptyString(category)) {
      return NextResponse.json(
        { error: 'Title, description, image, and category are required for portfolio items.' },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        image: image.trim(),
        link: isNonEmptyString(link) ? link.trim() : null,
        category: category.trim(),
        order: order || 0,
      },
    });

    return NextResponse.json({ success: true, data: portfolio });
  } catch {
    return NextResponse.json({ error: 'Failed to create portfolio' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, title, description, image, link, category, order } = await req.json();

    if (!isNonEmptyString(title) || !isNonEmptyString(description) || !isNonEmptyString(image) || !isNonEmptyString(category)) {
      return NextResponse.json(
        { error: 'Title, description, image, and category are required for portfolio items.' },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.update({
      where: { id },
      data: {
        title: title.trim(),
        description: description.trim(),
        image: image.trim(),
        link: isNonEmptyString(link) ? link.trim() : null,
        category: category.trim(),
        order,
      },
    });

    return NextResponse.json({ success: true, data: portfolio });
  } catch {
    return NextResponse.json({ error: 'Failed to update portfolio' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.portfolio.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete portfolio' }, { status: 500 });
  }
}
