"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/config/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState("list");
  const [refresh, setRefresh] = useState(false); // Untuk paksa render ulang
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (user) {
      fetchArticles();
    }
  }, [user, refresh]); // Tambahkan refresh agar memicu re-fetch setelah perubahan data

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const articlesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Data dari Firestore:", articlesData);
      setArticles(articlesData);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await addDoc(collection(db, "articles"), {
        title,
        description,
        image,
        content,
        createdAt: new Date(),
      });
      setTitle("");
      setDescription("");
      setImage("");
      setContent("");
      await fetchArticles(); // Pastikan data terbaru langsung ditampilkan
      setRefresh((prev) => !prev); // Paksa re-render
      alert("Artikel berhasil ditambahkan!");
      setView("list");
    } catch (err) {
      setError("Gagal menambahkan artikel. Coba lagi!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "articles", id));
      await fetchArticles(); // Pastikan data terbaru langsung diambil
      setRefresh((prev) => !prev); // Paksa re-render
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-5 flex flex-col mt-20">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <button className="mb-2 p-2 bg-gray-700 rounded" onClick={() => setView("list")}>
          Daftar Artikel
        </button>
        <button className="mb-2 p-2 bg-gray-700 rounded" onClick={() => setView("add")}>
          Tambah Artikel
        </button>
        <button className="mt-auto p-2 bg-red-500 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="flex-1 p-6 overflow-auto mt-20">
        {view === "list" ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Daftar Artikel</h2>
            {articles.length === 0 ? (
              <p className="text-gray-500">Belum ada artikel.</p>
            ) : (
              <ul>
                {articles.map((article) => (
                  <li key={article.id} className="border p-4 mb-2 flex justify-between">
                    <div>
                      <h3 className="font-bold">{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(article.id)}
                    >
                      Hapus
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Tambah Artikel</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleAddArticle} className="space-y-4">
              <input type="text" placeholder="Judul" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Deskripsi" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Gambar URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 border rounded" required />
              <textarea placeholder="Konten Artikel" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded" required></textarea>
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Tambah</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
