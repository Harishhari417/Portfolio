import React from "react";

const TechnicalSkills = ({ dark }) => {
  const skills = {
    Frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Next.js"],
    Backend: ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD", "Agile"],
  };

  return (
    <section
      className={`py-12 px-6 md:px-20 transition-colors duration-300 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span className={dark ? "text-blue-400" : "text-blue-600"}>&lt;/&gt;</span>
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-lg border transition shadow-sm hover:shadow-md ${
                    dark
                      ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
