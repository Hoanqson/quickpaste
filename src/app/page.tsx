'use client';

import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const create = async () => {
    setLoading(true);
    const res = await fetch('/api/paste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: text }),
    });
    const data = await res.json();
    if (data.url) {
      setLink(data.url);
      navigator.clipboard.writeText(data.url);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-8">QuickPaste</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Dán nội dung vào đây..."
          className="w-full h-64 bg-gray-800 rounded-lg p-5 font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <div className="text-center mt-6">
          <button
            onClick={create}
            disabled={loading || !text.trim()}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? 'Đang tạo...' : 'Tạo link ngay'}
          </button>
        </div>
        {link && (
          <div className="mt-8 p-5 bg-green-900 rounded text-center">
            <p className="mb-2">Đã copy link:</p>
            <a href={link} target="_blank" className="text-xl text-blue-300 underline">{link}</a>
          </div>
        )}
      </div>
    </div>
  );
}
