import { Editor } from '@tiptap/react';
import { 
  Bold, 
  Italic, 
  Strikethrough, 
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Type} from 'lucide-react';

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) return null;

  const buttonClass = (isActive: boolean) =>
    `group relative flex items-center justify-center w-9 h-9 rounded-lg text-sm border transition-all duration-200 ${
      isActive
        ? 'bg-blue-500 text-white border-blue-500 shadow-md scale-105'
        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 hover:shadow-sm'
    }`;

  const sectionClass = "flex items-center gap-1";
  const separatorClass = "w-px h-6 bg-gray-300 mx-2";

  return (
    <div className="w-full border-b bg-gradient-to-r from-gray-50 to-gray-100 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-1">
        
        {/* Headings Section */}
        <div className={sectionClass}>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={buttonClass(editor.isActive('heading', { level: 1 }))}
            title="Heading 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={buttonClass(editor.isActive('heading', { level: 2 }))}
            title="Heading 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={buttonClass(editor.isActive('heading', { level: 3 }))}
            title="Heading 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={buttonClass(editor.isActive('paragraph'))}
            title="Paragraph"
          >
            <Type className="w-4 h-4" />
          </button>
        </div>

        <div className={separatorClass}></div>

        {/* Text Formatting Section */}
        <div className={sectionClass}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={buttonClass(editor.isActive('bold'))}
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={buttonClass(editor.isActive('italic'))}
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={buttonClass(editor.isActive('strike'))}
            title="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={buttonClass(editor.isActive('highlight'))}
            title="Highlight"
          >
            <Highlighter className="w-4 h-4" />
          </button>
        </div>

        <div className={separatorClass}></div>

        {/* Text Alignment Section */}
        <div className={sectionClass}>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={buttonClass(editor.isActive({ textAlign: 'left' }))}
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={buttonClass(editor.isActive({ textAlign: 'center' }))}
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={buttonClass(editor.isActive({ textAlign: 'right' }))}
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={buttonClass(editor.isActive({ textAlign: 'justify' }))}
            title="Justify"
          >
            <AlignJustify className="w-4 h-4" />
          </button>
        </div>

        <div className={separatorClass}></div>

        {/* Lists and Code Section */}
        <div className={sectionClass}>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={buttonClass(editor.isActive('bulletList'))}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={buttonClass(editor.isActive('orderedList'))}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={buttonClass(editor.isActive('codeBlock'))}
            title="Code Block"
          >
            <Code2 className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Optional: Status bar */}
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>Ready to edit</span>
            {editor.isFocused && <span className="text-blue-500">• Focused</span>}
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Z</kbd>
            <span>to undo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;