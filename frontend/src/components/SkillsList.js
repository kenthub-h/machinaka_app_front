// components/SkillsList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SkillsList() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/skills");
        setSkills(response.data.map(skill => skill.skill_name));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSkills();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-base-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">自分で思う強み</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="badge badge-primary">
            {skill}
          </span>
        ))}
      </div>
      <button className="btn bg-orange-500 text-white mt-4">
        強みのフィードバック+
      </button>
    </div>
  );
}




// import React from "react";
// export default function SkillsList() {
//     const skills = ["コミュニケーション", "問題解決", "チームリーダーシップ"];
  
//     return (
//       <div className="p-4 bg-base-200 rounded-lg shadow-lg">
//         <h3 className="text-lg font-bold mb-2">自分で思う強み</h3>
//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span key={index} className="badge badge-primary">
//               {skill}
//             </span>
//           ))}
//         </div>
//         <button className="btn bg-orange-500 text-white mt-4">
//           強みのフィードバック+
//         </button>
//         {/* <button className="btn btn-outline btn-primary mt-4">
//           強みを教えてあげる！+
//         </button> */}
//       </div>
//     );
//   }
  