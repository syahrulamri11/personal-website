// /app/articles.jsx
export default function Articles() {
    return (
      <div className="p-8 text-center bg-background min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-primary mb-4">Articles</h1>
        <p className="text-xl text-gray-600 max-w-lg mb-6">
          Here you can find all the articles and blogs that I've written.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-primary">Article 1</h2>
            <p className="text-gray-600">This is a short description of article 1...</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-primary">Article 2</h2>
            <p className="text-gray-600">This is a short description of article 2...</p>
          </div>
          {/* Add more articles here */}
        </div>
      </div>
    );
  }
  