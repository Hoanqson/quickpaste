import { NextResponse } from 'next/server';
import { redis } from '@/lib/kv';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await redis.get<string>(`paste:${params.id}`);
  if (!data) return new NextResponse('Not found', { status: 404 });

  const paste = JSON.parse(data);
  paste.views += 1;
  await redis.set(`paste:${params.id}`, JSON.stringify(paste));

  return NextResponse.json(paste);
}
