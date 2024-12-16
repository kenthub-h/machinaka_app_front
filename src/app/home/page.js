"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const [matchResult, setMatchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ローディング状態を管理

  const handleAccountClick = () => {
    router.push("/account");
  };

  const handleFindMatches = async () => {
    setIsLoading(true); // ローディング開始
    setMatchResult(null);
    setErrorMessage("");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/match`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setMatchResult(data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || "マッチングに失敗しました");
      }
    } catch (error) {
      setErrorMessage("サーバーに接続できませんでした");
    } finally {
      setIsLoading(false); // ローディング終了
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="flex items-center space-x-4">
          <span
            className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 cursor-pointer"
            onClick={handleAccountClick}
          ></span>
          <span className="material-icons text-gray-500">アカウント管理</span>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-gray-100 p-4">
        <div className="flex space-x-12 text-gray-700">
          <a href="#" className="font-bold">ホーム</a>
          <a href="#" className="font-bold">会議室の予約</a>
          <a href="#" className="font-bold">イベント</a>
          <a href="#" className="font-bold">スキルを探す</a>
          <a href="#" className="font-bold">案件を探す</a>
          <a href="#" className="font-bold">プロジェクト管理</a>
          <a href="#" className="font-bold">サポート</a>
        </div>
      </nav>

      {/* Main Image with Welcome Message */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/officemain.jpg"
          alt="Office Main Image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 p-4 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-bold">Welcom 街中 太郎様</h2>
          <p className="text-lg font-semibold"> 三軒茶屋 Office </p>
        </div>
      </div>

      {/* Buttons Section under the Image */}
      <div className="flex flex-col items-center justify-center flex-grow my-8 px-8 space-y-8">
        <div className="w-full flex flex-col items-center space-y-4">
          <button
            onClick={handleFindMatches}
            className="w-5/6 max-w-2xl py-5 text-lg font-semibold bg-orange-500 bg-opacity-80 text-white rounded-lg hover:bg-opacity-100 transition"
            disabled={isLoading} // ローディング中はボタンを無効化
          >
            案件にマッチした利用者を探す
          </button>

          {/* Loading Spinner and Message */}
          {isLoading && (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-lg text-orange-500">AIによるマッチング中...</p>
            </div>
          )}

          {/* Display Match Results */}
          {matchResult && (
            <div className="mt-4 bg-white p-4 rounded shadow-md w-5/6 text-gray-900">
              <h3 className="text-lg font-bold">マッチング結果</h3>
              <p className="font-semibold">スキルID: {matchResult.best_match_skill_id}</p>
              <p className="font-semibold">ユーザー名: {matchResult.user_details?.user_name}</p>
              <p className="font-semibold">オフィスID: {matchResult.user_details?.office_id}</p>
              <p className="font-semibold">ジョブID: {matchResult.user_details?.job_id}</p>
              <p className="font-semibold">スキル名: {matchResult.user_details?.skill_name}</p>
            </div>
          )}

          {/* Display Error Message */}
          {errorMessage && (
            <div className="mt-4 text-red-500 font-bold">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
