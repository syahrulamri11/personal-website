"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, auth, storage } from "@/app/config/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, Timestamp } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/toolbar";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        fetchArticles();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchArticles = async () => {
    try {
      const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const articlesList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setArticles(articlesList);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal memuat artikel",
        text: error.message,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !selectedFile || !editor.getHTML().trim()) {
      Swal.fire({
        icon: "warning",
        title: "Semua kolom harus diisi!",
      });
      return;
    }

    try {
      setUploading(true);

      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Gagal mengunggah gambar",
            text: error.message,
          });
          setUploading(false);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "articles"), {
            title,
            description,
            image: imageUrl,
            content: editor.getHTML(),
            createdAt: Timestamp.now(),
          });

          Swal.fire({
            icon: "success",
            title: "Artikel berhasil ditambahkan!",
            showConfirmButton: false,
            timer: 1500,
          });

          // Reset form
          setTitle("");
          setDescription("");
          setSelectedFile(null);
          setPreviewImage(null);
          editor.commands.clearContent();

          setView("list");
          fetchArticles();
          setUploading(false);
        }
      );
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal menambahkan artikel",
        text: err.message,
      });
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Hapus artikel ini?",
      text: "Tindakan ini tidak bisa dibatalkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "articles", id));
      Swal.fire({
        icon: "success",
        title: "Artikel berhasil dihapus!",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchArticles();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal menghapus artikel",
        text: error.message,
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
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
                      <Button variant="destructive" onClick={() => handleDelete(article.id)} className="mt-2">
                        🗑 Hapus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        ) : (
          <form onSubmit={handleAddArticle} className="space-y-5 bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Judul"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg"
            />

            {previewImage && (
              <img src={previewImage} alt="Preview" className="w-full max-h-48 object-cover rounded-lg border" />
            )}

            {uploading && <p className="text-sm text-blue-500">Sedang mengunggah gambar...</p>}

            <Toolbar editor={editor} />
            <EditorContent editor={editor} />

            <Button type="submit" className="bg-green-500 hover:bg-green-600" disabled={uploading}>
              {uploading ? "Mengunggah..." : "Tambah"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
