import React from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About({ dark }) {
  const skills = {
    "Backend": ["C#", "Python","Flask",".NET Core","ASP.NET MVC","Entity Framework"],
    "Frontend": ["React","Typescript","ASP.NET", "HTML5", "CSS3", "JavaScript", "Tailwind CSS" ],
    "Database Management": ["SQL Server", "Oracle SQL", "MongoDB"],
    "Tools & Platforms": ["Visual Studio 2022", "VS Code", "SQL Server", "Git" ,"GitHub","Postman" ],
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "Deloai Pvt Ltd",
      period: "2025 - Present",
      description:
        "Contributing to full-stack development using React.js, .NET, and SQL Server. Collaborating with the engineering team to develop scalable, high-performance web applications and enhance product reliability.",
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Varcons Technologies Pvt Ltd",
      period: "2024",
      description:
        "Worked on both frontend and backend tasks, implementing responsive web interfaces and integrating APIs to deliver efficient full-stack solutions.",
    },
    {
      title: "Frontend Web Development Intern",
      company: "Motion Cut Pvt Ltd",
      period: "2024",
      description:
        "Developed dynamic UI components using HTML, CSS, and JavaScript. Improved usability and optimized performance for client-side applications.",
    },
  ];

  const certifications = [
    "Python Full Stack Development – Besant Technologies (Sep 2024 – Jan 2025)",
    "Dot Net Course – Besant Technologies (Nov 2024 – Jan 2025)",
    "Oracle SQL – Besant Technologies",
    "Python Programming – Besant Technologies",
  ];

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-20 transition-colors duration-300 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* About Me */}
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          I’m <strong>Harish M</strong>, a passionate Software Developer currently working at{" "}
          <strong>Deloai Pvt Ltd</strong>. I specialize in building scalable and efficient software
          solutions using technologies like React.js, .NET, and SQL Server.
        </p>
        <p>
          As a dedicated developer, I enjoy designing clean, maintainable code and solving complex
          problems through modern technology. My focus is on delivering user-friendly, reliable, and
          high-quality web applications.
        </p>
        <p>
          I’m always eager to explore new tools and frameworks, improve my skills, and collaborate on
          projects that make a real impact.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className={dark ? "text-blue-400" : "text-blue-600"}>&lt;/&gt;</span> Technical Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xl font-semibold mb-4">{category}</h4>
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
      </div>

      {/* Education */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education
        </h3>
        <div
          className={`p-5 rounded-xl border-l-4 ${
            dark
              ? "bg-gray-800 border-blue-500 text-gray-200"
              : "bg-white border-blue-600 text-gray-800 shadow-sm"
          }`}
        >
          <h4 className="font-semibold text-lg">Bachelor of Engineering in Computer Science</h4>
          <p className="text-sm opacity-80">Sri Sairam College of Engineering | 2020 - 2024</p>
          <p className="mt-2 text-sm opacity-90">Graduated with a CGPA of 7.1</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="w-6 h-6" /> Certifications
        </h3>
        <div
          className={`p-5 rounded-xl ${
            dark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800 shadow-sm"
          }`}
        >
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6" /> Work Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`p-5 rounded-xl border-l-4 ${
                dark
                  ? "bg-gray-800 border-blue-500 text-gray-200"
                  : "bg-white border-blue-600 text-gray-800 shadow-sm"
              }`}
            >
              <h4 className="font-semibold text-lg">{exp.title}</h4>
              <p className="text-sm opacity-80">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2 text-sm opacity-90">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
