import { Button } from "@/components/ui/button"; 
import { Bold, Italic, Strikethrough, Underline, List, ListOrdered, Undo, Redo } from "lucide-react";

export default function Toolbar({ editor }) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded-t-lg shadow-md border border-gray-300">
      <Button onClick={() => editor.chain().focus().toggleBold().run()} variant="outline" size="icon">
        <Bold className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()} variant="outline" size="icon">
        <Italic className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()} variant="outline" size="icon">
        <Strikethrough className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleUnderline().run()} variant="outline" size="icon">
        <Underline className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBulletList().run()} variant="outline" size="icon">
        <List className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()} variant="outline" size="icon">
        <ListOrdered className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()} variant="outline" size="icon">
        <Undo className="w-5 h-5" />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()} variant="outline" size="icon">
        <Redo className="w-5 h-5" />
      </Button>
    </div>
  );
}
