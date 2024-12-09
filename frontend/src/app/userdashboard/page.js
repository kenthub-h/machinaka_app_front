// userdashboard/page.js
"use client";
import React from "react";

import ProfileHeader from "../../components/ProfileHeader";
import MyRadarChart from "../../components/RadarChart";
import SkillsList from "../../components/SkillsList";
import Recommendations from "../../components/Recommendations";
import OfficeUsageChart from "../../components/OfficeUsageChart";


export default function ProfilePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-4">
        {/* プロフィールヘッダー */}
        <ProfileHeader />

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <MyRadarChart />
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


// export default function ProfilePage() {
//   return (
//     <div className="container mx-auto p-4">
//       <ProfileHeader />
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {/* <RadarChart /> */}
//         <SkillsList />
//       </div>
//       <Recommendations />
//       {/* <OfficeUsageChart /> */}
//     </div>
//   );
// }
