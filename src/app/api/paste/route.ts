import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { redis } from '@/lib/kv';

export async function POST(req: NextRequest) {
  const { content = '' } = await req.json();
  if (!content.trim()) return NextResponse.json({ error: 'Empty' }, { status: 400 });

  const id = nanoid(10);
  const paste = {
    content: content.trim(),
    createdAt: Date.now(),
    views: 0,
  };

  await redis.set(`paste:${id}`, JSON.stringify(paste), { ex: 2592000 }); // 30 ngày

  const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  return NextResponse.json({ id, url: `${url}/${id}` });
}
