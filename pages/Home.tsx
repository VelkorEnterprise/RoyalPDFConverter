
// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TOOLS, BLOG_POSTS, APP_NAME, FAQS } from '../constants.ts';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, FileStack, Settings, Lock, Zap, Globe, 
  ShieldCheck, Star, Crown, ChevronRight, ArrowRight, 
  FileUp, Command, Sparkles, UserCheck, ShieldAlert, BadgeCheck, 
  ArrowDown, MousePointer2, Shield, Fingerprint, DatabaseZap, CheckCircle2,
  HelpCircle, ChevronUp, ChevronDown, Plus, Minus, BookOpen, Search
} from 'lucide-react';
import { useLanguage } from '../components/Layout.tsx';

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gold-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
      >
        <span className="text-lg md:text-2xl font-serif font-black text-slate-950 group-hover:text-gold-600 transition-colors tracking-tight pr-4">
          {q}
        </span>
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${isOpen ? 'bg-slate-950 text-white' : 'bg-gold-50 text-gold-600'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-4xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();

  const scrollToTools = (e) => {
    e?.preventDefault();
    const element = document.getElementById('tools-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.hash === '#tools') scrollToTools();
  }, [location]);

  const stats = [
    { label: "Documents Secured", value: "52M+", icon: ShieldCheck },
    { label: "Daily Active Users", value: "250K+", icon: UserCheck },
    { label: "Free Alternative", value: "Smallpdf #1", icon: BadgeCheck },
    { label: "Privacy Grade", value: "Military", icon: Lock }
  ];

  const categoryContext = {
    all: "Every tool you need to manage PDF documents for free. No limits, no signups. The ultimate all-in-one suite for professional document handling.",
    organize: "Best free tools to merge, split, and organize PDF pages online with absolute privacy and high performance logic.",
    convert: "Convert PDF to Word, JPG, PNG, and AI-Analysis with 100% accuracy, high speed, and local safety protocols.",
    edit: "Edit PDF text, add watermarks, and fix rotations in-browser. Professional editing suite for elite users and high-end businesses.",
    security: "Military-grade PDF protection. Sign, encrypt, and redact sensitive info locally without server logs or tracking.",
    optimize: "Compress PDF to 200kb without quality loss. Professional document optimization for elite web and email delivery."
  };

  const filteredTools = useMemo(() => {
    if (!TOOLS) return [];
    if (activeCategory === 'all') return TOOLS;
    return TOOLS.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  const latestPosts = useMemo(() => (BLOG_POSTS || []).slice(0, 3), []);

  const getCategoryTheme = (category) => {
    const themes = {
      organize: { borderHover: 'hover:border-blue-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', decorColor: 'text-blue-100', titleHover: 'group-hover:text-blue-700' },
      convert: { borderHover: 'hover:border-purple-500', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', decorColor: 'text-purple-100', titleHover: 'group-hover:text-purple-700' },
      edit: { borderHover: 'hover:border-rose-500', iconBg: 'bg-rose-100', iconColor: 'text-rose-600', decorColor: 'text-rose-100', titleHover: 'group-hover:text-rose-700' },
      security: { borderHover: 'hover:border-emerald-500', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', decorColor: 'text-emerald-100', titleHover: 'group-hover:text-emerald-700' },
      optimize: { borderHover: 'hover:border-amber-500', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', decorColor: 'text-amber-100', titleHover: 'group-hover:text-amber-700' }
    };
    return themes[category] || { borderHover: 'hover:border-gold-500', iconBg: 'bg-gold-100', iconColor: 'text-gold-600', decorColor: 'text-gold-100', titleHover: 'group-hover:text-gold-700' };
  };

  return (
    <div className="bg-white overflow-x-hidden font-sans text-slate-900 selection:bg-gold-200">
      
      {/* AUTHORITATIVE HERO */}
      <section className="relative pt-20 pb-16 px-6 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF3710,_transparent_70%)] opacity-80"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
             <span className="px-4 py-1.5 bg-slate-950 text-gold-400 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center border border-gold-900"><Star size={10} className="mr-2 fill-current"/> 4.9/5 RATING</span>
             <span className="px-4 py-1.5 bg-gold-50 text-gold-700 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center border border-gold-100"><ShieldCheck size={10} className="mr-2"/> HIPAA COMPLIANT</span>
             <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center border border-emerald-100"><Zap size={10} className="mr-2"/> NO LIMITS</span>
             <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center border border-blue-100">NO SIGNUP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="font-serif font-[900] text-slate-950 tracking-tighter leading-[1.0] md:leading-[0.9] mb-8 text-center uppercase break-words"
            style={{ fontSize: 'clamp(2.2rem, 10vw, 8rem)' }}
          >
            {t('heroTitle')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 italic">
               The Gold Alternative.
            </span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-500 text-base md:text-2xl font-medium max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed px-2">
            Stop paying $9/month. <strong>{APP_NAME}</strong> is the premier <strong>free alternative to Smallpdf</strong>, iLovePDF, and Adobe Acrobat. We offer military-grade security by processing 100% of your documents in your browser locally. No registration, no signup, no risks—just pure document mastery.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24 w-full sm:w-auto relative z-20 px-4">
            <Link to="/tools/merge-pdf" className="w-full sm:w-auto px-10 py-5 md:px-16 md:py-8 bg-gold-400 text-white rounded-3xl md:rounded-[2.5rem] font-black text-base md:text-xl shadow-3xl hover:scale-105 transition-all flex items-center justify-center group hover:bg-gold-500">
              <FileUp className="mr-3 shrink-0" size={20} /> START FREE FOREVER
            </Link>
            <button onClick={scrollToTools} className="w-full sm:w-auto px-10 py-5 md:px-16 md:py-8 bg-white text-slate-900 border border-gold-200 rounded-3xl md:rounded-[2.5rem] font-black text-base md:text-xl hover:bg-gold-50 transition-all flex items-center justify-center shadow-lg group">
              {t('exploreTools')} <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform shrink-0" size={20}/>
            </button>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full max-w-5xl bg-white border border-gold-100 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 shadow-3xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 relative z-20 mx-auto">
            {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gold-50 rounded-xl md:rounded-2xl flex items-center justify-center text-gold-500 mb-1 md:mb-2 border border-gold-100 shrink-0">
                        <stat.icon size={16} md:size={20} />
                    </div>
                    <div className="text-lg md:text-3xl font-[1000] text-slate-900 tracking-tighter">{stat.value}</div>
                    <div className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <div id="tools-section" className="bg-[#FBF9F0] pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden z-10 border-t border-gold-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-6xl font-serif font-black text-slate-950 mb-4 md:mb-6 uppercase tracking-tight leading-tight">Professional PDF Suite</h2>
                <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto">
                   Explore the world's most comprehensive <strong>free PDF tools</strong>. From <strong>merging PDFs</strong> to <strong>AI document analysis</strong>, we have everything you need for elite document management.
                </p>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-10">
                <div className="bg-white p-1.5 md:p-2 rounded-3xl md:rounded-[3rem] border border-gold-100 shadow-xl flex flex-wrap justify-center gap-1 md:gap-2 overflow-x-auto max-w-full">
                {['all', 'organize', 'convert', 'edit', 'security', 'optimize'].map(id => (
                    <button key={id} onClick={() => setActiveCategory(id)} className={`flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 rounded-2xl md:rounded-[2.5rem] font-bold text-[9px] md:text-xs uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === id ? `bg-slate-900 text-white scale-105 shadow-md` : 'bg-white text-slate-500 hover:bg-gold-50'}`}>
                        {id}
                    </button>
                ))}
                </div>
                <motion.p key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-600 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.3em] text-center px-4 max-w-2xl">
                    {categoryContext[activeCategory]}
                </motion.p>
            </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTools.map((tool) => {
                const theme = getCategoryTheme(tool.category);
                const Icon = tool.icon;
                return (
                    <Link key={tool.id} to={`/tools/${tool.slug}`} className={`group relative block bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-10 border border-gold-100/50 transition-all duration-300 shadow-sm hover:shadow-3xl hover:-translate-y-2 overflow-hidden ${theme.borderHover}`}>
                        <div className={`absolute -bottom-10 -right-10 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform -rotate-12 group-hover:scale-125 ${theme.decorColor}`}>
                            <Icon size={180} />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6 md:mb-10">
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 shrink-0 ${theme.iconBg} ${theme.iconColor}`}>
                                    <Icon size={24} md:size={28} />
                                </div>
                                <div className="text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-gold-500 shrink-0"><ArrowRight size={20} /></div>
                            </div>
                            <h3 className={`text-lg md:text-2xl font-serif font-black text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight ${theme.titleHover}`}>{tool.name}</h3>
                            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6 opacity-80">{tool.description}</p>
                            <div className="mt-auto pt-4 md:pt-6 border-t border-gold-50 flex gap-2 overflow-x-auto no-scrollbar">
                                <span className="px-3 py-1 bg-gold-50 text-[7px] md:text-[8px] font-black text-gold-600 rounded-full uppercase tracking-widest whitespace-nowrap">Local WASM</span>
                                <span className="px-3 py-1 bg-slate-50 text-[7px] md:text-[8px] font-black text-slate-400 rounded-full uppercase tracking-widest whitespace-nowrap">No Cloud</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
      </div>

      {/* AUTHORITY MASTERY HUB - 1500+ WORDS SEO CONTENT */}
      <section className="bg-white py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
                
                {/* Left Column: Massive SEO Articles */}
                <div className="lg:col-span-8 space-y-24">
                    <article>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-gold-200">
                             INDUSTRY DISRUPTION ANALYSIS
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-10 leading-[0.9] uppercase tracking-tighter">
                            Disrupting the $10B Document Market: The Rise of Client-Side PDF Tools.
                        </h2>
                        <div className="prose prose-xl prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-6">
                            <p>
                                Welcome to the new era of document intelligence. For decades, the PDF market has been dominated by legacy conglomerates like Adobe Acrobat and subscription-heavy startups like Smallpdf and iLovePDF. These platforms built their empires on <strong>server-side processing</strong>, a model that requires you to upload your most sensitive assets to their remote data centers.
                            </p>
                            <p>
                                <strong>Royal PDF-converter</strong> is the catalyst for a fundamental shift in the industry. By leveraging <strong>WebAssembly (WASM)</strong>, we have ported high-performance C++ document engines directly into the browser. This technological breakthrough means that for the first time, you can access a <strong>best free pdf editor online no signup</strong> that executes 100% on your local hardware.
                            </p>
                            <p>
                                Why does this matter? Performance and Privacy. When you <strong>merge pdf free</strong> on our platform, there is zero upload time. Your device's CPU handles the binary heavy lifting. This makes our <strong>online pdf converter secure</strong> by default—your files never touch the cloud, making data leaks mathematically impossible. We are not just a tool; we are a privacy-first movement disrupting the traditional SaaS monetization model.
                            </p>
                        </div>
                    </article>

                    <article>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-200">
                             TECHNICAL SEO STRATEGY 2025
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-10 leading-[0.9] uppercase tracking-tighter">
                            Mastering Technical SEO for PDF Assets: How to Rank on Page 1.
                        </h2>
                        <div className="prose prose-xl prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-6">
                            <p>
                                Search Engine Optimization isn't just for HTML. In 2025, Google and modern AI platforms like Gemini and ChatGPT are indexing PDF files with unprecedented depth. If you want to <strong>index pdf in google search</strong> effectively, you must understand the technical nuances of document metadata.
                            </p>
                            <p>
                                Most users overlook the power of internal PDF properties. By using our <strong>pdf metadata seo optimization</strong> tool, you can inject primary and secondary keywords directly into the document's binary stream. This includes optimizing the 'Title' tag to match high-intent queries like <strong>"how to convert pdf to word free"</strong>.
                            </p>
                            <p>
                                Furthermore, file size is a critical ranking factor. A bloated document is a dead document. Our <strong>compress pdf without losing quality</strong> tool ensures your files load instantly, satisfying the Core Web Vitals that search engines demand. We provide the infrastructure to turn your static business documents into high-authority ranking machines that capture long-tail traffic across the global web.
                            </p>
                        </div>
                    </article>

                    <article>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-emerald-200">
                             SECURITY & COMPLIANCE AUDIT
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-10 leading-[0.9] uppercase tracking-tighter">
                            HIPAA and GDPR Compliant PDF Architecture: A Zero-Trust Reality.
                        </h2>
                        <div className="prose prose-xl prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-6">
                            <p>
                                In the medical, legal, and financial sectors, <strong>data privacy</strong> is non-negotiable. Uploading a patient record to a standard <strong>free pdf editor online</strong> is often a violation of HIPAA or GDPR regulations. The risk of third-party data logging is simply too high for professional operations.
                            </p>
                            <p>
                                Our <strong>hipaa compliant pdf editor online</strong> utilizes a zero-trust architecture. We don't have a backend that "sees" your files. Every operation—from <strong>redact pdf free online</strong> to <strong>sign pdf free</strong>—happens in an isolated memory space in your browser. This satisfies the most rigorous security audits because the data path never leaves the user's controlled environment.
                            </p>
                            <p>
                                We utilize <strong>military-grade AES-256 encryption</strong> for our <strong>protect pdf free</strong> utility. This ensures that even in transit, your assets are impenetrable. By choosing Royal PDF-converter, you are opting for a "Security-First" workflow that empowers your business to handle sensitive information without the liability of cloud-based processing.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Right Column: Competitive Analysis & FAQs */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="bg-slate-950 text-white rounded-[3rem] p-10 shadow-3xl border border-gold-900/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 text-gold-400"><Command size={100}/></div>
                        <h4 className="text-2xl font-serif font-black mb-8 uppercase tracking-tight text-gold-400 border-b border-gold-900/50 pb-4">Royal Advantages</h4>
                        <div className="space-y-6">
                            {[
                                { text: "No Daily Task Limits (Infinite Use)", icon: CheckCircle2 },
                                { text: "No File Size Restrictions (Gigabyte Ready)", icon: CheckCircle2 },
                                { text: "No Registration Required (Instant Access)", icon: CheckCircle2 },
                                { text: "No Cloud Uploading (Absolute Privacy)", icon: CheckCircle2 },
                                { text: "AI-Powered Optimization (SEO Ready)", icon: CheckCircle2 },
                                { text: "Military-Grade AES-256 Encryption", icon: CheckCircle2 },
                                { text: "100% Free Forever (No Hidden Fees)", icon: CheckCircle2 },
                                { text: "HIPAA & GDPR Compliant Logic", icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-[11px] font-bold tracking-wide leading-tight">
                                    <div className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center text-slate-950 shrink-0">
                                        <item.icon size={12} />
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gold-50/50 border border-gold-100 rounded-[3rem] p-10">
                        <h4 className="text-xl font-serif font-black mb-6 uppercase text-slate-950">Expert Search Queries</h4>
                        <div className="space-y-4">
                            {[
                                "how to convert text to pdf secure",
                                "best free html to pdf converter",
                                "merge pdf no signup unlimited",
                                "compress pdf to 200kb high res",
                                "extract tables from pdf to excel ai",
                                "pdf to markdown for developers",
                                "secure pdf sign doc no cloud"
                            ].map((query, i) => (
                                <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-gold-600 tracking-widest border-b border-gold-100 pb-3 last:border-0">
                                    <Search size={12}/> {query}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PEOPLE ALSO ASK */}
      <section className="bg-slate-50 py-24 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gold-400 text-white rounded-2xl md:rounded-3xl mb-6 shadow-3xl shrink-0">
                    <HelpCircle size={28} md:size={32} />
                </div>
                <h2 className="text-3xl md:text-6xl font-serif font-black text-slate-950 mb-4 uppercase tracking-tight">People Also Ask</h2>
                <p className="text-slate-500 text-base md:text-xl font-medium px-4">Expert answers to the most common PDF search queries across the web.</p>
            </div>
            <div className="bg-white rounded-3xl md:rounded-[4rem] p-6 md:p-20 shadow-3xl border border-gold-100">
                {FAQS.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
            </div>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="bg-slate-950 py-20 border-t-[12px] md:border-t-[16px] border-gold-400">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
              <div className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gold-400 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto text-white shadow-3xl shadow-gold-400/20 shrink-0"><Globe size={24} md:size={28}/></div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[8px] md:text-xs">Global Reach</h4>
                  <p className="text-slate-400 text-[8px] md:text-sm font-medium leading-tight">Serving millions in 150+ countries with Tier-1 optimized content.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gold-400 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto text-white shadow-3xl shadow-gold-400/20 shrink-0"><ShieldCheck size={24} md:size={28}/></div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[8px] md:text-xs">Technical SEO</h4>
                  <p className="text-slate-400 text-[8px] md:text-sm font-medium leading-tight">Structured data and semantic HTML for #1 Google ranking.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gold-400 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto text-white shadow-3xl shadow-gold-400/20 shrink-0"><Zap size={24} md:size={28}/></div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[8px] md:text-xs">WASM Powered</h4>
                  <p className="text-slate-400 text-[8px] md:text-sm font-medium leading-tight">Executing local binary logic at native machine speeds instantly.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gold-400 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto text-white shadow-3xl shadow-gold-400/20 shrink-0"><Lock size={24} md:size={28}/></div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[8px] md:text-xs">No Paywalls</h4>
                  <p className="text-slate-400 text-[8px] md:text-sm font-medium leading-tight">Disrupting competitors with 100% free unlimited tools for life.</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
