# 📝 TipTap Rich Text Editor

A modern, feature-rich WYSIWYG editor built with **TipTap**, **Next.js 15**, **React 19**, and **Tailwind CSS**. This project provides a beautiful and intuitive rich text editing experience with a comprehensive toolbar and modern UI design.

![TipTap Editor](https://img.shields.io/badge/TipTap-3.0.7-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.3-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-cyan)

## ✨ Features

### 📝 Text Formatting
- **Bold**, *Italic*, ~~Strikethrough~~ text formatting
- ==Highlight== text with custom styling
- `Inline code` with syntax highlighting
- Code blocks with dark theme

### 📐 Text Structure
- **Headings** (H1, H2, H3) with custom styling
- **Paragraphs** with proper spacing
- **Blockquotes** with left border styling
- **Lists** (Bullet and Numbered) with proper indentation

### 🎯 Text Alignment
- Left align
- Center align
- Right align
- Justify text

### 🎨 Modern UI/UX
- **Beautiful toolbar** with Lucide React icons
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Focus states** and visual feedback
- **Character count** display
- **Status indicators** (focused state, ready to edit)

### 🛠️ Technical Features
- **TypeScript** for type safety
- **Server-side rendering** compatible
- **Modular component architecture**
- **Customizable styling** with Tailwind CSS
- **Extensible** - easy to add new features

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ht986648/TiP-TAP-EDITOR.git
   cd TiP-TAP-EDITOR
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the editor in action!

## 📁 Project Structure

```
my-app/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with editor
├── components/
│   ├── rich-text-editor/
│   │   ├── index.tsx        # Main editor component
│   │   └── menubar.tsx      # Toolbar component with all controls
│   └── ui/                  # Reusable UI components
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎛️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |

## 🧩 Key Components

### RichTextEditor (`components/rich-text-editor/index.tsx`)
The main editor component that:
- Initializes TipTap editor with all extensions
- Configures styling for different content types
- Handles editor content and state
- Provides a beautiful container with shadows and borders

### MenuBar (`components/rich-text-editor/menubar.tsx`)
The toolbar component featuring:
- Icon-based buttons using Lucide React
- Grouped controls (headings, formatting, alignment, lists)
- Active state indicators
- Tooltips for better UX
- Status bar with helpful information

## 🎨 Styling & Theming

The editor uses **Tailwind CSS** for styling with:

- **Custom color scheme**: Blue accents with gray backgrounds
- **Responsive design**: Works on mobile, tablet, and desktop
- **Smooth transitions**: 200ms duration for all interactions
- **Modern shadows**: Subtle depth and elevation
- **Typography**: Optimized for readability

### Key Style Classes
- `prose-editor`: Main editor content area
- `bg-gradient-to-r from-gray-50 to-gray-100`: Toolbar gradient
- `shadow-lg`: Container shadow
- `rounded-xl`: Modern rounded corners

## 🔧 Customization

### Adding New Extensions

To add a new TipTap extension:

1. Install the extension:
   ```bash
   npm install @tiptap/extension-[extension-name]
   ```

2. Import and configure in `index.tsx`:
   ```tsx
   import NewExtension from '@tiptap/extension-[extension-name]'
   
   // Add to extensions array
   extensions: [
     // ... other extensions
     NewExtension.configure({
       // configuration options
     }),
   ]
   ```

3. Add toolbar button in `menubar.tsx`:
   ```tsx
   <button
     onClick={() => editor.chain().focus().toggleNewExtension().run()}
     className={buttonClass(editor.isActive('newExtension'))}
   >
     <NewIcon className="w-4 h-4" />
   </button>
   ```

### Styling Customization

Modify the styling by updating:
- **Colors**: Change the color scheme in Tailwind classes
- **Spacing**: Adjust padding, margins, and gaps
- **Typography**: Modify font sizes and line heights
- **Animations**: Update transition durations and effects

## 📦 Dependencies

### Core Dependencies
- **@tiptap/react**: React integration for TipTap
- **@tiptap/starter-kit**: Essential TipTap extensions
- **@tiptap/extension-***: Individual TipTap extensions
- **next**: Next.js framework
- **react**: React library
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Beautiful icon library

### Development Dependencies
- **typescript**: Type checking
- **eslint**: Code linting
- **@types/***: TypeScript type definitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Maintain component modularity
4. Add proper type definitions
5. Test your changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[TipTap](https://tiptap.dev/)** - For the amazing rich text editor framework
- **[Next.js](https://nextjs.org/)** - For the powerful React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - For the beautiful icon set

## 📞 Support

If you have any questions or need help, please:
1. Check the [TipTap Documentation](https://tiptap.dev/docs)
2. Open an issue on GitHub
3. Contact the maintainer

---

**Happy Editing!** 🎉
