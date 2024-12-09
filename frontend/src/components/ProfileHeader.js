// components/ProfileHeader.js

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileHeader() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users/1"); // ユーザーIDを指定
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-base-200 rounded-lg shadow-lg flex items-center space-x-6">
      <img
        src="/mogi_maru.png" // 固定画像（APIで拡張可能）
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
      />
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Profile</h3>
        <h2 className="text-2xl font-bold text-gray-800">{user.user_name}</h2>
        <p className="text-sm text-gray-600">{user.user_type}</p>
        <p className="text-sm text-gray-600">オフィスID: {user.office_id}</p>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
            Follow
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProfileHeader() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/users/1"); // ユーザーIDを指定
//         setUser(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="p-4 bg-base-200 rounded-lg shadow-lg flex items-center space-x-6">
//       <img
//         src="/mogi_maru.png" // 固定画像（APIで拡張可能）
//         alt="Profile"
//         className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
//       />
//       <div>
//         <h3 className="text-xl font-bold text-gray-800 mb-2">Profile</h3>
//         <h2 className="text-2xl font-bold text-gray-800">{user.user_name}</h2>
//         <p className="text-sm text-gray-600">{user.user_type}</p>
//         <p className="text-sm text-gray-600">オフィスID: {user.office_id}</p>
//         <div className="mt-4 space-x-4">
//           <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
//             Follow
//           </button>
//           <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
//             Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function ProfileHeader() {
//   return (
//     <div className="p-4 bg-base-200 rounded-lg shadow-lg flex items-center space-x-6">
//       {/* プロフィール画像 */}
//       <img
//         src="/mogi_maru.png" // 画像のパスを修正してください
//         alt="Profile"
//         className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
//       />
//       {/* プロフィール情報 */}
//       <div>
//         <h3 className="text-xl font-bold text-gray-800 mb-2">Profile</h3> {/* 太字に設定 */}
//         <h2 className="text-2xl font-bold text-gray-800">徹久 零</h2>
//         <p className="text-sm text-gray-600">スタートアップ・IT系 / フロントエンジニア</p>
//         <p className="text-sm text-gray-600">利用年数: 1年2ヶ月</p>
//         <div className="mt-4 space-x-4">
//           <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
//             Follow
//           </button>
//           <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
//             Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default function ProfileHeader() {
//     return (
//       <div className="flex items-center space-x-4 p-4 bg-base-200 rounded-lg shadow-lg">
//         <img
//           src="/profile.jpg"
//           alt="Profile"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-2xl font-bold">徹久 零</h2>
//           <p className="text-sm text-gray-600">スタートアップ・IT系 / フロントエンジニア</p>
//           <p className="text-sm text-gray-600">利用年数: 1年2ヶ月</p>
//           <div className="mt-2 space-x-2">
//             <button className="btn btn-primary">Follow</button>
//             <button className="btn btn-secondary">Message</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  