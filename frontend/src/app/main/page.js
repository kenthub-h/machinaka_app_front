"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  const handleAccountClick = () => {
    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 shadow flex justify-between items-center">
        {/* Larger Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={50} /> {/* ロゴをもっと大きくしました */}
        </div>

        {/* Right Icons */}
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
        {/* Welcome Message Overlay in Bottom-Right */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 p-4 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-bold">Welcom 街中 太郎様</h2> {/* 文言を変更 */}
          <p className="text-lg font-semibold"> 三軒茶屋 Office </p> {/* 同色で統一 */}
        </div>
      </div>

      {/* Buttons Section under the Image with Spacing */}
      <div className="flex items-center justify-center my-8 px-8">
        {/* Left Column for Guest Registration */}
        <div className="w-1/2 flex justify-center">
          <button className="w-5/6 max-w-2xl py-5 text-lg font-semibold bg-orange-500 bg-opacity-80 text-white rounded-lg hover:bg-opacity-100 transition">
            あなたの案件にマッチした利用者
          </button>
        </div>
        
        {/* Right Column for Wi-Fi */}
        <div className="w-1/2 flex justify-center">
          <button className="w-5/6 max-w-2xl py-5 text-lg font-semibold bg-orange-500 bg-opacity-80 text-white rounded-lg hover:bg-opacity-100 transition">
            現在稼働中のスキル提供者
          </button>
        </div>
      </div>
    </div>
  );
}
