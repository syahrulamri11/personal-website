// /app/page.jsx
import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-12 bg-gradient-to-b from-secondary to-background">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary">
            Hello, I'm <span className="text-accent">Syahrul Amri</span>
          </h1>
          <p className="text-lg md:text-xl text-text max-w-lg">
            Sports enthusiast, interested in history, politically literate, and studying tech. Explore my world of articles, projects, and creative works.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700">
              Explore Articles
            </button>
            <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600">
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/syahrulprofile.jpg"
            alt="Hero illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

       {/* Recent Projects Section */}
       <section className="py-16 px-8 md:px-16 lg:px-32 bg-gray-100 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">My Recent Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
          <img src="/lomboktravelia.png" alt="Project 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-secondary">Lombok Travelia</h3>
            <p className="text-gray-600 mb-4">
              A fully coded travel booking platform built from next js, providing users with a seamless way to explore and book travel experiences in Lombok.
            </p>
            <Button
              as="a"
              href="https://lomboktravelia.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-teal-400 to-blue-500 text-white px-5 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              View Project
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
          <img src="/lezatara.png" alt="Project 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-secondary">Lezatara</h3>
            <p className="text-gray-600 mb-4">
              A website indonesian traditional food and built entirely from the ground up, offering intuitive tools for project and task tracking.
            </p>
            <Button
              as="a"
              href="https://lezatara.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-teal-400 to-blue-500 text-white px-5 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              View Project
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
          <img src="/nutriwise.png" alt="Project 3" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-secondary">Nutriwise</h3>
            <p className="text-gray-600 mb-4">
              A nutrition tracking app coded from vanilla javascript, offering a clean and user-friendly interface to help users maintain a healthy lifestyle.
            </p>
            <Button
              as="a"
              href="https://nutriwise.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-teal-400 to-blue-500 text-white px-5 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-gradient-to-b from-background to-secondary text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Subscribe for the Latest Updates</h2>
        <p className="text-gray-700 mb-6">Subscribe to newsletter and never miss the new post every week.</p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600">
            Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Let’s work together and make something amazing.</h2>
        <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-500">
          Contact Me
        </button>
      </section>
    </div>
  );
}
