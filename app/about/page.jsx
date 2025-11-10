import React from "react";
import { FaCode, FaPaintBrush, FaUsers, FaBrain, FaTasks, FaPenNib, FaTrophy, FaCertificate, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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
          I am Syahrul Amri, a fresh graduate in Informatics Engineering with a strong interest in sports, technology, and public communication.
          I have hands-on experience in administrative project management, content writing, and web development. 
          Passionate about digital content creation, public relations, and effective leadership, I continuously sharpen my skills in front-end development, UI/UX design, and SEO writing.
          Through various organizational and professional roles, I’ve developed solid communication, problem-solving, and decision-making abilities.
          </p>
        </div>
        <div className="relative md:w-1/2 group mt-8 md:mt-8">
          <img
            src="/syahrulgibli.jpeg"
            alt="Profile picture"
            className="w-full max-w-xs mx-auto rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-8 border-white"
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
            { title: "Project Management", icon: <FaTasks />, description: "Team collaboration, task delegation, & Proficient in Microsoft Excel (PivotTable, formulas, dashboards), Word, PowerPoint, and data reporting for team coordination and documentation." },
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
              company: "Indonesian Youth Generation Forum",
              period: "2019",
              icon: <FaUsers />,
            },
            {
                title: "Delegate",
                company: "Indonesian Youth Parliament The House of Representatives, Republic of Indonesia (DPR RI)",
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

      <section className="py-16 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
    Achievements & Certifications
  </h2>
  <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Best Graduate of Faculty of Engineering Judicial",
        description: "Universitas Mataram, August 2024",
        icon: <FaTrophy />,
      },
      {
        title: "BRI SMART Scholarship Awardee",
        description: "2020-2021",
        icon: <FaCertificate />,
      },
      {
        title: "Awardee Kita Bisa Education Scholarship x Jonatan Christie",
        description: "2022",
        icon: <FaCertificate />,
      },
      {
        title: "National Essay Competition Winner Biotech Open Camp",
        description: "2020",
        icon: <FaTrophy />,
        image: "/esai.png",
      },
      {
        title: "Microsoft Azure AI Fundamentals Certification",
        description: "2022",
        icon: <FaCertificate />,
        image: "/azure.png",
      },
      {
        title: "Dicoding Front-End Web Developer Certification",
        description: "2023",
        icon: <FaCertificate />,
        image: "/dicoding.png",
      },
    ].map((achievement, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-secondary-light to-primary-light shadow-md rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:shadow-lg"
      >
        <div className="text-5xl text-yellow-500 mb-4">{achievement.icon}</div>
        <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
        <p className="text-gray-700 mb-4">{achievement.description}</p>
        {achievement.image && (
          <img
            src={achievement.image}
            alt={`${achievement.title} certificate`}
            className="w-full h-auto rounded-lg shadow-md transition-all hover:scale-105"
          />
        )}
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

    {/* Keep in Touch Section */}
<section className="relative bg-gradient-to-br from-blue-100 via-white to-indigo-50 py-20 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
  {/* Background Decorative Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="bg-gradient-to-r from-indigo-500 to-transparent w-96 h-96 rounded-full blur-3xl opacity-30 top-1/4 left-0 transform -translate-x-1/2"></div>
    <div className="bg-gradient-to-l from-blue-500 to-transparent w-80 h-80 rounded-full blur-3xl opacity-30 bottom-1/4 right-0 transform translate-x-1/2"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 grid gap-16 md:grid-cols-12 items-center">
    {/* Contact Information */}
    <div className="md:col-span-5 text-center md:text-left space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
        Get in Touch<span className="text-primary">.</span>
      </h2>
      <p className="text-lg text-gray-600">
        I’d love to hear from you! Whether you have a question, a proposal, or just want to say hi, feel free to reach out.
      </p>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-700">syahrulamri1102@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-semibold text-gray-700">+62 853 3871 7747</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-lg font-semibold text-gray-700">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="md:col-span-7 bg-white shadow-2xl rounded-3xl p-10">
      <h3 className="text-3xl font-bold text-primary text-center">Let’s Talk</h3>
      <p className="text-center text-gray-500 mb-6">
        I’ll respond to your message as soon as possible.
      </p>
      <form className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition placeholder-transparent"
            placeholder="Your Name"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-primary peer-focus:text-sm"
          >
            Your Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition placeholder-transparent"
            placeholder="Your Email"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-primary peer-focus:text-sm"
          >
            Your Email
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition placeholder-transparent"
            placeholder="Your Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-primary peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>
        <button
        type="submit"
        className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-md flex items-center justify-center gap-2 hover:shadow-lg hover:bg-primary-light transition transform hover:-translate-y-1"
      >
        <span>Send Message</span>
        <FaPaperPlane className="text-xl" />
      </button>
      </form>
    </div>
      </div>
    </section>

    </div>
  );
}
