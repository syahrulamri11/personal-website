import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-12 bg-gradient-to-b from-secondary to-background">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary mt-10">
            Hello, I'm <span className="text-accent">Syahrul Amri</span>
          </h1>
          <p className="text-lg md:text-xl text-text max-w-lg">
            Sports enthusiast, interested in history, politically literate, and studying tech. Explore my world of articles, projects, and creative works.
          </p>
          <div className="space-y-4 md:space-x-4">
          <Link href="/articles">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-gray-500 transition-all mr-4">
              Explore Articles
            </button>
            </Link>
            <a
              href="https://wa.me/6285338717747?text=Hello%20I%20want%20to%20contact%20you%20for%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="px-6 py-3 bg-secondary text-background font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              Contact Me
            </button>
            </a>
          </div>
        </div>
        <div className="relative md:w-1/2 group mt-8 md:mt-0">
          <img
            src="/syahrulgibli.jpeg"
            alt="Hero illustration"
            className="w-full max-w-xs mx-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-all duration-300 border-4 border-background mr-10 mt-10"
          />
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-12 px-6 sm:px-8 md:px-16 lg:px-32 bg-gray-100 text-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-primary text-center md:text-left">
          My Recent Tech Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Cards */}
          {[{
            title: "Lombok Travelia",
            description: "A fully coded travel booking platform built from next js, providing users with a seamless way to explore and book travel experiences in Lombok.",
            image: "/lomboktravelia.png",
            link: "https://lomboktravelia.netlify.app/",
          }, {
            title: "Lezatara",
            description: "A website indonesian traditional food and built entirely from the ground up, offering intuitive tools for project and task tracking.",
            image: "/lezatara.png",
            link: "https://lezatara.netlify.app/",
          }, {
            title: "Nutriwise",
            description: "A nutrition tracking app coded from vanilla javascript, offering a clean and user-friendly interface to help users maintain a healthy lifestyle.",
            image: "/nutriwise.png",
            link: "https://nutriwise.netlify.app/",
          }].map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-secondary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-teal-400 to-blue-500 text-white px-5 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Admin Sales Portfolio Section */}
      <section className="py-12 px-6 sm:px-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-primary text-center md:text-left">
          Admin Sales Portfolio
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: "Sales & Stock Dashboard",
            description:
              "Excel-based reporting dashboard to track sales, stock movement, and product OOS status using PivotTable and data visualization.",
            image: "/portodashboard.png",
            link: "https://docs.google.com/spreadsheets/d/1bHrd2gQ0VpOSh65yRFK4xuYWN8u9-iUZ/edit?usp=sharing&ouid=104631266317644448346&rtpof=true&sd=true", 
          },
          {
            title: "Absence & Manpower Recap",
            description:
              "Automated attendance recap template for sales teams, including HK calculations and finance-ready output reports.",
            image: "/portfolio-absensi.png",
            link: "https://docs.google.com/spreadsheets/d/1IXh1j-nLfu-fn23PHSMUUKb3bocEm239/edit?usp=sharing&ouid=104631266317644448346&rtpof=true&sd=true",
          },
          {
            title: "Daily Sales Report Template",
            description:
              "Structured format for daily visit reports including outlet data, display status, and facing share tracking.",
            image: "/portfolio-dailyreport.png",
            link: "https://docs.google.com/spreadsheets/d/1stcwYsCXmr0n1rCI3Qe3jj7uyrPGJoPm/edit?usp=sharing&ouid=104631266317644448346&rtpof=true&sd=true",
          }].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-primary to-accent text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View File
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-gradient-to-b from-background to-secondary text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Subscribe for the Latest Updates</h2>
        <p className="text-sm md:text-base text-gray-700 mb-6">Subscribe to newsletter and never miss the new post every week.</p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600">
            Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Let’s work together and make something amazing.</h2>
        <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-500">
          Contact Me
        </button>
      </section>
    </div>
  );
}
