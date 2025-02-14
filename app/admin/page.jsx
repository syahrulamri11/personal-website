"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/config/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/toolbar";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [view, setView] = useState("list");
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "resize-y min-h-[150px] border border-gray-300 p-3 rounded-b-lg focus:outline-none",
      },
    },
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        fetchArticles();
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase.from("articles").select("*").order("createdAt", { ascending: false });
      if (error) throw error;
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;
  
    const { data, error } = await supabase.storage.from("images").upload(filePath, file);
  
    if (error) {
      console.error("Error uploading image:", error.message);
      setUploading(false);
      alert("Gagal mengunggah gambar: " + error.message);
      return;
    }
  
    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(filePath);
  
    if (publicUrlData) {
      setImage(publicUrlData.publicUrl);
      alert("Gambar berhasil diunggah!");
    } else {
      console.error("Gagal mendapatkan URL gambar.");
      alert("Gagal mendapatkan URL gambar.");
    }
  
    setUploading(false);
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !image.trim() || !editor.getHTML().trim()) {
      alert("Semua kolom harus diisi!");
      return;
    }

    try {
      const { error } = await supabase.from("articles").insert([
        { title, description, image, content: editor.getHTML(), createdAt: new Date() },
      ]);
      if (error) throw error;
      setTitle("");
      setDescription("");
      setImage("");
      editor.commands.clearContent();
      alert("Artikel berhasil ditambahkan!");
      setView("list");
      fetchArticles();
    } catch (err) {
      console.error("Gagal menambahkan artikel:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-72 bg-gray-900 text-white p-6 flex flex-col space-y-6 shadow-lg mt-20">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <Button variant="ghost" className="text-left" onClick={() => setView("list")}>📄 Daftar Artikel</Button>
        <Button variant="ghost" className="text-left" onClick={() => setView("add")}>➕ Tambah Artikel</Button>
        <Button variant="destructive" className="mt-auto" onClick={handleLogout}>🚪 Logout</Button>
      </div>

      <div className="flex-1 p-8 overflow-auto mt-20">
        {view === "list" ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Daftar Artikel</h2>
            {articles.length === 0 ? (
              <p className="text-gray-500">Belum ada artikel.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Card key={article.id} className="shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-5 flex flex-col space-y-2">
                      {article.image && (
                        <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-lg" />
                      )}
                      <h3 className="font-bold text-lg text-gray-900">{article.title}</h3>
                      <p className="text-gray-600 text-sm">{article.description}</p>
                      <Button variant="destructive" onClick={() => handleDelete(article.id)} className="mt-2">🗑 Hapus</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
