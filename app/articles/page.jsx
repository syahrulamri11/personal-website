"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../config/supabase"; // Import Supabase

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("createdAt", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-background to-gray-200 min-h-screen flex flex-col items-center mt-10">
      {/* Header Section */}
      <header className="mb-10 text-center">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Articles
        </motion.h1>

        <motion.p
          className="text-lg text-text max-w-2xl mx-auto mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Explore our latest insights, guides, and stories across a variety of
          topics, designed to inspire and inform.
        </motion.p>

        {/* Garis bawah stylish */}
        <motion.div
          className="w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        ></motion.div>

        {/* Tombol Visit Blog */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center mt-6"
        >
          <p className="text-base text-text text-center mb-4">
            Explore more on my previous blog:
          </p>
          <a
            href="https://syahrulsaamri.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform"
          >
            Visit Blog
          </a>
        </motion.div>
      </header>

      {/* Articles Section */}
      <section className="w-full">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                  href={`/articles/${article.id}`} // Menggunakan link yang lebih sesuai
                  className="inline-block px-5 py-2 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-accent transition-colors"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
