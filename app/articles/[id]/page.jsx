// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "../../config/firebase"; // Sesuaikan path jika perlu
// import { FaCalendarAlt } from "react-icons/fa";

// export default function ArticleDetail() {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       const { data, error } = await supabase
//         .from("articles")
//         .select("*")
//         .eq("id", id)
//         .single();

//       if (error) {
//         console.error("Error fetching article:", error);
//       } else {
//         setArticle(data);
//       }
//       setLoading(false);
//     };

//     if (id) fetchArticle();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-gray-600">Loading article...</p>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-red-500">Article not found!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-20 pb-12 px-4 lg:px-16 bg-gray-100">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* HEADER ARTIKEL */}
//         <div className="p-6 border-b">
//           <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">{article.title}</h1>
//           <div className="flex items-center text-gray-500 text-sm mt-3">
//             <FaCalendarAlt className="mr-2" />
//             <p>{new Date(article.createdAt).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* GAMBAR UTAMA */}
//         {article.image && (
//           <div className="relative w-full overflow-hidden">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-[400px] object-cover transform transition duration-500 hover:scale-105"
//             />
//             <p className="absolute bottom-2 left-4 bg-black bg-opacity-60 text-white text-xs p-1 rounded">
//               Ilustrasi foto
//             </p>
//           </div>
//         )}

//         {/* KONTEN ARTIKEL */}
//         <div className="p-6">
//           {/* Deskripsi */}
//           <p className="text-lg text-gray-700 italic mb-4">{article.description}</p>

//           {/* Konten Artikel */}
//           <div
//             className="prose prose-lg prose-gray mt-4 text-gray-800 leading-relaxed max-w-3xl mx-auto"
//             dangerouslySetInnerHTML={{ __html: article.content }}
//           />

//           {/* FOOTER ARTIKEL */}
//           <div className="mt-8 pt-4 border-t flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
//             <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Syahrul Amri</p>
//             <p className="italic text-center sm:text-right">
//               Diterbitkan pada {new Date(article.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaCalendarAlt } from "react-icons/fa";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
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
    <div className="min-h-screen pt-20 pb-12 px-4 lg:px-16 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">{article.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mt-3">
            <FaCalendarAlt className="mr-2" />
            <p>{new Date(article.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {article.image && (
          <div className="relative w-full overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover transform transition duration-500 hover:scale-105"
            />
            <p className="absolute bottom-2 left-4 bg-black bg-opacity-60 text-white text-xs p-1 rounded">
              Ilustrasi foto
            </p>
          </div>
        )}

        <div className="p-6">
          <p className="text-lg text-gray-700 italic mb-4">{article.description}</p>

          <div
            className="prose prose-lg prose-gray mt-4 text-gray-800 leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-8 pt-4 border-t flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Syahrul Amri</p>
            <p className="italic text-center sm:text-right">
              Diterbitkan pada {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
