import React from "react";
import { FaCode, FaPaintBrush, FaUsers, FaBrain, FaTasks, FaPenNib, FaTrophy, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-secondary to-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-16 bg-gradient-to-r from-secondary via-primary to-background text-white shadow-xl">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-yellow-300">Me</span>
          </h1>
          <p className="text-lg md:text-xl max-w-lg">
          I am Syahrul Amri, a sports enthusiast with a deep interest in history and political literacy. 
          Currently exploring the world of technology and sharpening my skills in web programming, 
          particularly as a UI/UX Designer and Front-End Developer.
          I am also passionate about effective communication and public relations, shaped through diverse experiences in organizational roles.
          </p>
        </div>
        <div className="relative md:w-1/2 group mt-8 md:mt-8">
          <img
            src="/syahrulprofile.jpg"
            alt="Profile picture"
            className="w-full max-w-sm mx-auto rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-8 border-white"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          My Skills
        </h2>
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Web Development", icon: <FaCode />, description: "HTML, CSS, JavaScript, SQL" },
            { title: "Creative Design", icon: <FaPaintBrush />, description: "Figma & Canva" },
            { title: "Public Speaking", icon: <FaUsers />, description: "Effective communication and leadership" },
            { title: "Problem Solving", icon: <FaBrain />, description: "Critical thinking and decision making" },
            { title: "Project Management", icon: <FaTasks />, description: "Team collaboration and task delegation" },
            { title: "Writing", icon: <FaPenNib />, description: "Content creation and documentation" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary-light to-primary-light shadow-md rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-secondary-light to-background">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          My Experience
        </h2>
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2">
          {[
            {
              title: "Assistant Lecturer",
              company: "Database Systems, Universitas Mataram",
              period: "2022",
              icon: <FaUsers />,
            },
            {
              title: "Member",
              company: "Himpunan Mahasiswa Informatika UNRAM",
              period: "2022 - 2024",
              icon: <FaTasks />,
            },
            {
                title: "Member",
                company: "UKM Penalaran dan Riset Ilmiah Mahasiswa",
                period: "2021 - 2023",
                icon: <FaTasks />,
              },
            {
              title: "Delegate",
              company: "Indonesian Youth Generation",
              period: "2019",
              icon: <FaUsers />,
            },
            {
                title: "Delegate",
                company: "Indonesian Youth Parliament",
                period: "2019",
                icon: <FaUsers />,
              },
            {
              title: "Chairperson",
              company: "OSIS SMA Negeri 1 Empang",
              period: "2018 - 2019",
              icon: <FaUsers />,
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl flex items-center"
            >
              <div className="text-4xl text-primary mr-4">{experience.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                <p className="text-gray-500 font-semibold">{experience.company}</p>
                <p className="text-gray-700 mt-2">{experience.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Achievements & Certifications
        </h2>
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Best Graduate", description: "Universitas Mataram, August 2024", icon: <FaTrophy /> },
            { title: "BRI SMART Scholarship Awardee", description: "2020-2021", icon: <FaCertificate /> },
            { title: "National Essay Competition Winner", description: "Biotech Open Camp, 2020", icon: <FaTrophy /> },
            { title: "Microsoft Azure AI Fundamentals Certification", description: "2022", icon: <FaCertificate /> },
            { title: "Dicoding Front-End Web Developer Certification", description: "2023", icon: <FaCertificate /> },
          ].map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary-light to-primary-light shadow-md rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl text-primary mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary via-primary to-background text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>
        <p className="text-lg mb-8">
          Interested in collaborating or learning more about me? Feel free to
          reach out!
        </p>
        <button className="px-8 py-4 bg-yellow-300 text-secondary font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-all">
          Contact Me
        </button>
      </section>
    </div>
  );
}
