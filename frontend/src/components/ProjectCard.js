// components/ProjectCard.js

import React from "react";

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image || "/data.jpg"} // デフォルト画像を設定
        alt={title}
        onError={(e) => {
          e.target.src = "/data.jpg"; // エラー時にデフォルト画像に切り替え
        }}
      />
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-yellow-300 flex justify-center items-center">
            {/* プロフィールアイコン */}
            <span role="img" aria-label="user">
              👤
            </span>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-blue-500 hover:text-blue-700">詳細</button>
          <button className="text-gray-500 hover:text-red-500">
            <span role="img" aria-label="like">
              ❤️
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
