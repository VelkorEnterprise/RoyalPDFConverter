
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Globe, CheckCircle, Crown, ShieldCheck, Zap, Lock, Star, X, ChevronRight, ArrowLeft } from 'lucide-react';
import { NAV_LINKS, APP_NAME, TRANSLATIONS, TOOLS, BLOG_POSTS } from '../constants.ts';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContextType } from '../types.ts';
import React, { useState, createContext, useContext, useEffect } from 'react';

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

const MetaUpdater = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        let title = "Royal PDF-converter | #1 Free Professional PDF Suite & AI Engine";
        let desc = "The world's fastest professional PDF suite. Secure, local, and incredibly fast. 36+ tools for free. No signup, no limits.";
        
        if (pathname.includes('/tools/')) {
            const slug = pathname.split('/').pop();
            const tool = TOOLS.find(t => t.slug === slug);
            if (tool) {
                title = `${tool.name} | Secure Client-Side PDF Tools | Royal PDF`;
                desc = `Use our ${tool.name} tool for free. 100% private, no server uploads. The fastest way to ${tool.description.toLowerCase()}`;
            }
        } else if (pathname.includes('/blog/')) {
            const slug = pathname.split('/').pop();
            const post = BLOG_POSTS.find(p => p.slug === slug);
            if (post) {
                title = `${post.title} | Knowledge Hub | Royal PDF`;
                desc = post.excerpt;
            }
        }
        
        document.title = title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', desc);
    }, [pathname]);

    return null;
};

