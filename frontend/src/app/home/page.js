'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); // ログイン画面に遷移
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* ロゴ */}
      <div className="mb-6">
        <img src="/logo.png" alt="Logo" className="h-20" />
      </div>
      {/* タイトル */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Welcome to Machinaka App
      </h1>
      {/* ログインボタン */}
      <button
        onClick={handleLoginClick}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        ログイン
      </button>
    </div>
  );
}
