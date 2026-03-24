import React, { useEffect } from 'react';
import { useLanguage } from '../components/Layout.tsx';
import { INFO_CONTENT } from '../constants.ts';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoPageProps {
    type: 'help' | 'news' | 'feedback' | 'support' | 'faq' | 'security' | 'disclaimer' | 'privacy' | 'terms' | 'cookies';
}

const InfoPage: React.FC<InfoPageProps> = ({ type }) => {
    const { t } = useLanguage();
    // Fallback content if constant is missing, though we will add it.
    const content = INFO_CONTENT?.[type] || { title: "Page Not Found", content: "This page is currently under maintenance." };

    useEffect(() => {
        document.title = `${content.title} - PDFVerse`;
    }, [content]);

    return (
        <div className="bg-gold-50 min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                 <Link to="/" className="inline-flex items-center text-gold-500 hover:text-gold-700 mb-8 transition-colors font-black uppercase text-xs tracking-widest">
                    <ArrowLeft size={16} className="mr-3" /> Back to Home
                 </Link>
                <div className="bg-white rounded-[3rem] shadow-3xl border border-gold-100 p-8 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-gold-950 mb-10 border-b border-gold-100 pb-8 uppercase tracking-tight">
                        {content.title}
                    </h1>
                    <div 
                        className="prose prose-lg prose-gold max-w-none prose-headings:font-serif prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-gold-600 prose-a:font-bold prose-strong:text-gold-950 text-gold-800/80 font-medium leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoPage;