// components/RadarChart.js
// components/RadarChart.js
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "コミュニケーション", Will: 5, Can: 4 },
  { skill: "マネジメント", Will: 3, Can: 3 },
  { skill: "論理的思考", Will: 3, Can: 2 },
  { skill: "戦略・マーケティング", Will: 4, Can: 3 },
  { skill: "デザイン", Will: 4, Can: 5 },
  { skill: "IT・AI・Tech", Will: 3, Can: 2 },
  { skill: "業務専門性", Will: 3, Can: 4 },
  { skill: "業界専門知識", Will: 4, Can: 3 },
];

export default function MyRadarChart() {
  return (
    <div style={{ width: "100%", height: 400, backgroundColor: "white", borderRadius: "10px", padding: "20px" }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar
            name="Will"
            dataKey="Will"
            stroke="rgba(54, 162, 235, 1)"
            fill="rgba(54, 162, 235, 0.2)"
            fillOpacity={0.6}
          />
          <Radar
            name="Can"
            dataKey="Can"
            stroke="rgba(255, 99, 132, 1)"
            fill="rgba(255, 99, 132, 0.2)"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}



// import React from "react";
// import {
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   Radar,
//   Legend,
//   PolarRadiusAxis,
//   ResponsiveContainer,
// } from "recharts";

// import { Chart as ChartJS, RadialLinearScale, LinearScale, CategoryScale, Legend as ChartLegend } from "chart.js";

// // 必要なスケールを登録
// ChartJS.register(RadialLinearScale, LinearScale, CategoryScale, ChartLegend);

// const data = [
//   { skill: "戦略", Will: 3, Can: 2 },
//   { skill: "データ分析", Will: 4, Can: 3 },
//   { skill: "AI", Will: 5, Can: 3 },
//   { skill: "セキュリティ", Will: 2, Can: 5 },
//   { skill: "デザイン", Will: 3, Can: 4 },
// ];

// export default function MyRadarChart() {
//   return (
//     <div className="p-4 bg-base-200 rounded-lg shadow-lg">
//       <h3 className="text-lg font-bold mb-2">スキルマップ</h3>
//       <div style={{ width: "100%", height: 400 }}>
//         <ResponsiveContainer>
//           <RadarChart data={data}>
//             <PolarGrid />
//             <PolarAngleAxis dataKey="skill" />
//             <PolarRadiusAxis angle={30} domain={[0, 5]} />
//             <Radar
//               name="Will"
//               dataKey="Will"
//               stroke="rgba(54, 162, 235, 1)"
//               fill="rgba(54, 162, 235, 0.2)"
//               fillOpacity={0.6}
//             />
//             <Radar
//               name="Can"
//               dataKey="Can"
//               stroke="rgba(255, 99, 132, 1)"
//               fill="rgba(255, 99, 132, 0.2)"
//               fillOpacity={0.6}
//             />
//             <Legend />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
