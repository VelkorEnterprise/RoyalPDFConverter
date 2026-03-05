import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants.ts';
import { useLanguage } from '../components/Layout.tsx';

const BlogList = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = "Blog - PDFVerse Guides & Tips";
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t('blogTitle')}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('blogSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100">
                <div className="h-56 bg-gradient-to-br from-orange-100 to-slate-100 relative overflow-hidden">
                   {/* Placeholder Pattern */}
                   <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%">
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-orange-600 shadow-sm">
                      {post.keywords[0]}
                   </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="text-orange-600 font-semibold text-sm flex items-center mt-auto">
                    {t('readArticle')} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;