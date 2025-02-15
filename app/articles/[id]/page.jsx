"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../config/supabase"; // Sesuaikan path jika perlu

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from("articles").select("*").eq("id", id).single();

      if (error) {
        console.error("Error fetching article:", error);
      } else {
        setArticle(data);
      }
      setLoading(false);
    };

    if (id) fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Article not found!</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen mt-20">
      <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{new Date(article.createdAt).toLocaleDateString()}</p>
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700 leading-relaxed">{article.description}</p>
    </div>
  );
}
