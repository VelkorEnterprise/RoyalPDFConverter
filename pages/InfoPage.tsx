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
        <div className="bg-slate-50 min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                 <Link to="/" className="inline-flex items-center text-slate-500 hover:text-orange-600 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                 </Link>
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-6">
                        {content.title}
                    </h1>
                    <div 
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-orange-600"
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoPage;