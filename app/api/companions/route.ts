import { NextRequest, NextResponse } from 'next/server';
import { createCompanion } from '@/lib/actions/companion.actions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const companion = await createCompanion(body);
    return NextResponse.json({ id: companion.id });
  } catch (error: any) {
    console.error('Error creating companion', error);
    return NextResponse.json({ error: error.message ?? 'Internal server error' }, { status: 500 });
  }
} 