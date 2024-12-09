// components/OfficeUsageChart.js

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

// 必要な要素を登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function OfficeUsageChart() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficeUsage = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/offices");
        const officeData = response.data.map((office) => office.capacity);
        const officeLabels = response.data.map((office) => office.office_name);

        // Chart.jsに渡すためのデータ構造を作成
        setData({
          labels: officeLabels, // 横軸ラベル（オフィス名）
          datasets: [
            {
              label: "利用時間", // 棒グラフのラベル
              data: officeData, // 縦軸のデータ（利用時間）
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        setError(err.message);
      }
    };
    
    // データを取得する関数を呼び出し
    fetchOfficeUsage();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-base-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">利用履歴</h3>
      <Bar data={data} />
      <p className="text-sm mt-2">データは最新ではありません。</p>
    </div>
  );
}



// import React from "react";
// import { Bar } from "react-chartjs-2";

// export default function OfficeUsageChart() {
//   const data = {
//     labels: ["1/8", "1/9", "1/10", "1/11", "1/12", "1/13"],
//     datasets: [
//       {
//         label: "利用時間",
//         data: [2, 3, 1, 4, 5, 2],
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-4 bg-base-200 rounded-lg shadow-lg">
//       <h3 className="text-lg font-bold mb-2">利用履歴</h3>
//       <Bar data={data} />
//       <p className="text-sm mt-2">週平均: 2.4h / 月平均: 1.2h</p>
//     </div>
//   );
// }