const Ticker = () => {
    const phrases = [
        "Royal Professional PDF Suite", "Military-Grade Security", "100% Free & Unlimited", 
        "No Signup Required", "No Uploads Needed", "Client-Side AI Processing", 
        "Gold Standard Privacy", "Instant Execution", "HIPAA Compliant Workflows"
    ];
    return (
        <div className="bg-slate-950 text-gold-400 py-3 text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden whitespace-nowrap border-b border-gold-900 sticky top-20 z-40">
            <div className="animate-marquee inline-block will-change-transform">
                {[...phrases, ...phrases, ...phrases].map((p, i) => (
                    <span key={i} className="mx-12 flex items-center inline-flex">
                        <Star size={10} className="mr-3 text-gold-300 fill-current"/> {p}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'de' | 'hi' | 'ja' | 'it'>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowLangMenu(false);
  }, [pathname]);

  const t = (key: string, replacements?: { [key: string]: string }) => {
    let translation = TRANSLATIONS[language]?.[key] || TRANSLATIONS['en']?.[key] || key;
    if (replacements) {
        Object.keys(replacements).forEach(r => translation = translation.replace(`{${r}}`, replacements[r]));
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <MetaUpdater />
      <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#FBF9F0] selection:bg-gold-200">
        <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-gold-100 shadow-[0_4px_30px_rgba(212,175,55,0.05)] h-20">
          <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {pathname !== '/' && (
                <button 
                  onClick={() => navigate(-1)} 
                  className="p-2 bg-slate-100 hover:bg-gold-50 text-slate-600 hover:text-gold-600 rounded-xl transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <Link to="/" className="flex items-center space-x-3 group shrink-0">
                <div className="w-10 h-10 bg-gold-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-gold-200 group-hover:bg-slate-950 transition-colors">
                    <Crown size={20} fill="currentColor" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl md:text-2xl font-serif font-black text-slate-950 tracking-tight">Royal PDF</span>
                  <span className="text-[8px] font-black text-gold-600 uppercase tracking-widest mt-1">Premium Suite</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-[9px] font-black uppercase tracking-tighter text-slate-400 border-r border-slate-100 pr-8 mr-2">
                <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded"><ShieldCheck size={10} className="mr-1"/> SECURE</span>
                <span className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded ml-2"><Zap size={10} className="mr-1"/> FAST</span>
                <span className="flex items-center text-gold-600 bg-gold-50 px-2 py-1 rounded ml-2"><Lock size={10} className="mr-1"/> NO SIGNUP</span>
              </div>
              
              {NAV_LINKS.map(l => (
                  <Link key={l.path} to={l.path} className="text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors relative group">
                      {t(l.name.toLowerCase()) || l.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-400 transition-all group-hover:w-full"></span>
                  </Link>
              ))}
              <div className="relative">
                <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center text-xs font-bold uppercase hover:text-gold-500 transition-colors border border-slate-200 px-3 py-1.5 rounded-lg hover:border-gold-300 bg-white shadow-sm">
                    <Globe size={14} className="mr-2"/> {language}
                </button>
                <AnimatePresence>
                {showLangMenu && (
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute top-full right-0 mt-3 bg-white shadow-2xl rounded-2xl border border-gold-100 p-2 w-40 overflow-hidden z-[60]">
                    {['en', 'es', 'fr', 'de', 'hi', 'ja', 'it'].map(l => (
                        <button key={l} onClick={() => {setLanguage(l as any); setShowLangMenu(false)}} className="block w-full text-left px-4 py-3 hover:bg-gold-50 uppercase font-bold text-xs text-slate-600 hover:text-gold-700 transition-colors rounded-lg flex items-center">
                            {l === language && <CheckCircle size={12} className="mr-2 text-gold-500"/>} {l}
                        </button>
                    ))}
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="lg:hidden flex items-center space-x-4">
                <button onClick={() => setShowLangMenu(!showLangMenu)} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-900"><Globe size={18}/></button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-950 p-2 bg-gold-50 rounded-lg">
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>
          </div>
          
          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ x: '100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '100%' }} 
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 top-20 bg-white z-[90] lg:hidden flex flex-col p-10 overflow-y-auto"
              >
                <div className="flex flex-col space-y-8">
                  {NAV_LINKS.map((l, i) => (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={l.path}
                    >
                        <Link 
                            to={l.path} 
                            className="text-4xl font-serif font-black text-slate-950 uppercase tracking-tighter hover:text-gold-500 flex items-center justify-between group"
                        >
                            {t(l.name.toLowerCase()) || l.name}
                            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-auto pt-10 border-t border-gold-100 flex flex-col gap-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Security Verified Tools</p>
                    <div className="flex justify-center gap-4">
                        <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase"><ShieldCheck size={12} className="mr-2"/> SECURE</div>
                        <div className="flex items-center text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase"><Lock size={12} className="mr-2"/> PRIVATE</div>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        
        <Ticker />
        <main className="flex-grow bg-[#FBF9F0]">{children}</main>
        
        <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 border-t-[12px] border-gold-400">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-10 h-10 bg-gold-400 rounded-xl flex items-center justify-center text-white shadow-xl shadow-gold-500/20"><Crown size={20} fill="currentColor"/></div>
                        <span className="text-3xl font-serif font-black tracking-tight">Royal PDF</span>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-12 font-medium opacity-80">
                        The world's premium document architecture. We help 2M+ users manage business assets with absolute client-side security. 100% Free.
                    </p>
                </div>
                <div>
                    <h4 className="text-gold-400 font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-gold-400 pl-4">Platform</h4>
                    <ul className="space-y-5 text-sm font-bold text-slate-300 uppercase tracking-widest">
                        <li><Link to="/#tools" className="hover:text-gold-400 transition-colors">36+ Utilities</Link></li>
                        <li><Link to="/blog" className="hover:text-gold-400 transition-colors">Knowledge Base</Link></li>
                        <li><Link to="/security" className="hover:text-gold-400 transition-colors">Security Audit</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gold-400 font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-gold-400 pl-4">Support</h4>
                    <ul className="space-y-5 text-sm font-bold text-slate-300 uppercase tracking-widest">
                        <li><Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Charter</Link></li>
                        <li><Link to="/terms" className="hover:text-gold-400 transition-colors">Service Terms</Link></li>
                        <li><Link to="/help" className="hover:text-gold-400 transition-colors">Documentation</Link></li>
                        <li><Link to="/export" className="hover:text-gold-400 transition-colors text-emerald-400">Export Source Code</Link></li>
                    </ul>
                </div>
            </div>

            {/* Global Locations Footer */}
            <div className="max-w-7xl mx-auto border-t border-slate-900 pt-12 pb-12 mb-12">
                <h4 className="text-gold-400 font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-center">Global Locations</h4>
                <div className="flex flex-wrap justify-center gap-6">
                    {['us', 'uk', 'ca', 'au', 'de', 'jp', 'ch', 'fr', 'sg', 'nl'].map(code => (
                        <Link key={code} to={`/location/${code}`} className="text-xs font-bold text-slate-400 hover:text-gold-400 uppercase tracking-widest transition-colors">
                            {code === 'us' ? 'USA' : code === 'uk' ? 'UK' : code === 'ca' ? 'Canada' : code === 'au' ? 'Australia' : code === 'de' ? 'Germany' : code === 'jp' ? 'Japan' : code === 'ch' ? 'Switzerland' : code === 'fr' ? 'France' : code === 'sg' ? 'Singapore' : 'Netherlands'}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-slate-900 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">© 2025 ROYAL PDF GLOBAL OPERATIONS</p>
                  <p className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.2em]">Deploying High-Performance Client-Side Binary Logic</p>
                </div>
            </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};
export default Layout;
