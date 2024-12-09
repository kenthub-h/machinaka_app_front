// components/Recommendations.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

export default function Recommendations() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/projects");
        setProjects(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-base-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">おすすめプロジェクト</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.project_id}
            image={project.project_image_url}
            title={project.project_name}
            description={project.project_description || "説明はありません"}
          />
        ))}
      </div>
    </div>
  );
}


// import React from "react";
// import ProjectCard from "./ProjectCard";

// export default function Recommendations() {
//   const projects = [
//     {
//       image: "/ecsite.jpg",
//       title: "WEBサイト制作",
//       description: "A社ホームページのリニューアルの企画・制作",
//     },
//     {
//       image: "/bizplan.jpg",
//       title: "ビジネスプランニング",
//       description: "B社新規事業のプランニング・事業計画・モックづくりなどのサポート",
//     },
//     {
//       image: "/sns.jpg",
//       title: "SNS運用サポート",
//       description: "C社のSNS活用について戦略・企画立案のサポートから運用・実行まで",
//     },
//   ];

//   return (
//     <div className="p-4 bg-base-200 rounded-lg shadow-lg">
//      <h3 className="text-lg font-bold mb-2">おすすめプロジェクト</h3>
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             image={project.image}
//             title={project.title}
//             description={project.description}
//          />
//        ))}
//      </div>
//     </div>
//   );



    // return (
    //   <div className="p-4 bg-base-200 rounded-lg shadow-lg">
    //     <h3 className="text-lg font-bold mb-2">おすすめプロジェクト</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //       {projects.map((project, index) => (
    //         <div
    //           key={index}
    //           className="card bg-base-100 shadow-md p-4 rounded-lg"
    //         >
    //           <h4 className="text-md font-bold">{project.title}</h4>
    //           <p className="text-sm">{project.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );