import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { seoKeywords } from '../data/seoKeywords.ts';
import { FileText, Shield, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SeoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the original keyword based on the slug
  const keyword = seoKeywords.find(kw => kw.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);

  useEffect(() => {
    if (keyword) {
      document.title = `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} | Royal PDF-converter`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `The best tool for ${keyword}. 100% Free, Secure, No Signup. Convert, Merge, Split, and Edit PDFs locally.`);
      }
    }
  }, [keyword]);

  if (!keyword) {
    return <Navigate to="/" replace />;
  }

  // Get 10 random internal links for SEO
  const randomLinks = [...seoKeywords].sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <div className="min-h-screen bg-gold-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-950 text-gold-100 font-black text-[10px] mb-8 uppercase tracking-[0.2em] shadow-3xl border border-gold-700/20">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span>Top Rated PDF Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-gold-950 mb-8 leading-[0.9] tracking-tighter uppercase">
            {keyword}
          </h1>
          <p className="text-xl text-gold-600/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            The world's fastest professional PDF suite. 
            100% Free, Secure, No Signup required. Start using our tools instantly in your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="px-10 py-5 bg-gold-950 hover:bg-gold-800 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest transition-all shadow-3xl hover:shadow-4xl flex items-center gap-3 border border-gold-700/20">
              Start Using Tools <ArrowRight className="w-5 h-5 text-gold-200" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100 group hover:border-gold-300 transition-all">
            <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 mb-8 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-black text-gold-950 mb-4 uppercase tracking-tight">100% Secure & Private</h3>
            <p className="text-gold-600/80 font-medium leading-relaxed">All processing happens locally in your browser. Your files never leave your device, ensuring maximum privacy and security.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100 group hover:border-gold-300 transition-all">
            <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 mb-8 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-black text-gold-950 mb-4 uppercase tracking-tight">Lightning Fast</h3>
            <p className="text-gold-600/80 font-medium leading-relaxed">Powered by WebAssembly, our tools process your documents instantly without waiting for uploads or downloads.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100 group hover:border-gold-300 transition-all">
            <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 mb-8 group-hover:scale-110 transition-transform">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-black text-gold-950 mb-4 uppercase tracking-tight">36+ Professional Tools</h3>
            <p className="text-gold-600/80 font-medium leading-relaxed">Everything you need: Convert, Merge, Split, Compress, Edit, and AI Analysis, all in one place.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100">
          <h2 className="text-4xl font-serif font-black text-gold-950 mb-10 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-serif font-black text-gold-950 mb-3 flex items-center gap-4 uppercase tracking-tight">
                <CheckCircle className="w-6 h-6 text-gold-500" />
                Is it really free?
              </h4>
              <p className="text-gold-600/80 pl-10 font-medium leading-relaxed">Yes, all our tools are 100% free with no hidden costs, subscriptions, or signups required.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-black text-gold-950 mb-3 flex items-center gap-4 uppercase tracking-tight">
                <CheckCircle className="w-6 h-6 text-gold-500" />
                Are my files safe?
              </h4>
              <p className="text-gold-600/80 pl-10 font-medium leading-relaxed">Absolutely. We use client-side processing, meaning your files are processed directly on your device and never uploaded to our servers.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-black text-gold-950 mb-3 flex items-center gap-4 uppercase tracking-tight">
                <CheckCircle className="w-6 h-6 text-gold-500" />
                Do I need to install anything?
              </h4>
              <p className="text-gold-600/80 pl-10 font-medium leading-relaxed">No installation required. Our suite works entirely in your web browser on any device.</p>
            </div>
          </div>
        </div>

        {/* Internal Links for SEO */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-black text-gold-950 mb-8 text-center uppercase tracking-widest">Related Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {randomLinks.map((kw, idx) => {
              const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <Link 
                  key={idx} 
                  to={`/seo/${slug}`}
                  className="px-5 py-3 bg-white border border-gold-200 rounded-full text-[10px] font-black uppercase tracking-widest text-gold-600 hover:border-gold-500 hover:text-gold-700 hover:bg-gold-50 transition-all shadow-sm hover:shadow-md"
                >
                  {kw}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeoPage;
