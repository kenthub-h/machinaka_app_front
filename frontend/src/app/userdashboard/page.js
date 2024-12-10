// userdashboard/page.js
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import MyRadarChart from "../../components/RadarChart";
import SkillsList from "../../components/SkillsList";
import Recommendations from "../../components/Recommendations";
import OfficeUsageChart from "../../components/OfficeUsageChart";

export default function Dashboard() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/main"); // ホーム画面へ遷移
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 shadow flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <span className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-yellow-400"></span>
          <span className="material-icons text-gray-500">アカウント管理</span>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-gray-100 p-4">
        <div className="flex space-x-12 text-gray-700">
          <a onClick={handleHomeClick} className="font-bold cursor-pointer">
            ホーム
          </a>
          <a href="#" className="font-bold">
            会議室の予約
          </a>
          <a href="#" className="font-bold">
            イベント
          </a>
          <a href="#" className="font-bold">
            スキルを探す
          </a>
          <a href="#" className="font-bold">
            案件を探す
          </a>
          <a href="#" className="font-bold">
            プロジェクト管理
          </a>
          <a href="#" className="font-bold">
            サポート
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-4">
        {/* プロフィールヘッダー */}
        <ProfileHeader />

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <MyRadarChart /> {/* レーダーチャート */}
          <SkillsList /> {/* 自分で思う強み */}
        </div>

        {/* 推奨プロジェクト */}
        <div className="mt-8">
          <Recommendations />
        </div>

        {/* 利用履歴 */}
        <div className="mt-8">
          <OfficeUsageChart />
        </div>
      </div>
    </div>
  );
}