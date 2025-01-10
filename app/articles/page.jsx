export default function Articles() {
  const articles = [
    {
      title: "Exploring the Beauty of Lombok",
      description:
        "Discover the hidden gems of Lombok, from pristine beaches to lush mountains. A guide for travelers seeking adventure and tranquility.",
      image: "/comingsoon.png",
      link: "/articles/lombok-beauty",
    },
    {
      title: "The Future of Web Development",
      description:
        "A comprehensive look at modern web technologies and trends, exploring how they are shaping the digital world for the better.",
      image: "/comingsoon.png",
      link: "/articles/web-development",
    },
    {
      title: "Tips for Effective Public Speaking",
      description:
        "Master the art of public speaking with proven techniques to engage your audience and deliver memorable presentations.",
      image: "/comingsoon.png",
      link: "/articles/public-speaking",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-background to-gray-200 min-h-screen flex flex-col items-center mt-10">
      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Featured Articles
        </h1>
        <p className="text-lg text-text max-w-2xl mx-auto">
          Explore our latest insights, guides, and stories across a variety of
          topics, designed to inspire and inform.
        </p>
      </header>

      {/* Previous Website Section */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-base text-text text-center mb-4">
          Explore more on my previous blog:
        </p>
        <a
          href="https://syahrulsaamri.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
        >
          Visit Blog
        </a>
      </div>

      {/* Articles Section */}
      <section className="w-full">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-bold text-xl px-4 text-center">
                    {article.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-primary mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-text mb-4">{article.description}</p>
                <a
                  href={article.link}
                  className="inline-block px-5 py-2 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-accent transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
