
// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, TOOLS, APP_NAME } from '../constants.ts';
import { ArrowLeft, Calendar, User, Tag, ChevronRight, LayoutGrid, Quote, Sparkles, Zap, ShieldCheck, Crown } from 'lucide-react';
import { useLanguage } from '../components/Layout.tsx';
import { motion, useScroll, useSpring } from 'framer-motion';

const Breadcrumbs = ({ title }) => (
    <nav className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10 overflow-x-auto whitespace-nowrap no-scrollbar">
        <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <ChevronRight size={10} className="mx-3 shrink-0" />
        <Link to="/blog" className="hover:text-gold-600 transition-colors">Knowledge Hub</Link>
        <ChevronRight size={10} className="mx-3 shrink-0" />
        <span className="text-slate-900 truncate max-w-[200px]">{title}</span>
    </nav>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const featuredTool = useMemo(() => {
    return TOOLS.find(tool => tool.slug === post?.relatedToolSlug) || TOOLS[0];
  }, [post]);

  const otherTools = useMemo(() => {
    return TOOLS.filter(tool => tool.id !== featuredTool.id).slice(0, 5);
  }, [featuredTool]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - ${APP_NAME} Mastery Hub`;
    }
  }, [post]);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-black text-slate-400 uppercase tracking-widest">Article Not Found</div>;

  return (
    <div className="bg-white min-h-screen pb-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gold-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16">
        <div className="lg:flex lg:gap-16">
          {/* MAIN CONTENT AREA */}
          <div className="lg:flex-[2.5] animate-fade-in">
            <Breadcrumbs title={post.title} />

            <Link to="/blog" className="inline-flex items-center text-slate-400 hover:text-gold-600 mb-12 transition-all font-black uppercase text-[10px] tracking-[0.3em] group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t('backToBlog')}
            </Link>
            
            <article className="mb-20">
              <header className="mb-20">
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
                  <span className="flex items-center bg-slate-50 px-4 py-2 rounded-xl text-slate-900"><Calendar size={12} className="mr-2 text-gold-500"/> {post.date}</span>
                  <span className="flex items-center bg-slate-50 px-4 py-2 rounded-xl text-slate-900"><User size={12} className="mr-2 text-gold-500"/> {post.author}</span>
                </div>
                <h1 className="text-5xl md:text-[5rem] font-serif font-[900] text-slate-950 leading-[0.95] mb-12 tracking-[-0.04em]">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  {post.keywords.map(k => (
                    <span key={k} className="inline-flex items-center px-4 py-2 rounded-xl bg-gold-50 text-gold-700 text-[10px] font-black uppercase tracking-[0.2em] border border-gold-100">
                      <Tag size={10} className="mr-2" /> {k}
                    </span>
                  ))}
                </div>
              </header>
              
              <div 
                className="prose prose-2xl prose-slate max-w-none 
                  prose-headings:font-serif prose-headings:font-[900] prose-headings:text-slate-950 prose-headings:tracking-tight prose-headings:mb-8 prose-headings:mt-16
                  prose-p:text-slate-600 prose-p:font-medium prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-xl
                  prose-strong:text-slate-950 prose-strong:font-black 
                  prose-a:text-gold-600 prose-a:no-underline hover:prose-a:text-gold-700 prose-a:border-b-2 prose-a:border-gold-200 hover:prose-a:border-gold-600 transition-all
                  prose-ul:list-none prose-ul:pl-0 prose-li:bg-slate-50 prose-li:p-6 prose-li:rounded-2xl prose-li:mb-4 prose-li:border prose-li:border-slate-100 prose-li:text-slate-700 prose-li:font-bold prose-li:flex prose-li:before:content-['✓'] prose-li:before:text-gold-500 prose-li:before:mr-4
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-slate-400 font-black text-xs uppercase tracking-[0.3em] italic">Written by PDFVerse Editorial Board</div>
                 <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all"><Quote size={20}/></button>
                 </div>
              </div>
            </article>

            {/* CALL TO ACTION BOTTOM */}
            <div className="bg-slate-950 rounded-[4rem] p-16 text-white text-center shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <Zap size={400} className="absolute -bottom-20 -right-20 rotate-12 text-gold-500" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-none tracking-tight">Transform Your Workflow</h2>
                 <p className="text-slate-400 font-medium text-xl mb-12 max-w-2xl mx-auto">Experience the power of local-first document tools. No signup, no uploads.</p>
                 <Link to="/" className="inline-flex items-center px-12 py-6 bg-gold-400 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all hover:bg-gold-500">
                    Back to Suite <ChevronRight size={16} className="ml-2" />
                 </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:flex-1 mt-12 lg:mt-32 space-y-12">
            <div className="sticky top-24 space-y-12">
                <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-gold-200 transition-colors">
                    <div className="mb-10 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gold-400 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-gold-200">
                            <featuredTool.icon size={40} />
                        </div>
                    </div>
                    <h3 className="text-3xl font-serif font-black mb-6 leading-tight text-center uppercase">Try {featuredTool.name}</h3>
                    <p className="text-slate-500 font-medium text-center mb-10 leading-relaxed text-sm">
                        {featuredTool.description}
                    </p>
                    <Link to={`/tools/${featuredTool.slug}`} className="w-full bg-slate-950 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center hover:bg-gold-500 transition-all shadow-xl">
                        Launch Tool <ChevronRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
                    <h3 className="text-xl font-black text-slate-950 mb-8 flex items-center uppercase tracking-widest">
                        <LayoutGrid size={20} className="mr-3 text-gold-500" /> Suite
                    </h3>
                    <div className="space-y-4">
                        {otherTools.map(tool => (
                            <Link key={tool.id} to={`/tools/${tool.slug}`} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group">
                                <div className={`w-10 h-10 bg-slate-100 group-hover:bg-gold-400 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all`}>
                                    <tool.icon size={18} />
                                </div>
                                <div className="font-bold text-slate-700 text-sm uppercase tracking-wide group-hover:text-slate-900 transition-colors">{tool.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
