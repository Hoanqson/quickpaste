import { notFound } from 'next/navigation';

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/paste/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const paste = await getData(params.id);
  if (!paste) notFound();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <pre className="bg-gray-800 p-8 rounded-lg font-mono text-sm whitespace-pre-wrap break-words">
          {paste.content}
        </pre>
        <p className="text-gray-400 mt-4 text-sm">
          Lượt xem: {paste.views} • {new Date(paste.createdAt).toLocaleString('vi-VN')}
        </p>
      </div>
    </div>
  );
}
