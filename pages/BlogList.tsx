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
    <div className="bg-gold-50/50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-gold-950 mb-6 uppercase tracking-tighter">{t('blogTitle')}</h1>
          <p className="text-xl text-gold-600/80 max-w-2xl mx-auto font-medium">
            {t('blogSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
              <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 h-full flex flex-col border border-gold-100">
                <div className="h-56 bg-gradient-to-br from-gold-100 to-gold-50 relative overflow-hidden">
                   {/* Placeholder Pattern */}
                   <div className="absolute inset-0 opacity-10 text-gold-700">
                      <svg width="100%" height="100%">
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-gold-700 shadow-sm border border-gold-100">
                      {post.keywords[0]}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gold-400 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2 text-gold-200">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-black text-gold-950 mb-4 group-hover:text-gold-700 transition-colors leading-tight uppercase">
                    {post.title}
                  </h2>
                  <p className="text-gold-600/80 text-sm line-clamp-3 mb-6 flex-grow font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-gold-700 font-black text-xs uppercase tracking-[0.2em] flex items-center mt-auto">
                    {t('readArticle')} <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
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