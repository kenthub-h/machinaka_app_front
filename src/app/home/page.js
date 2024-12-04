'use client';

import 'leaflet/dist/leaflet.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// 地図部分
function MapSection() {
  return (
    <div className="px-8 py-6 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">地図上で物件を選択してください</h2>
      <MapContainer
        center={[35.6895, 139.6917]}
        zoom={12}
        className="w-full h-96 rounded"
        whenReady={(mapInstance) => {
          // 地図が初期化済みである場合を防止する
          const container = mapInstance.target.getContainer();
          if (container._leaflet_id) {
            container._leaflet_id = null;
          }
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[35.6895, 139.6917]}>
          <Popup>東京都中心部</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

// PropertyCards コンポーネント
function PropertyCards() {
  const properties = [
    {
      id: 1,
      title: 'ビズトライ 三軒茶屋',
      description: 'テキスト',
      location: '世田谷区',
      access: 'テキスト',
      capacity: 'テキスト',
      image: '/images/property1.jpg',
    },
    {
      id: 2,
      title: 'ビズトライ 中目黒',
      description: 'テキスト',
      location: '目黒区',
      access: 'テキスト',
      capacity: 'テキスト',
      image: '/images/property2.jpg',
    },
    {
      id: 3,
      title: 'ビズトライ 横浜',
      description: 'テキスト',
      location: '横浜市',
      access: 'テキスト',
      capacity: 'テキスト',
      image: '/images/property3.jpg',
    },
  ];

  return (
    <div className="px-8 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">物件情報</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative">
              <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm px-4 py-2">
                詳細はお問合せください
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{property.description}</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">所在地:</span>
                  <span>{property.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">アクセス:</span>
                  <span>{property.access}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">登録可能人数:</span>
                  <span>{property.capacity}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-4 border-t">
              <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded shadow hover:bg-orange-600">
                見学予約はこちら
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600">
                まずは資料請求
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Header コンポーネント
export default function Header() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('list'); // タブ状態管理用

  const handleLoginClick = () => {
    router.push('/login'); // ログイン画面に遷移
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="H¹O Logo" className="h-8" />
        </div>

        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-orange-500">TOP</a>
          <a href="#" className="hover:text-orange-500">ビズトライとは</a>
          <a href="#" className="hover:text-orange-500">物件一覧</a>
          <a href="#" className="hover:text-orange-500">サービス・施設</a>
          <a href="#" className="hover:text-orange-500">契約条件・利用料</a>
          <a href="#" className="hover:text-orange-500">入居者の声</a>
          <a href="#" className="hover:text-orange-500">コラム</a>
          <a href="#" className="hover:text-orange-500">よくあるご質問</a>
        </nav>

        <button
          onClick={handleLoginClick}
          className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md shadow hover:bg-orange-600"
        >
          ログイン
        </button>
      </header>

      {/* 物件検索タブ */}
      <div>
        <div className="flex justify-center space-x-4 my-6">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-6 py-2 text-sm font-semibold rounded ${
              activeTab === 'list'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            一覧から探す
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`px-6 py-2 text-sm font-semibold rounded ${
              activeTab === 'map'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            地図から探す
          </button>
        </div>

        {/* タブのコンテンツ */}
        <div className="px-8 py-6 bg-gray-100">
          {activeTab === 'list' ? (
            <PropertyCards />
          ) : (
            <MapSection />
          )}
        </div>
      </div>
    </div>
  );
}
