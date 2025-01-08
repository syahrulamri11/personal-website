export default function Home() {
  return (
    <div className="p-8 text-center bg-background min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-primary mb-4">
        Welcome to My Website
      </h1>
      <p className="text-xl text-gray-600 max-w-lg">
        Discover my articles, projects, and more. This is where I share my
        thoughts and ideas with the world.
      </p>
      <button className="mt-6 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-orange-500">
        Explore Articles
      </button>
    </div>
  );
}
