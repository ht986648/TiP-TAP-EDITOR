"use client"
import React from 'react';
import MenuBar from "@/components/rich-text-editor/menubar"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'

const RichTextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-6 space-y-1",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-6 space-y-1",
                    },
                },
                heading: {
                    HTMLAttributes: {
                        class: "font-bold text-gray-900 leading-tight",
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: "text-gray-700 leading-relaxed mb-3",
                    },
                },
                blockquote: {
                    HTMLAttributes: {
                        class: "border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4",
                    },
                },
                code: {
                    HTMLAttributes: {
                        class: "bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono",
                    },
                },
                codeBlock: {
                    HTMLAttributes: {
                        class: "bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto my-4",
                    },
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight.configure({
                HTMLAttributes: {
                    class: "bg-yellow-200 px-1 rounded"
                }
            }),
            BulletList,
            OrderedList,
            ListItem.configure({
                HTMLAttributes: {
                    class: "text-gray-700 leading-relaxed",
                },
            }),
        ],
        content: '<p>Start writing your content here! 🌎️</p>',
        editorProps: {
            attributes: {
                className: `
                    min-h-[200px] 
                    max-h-[500px] 
                    overflow-y-auto 
                    border 
                    border-gray-200 
                    rounded-lg 
                    bg-white 
                    py-4 
                    px-4 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-500 
                    focus:border-transparent
                    prose 
                    prose-sm 
                    max-w-none
                    shadow-sm
                    transition-all
                    duration-200
                `
            },
        },
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    })

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Container with subtle shadow and border */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {/* Menu bar with background */}
                <div className="border-b border-gray-200 bg-gray-50">
                    <MenuBar editor={editor} />
                </div>
                
                {/* Editor content area */}
                <div className="relative">
                    <EditorContent 
                        editor={editor} 
                        className="prose-editor"
                    />
                    
                    {/* Subtle inner shadow for depth */}
                    <div className="absolute inset-0 pointer-events-none rounded-b-xl shadow-inner opacity-20"></div>
                </div>
                
                {/* Optional footer with word count or status */}
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
                    <span>Rich Text Editor</span>
                    {editor && (
                        <span>
                            {editor.storage.characterCount?.characters() || 0} characters
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RichTextEditor