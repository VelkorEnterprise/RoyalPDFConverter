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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-800 font-medium text-sm mb-6">
            <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            <span>Top Rated PDF Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight capitalize">
            {keyword}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            The world's fastest professional PDF suite. 
            100% Free, Secure, No Signup required. Start using our tools instantly in your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              Start Using Tools <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">100% Secure & Private</h3>
            <p className="text-slate-600">All processing happens locally in your browser. Your files never leave your device, ensuring maximum privacy and security.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
            <p className="text-slate-600">Powered by WebAssembly, our tools process your documents instantly without waiting for uploads or downloads.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">36+ Professional Tools</h3>
            <p className="text-slate-600">Everything you need: Convert, Merge, Split, Compress, Edit, and AI Analysis, all in one place.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold-500" />
                Is it really free?
              </h4>
              <p className="text-slate-600 pl-7">Yes, all our tools are 100% free with no hidden costs, subscriptions, or signups required.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold-500" />
                Are my files safe?
              </h4>
              <p className="text-slate-600 pl-7">Absolutely. We use client-side processing, meaning your files are processed directly on your device and never uploaded to our servers.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold-500" />
                Do I need to install anything?
              </h4>
              <p className="text-slate-600 pl-7">No installation required. Our suite works entirely in your web browser on any device.</p>
            </div>
          </div>
        </div>

        {/* Internal Links for SEO */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {randomLinks.map((kw, idx) => {
              const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <Link 
                  key={idx} 
                  to={`/seo/${slug}`}
                  className="px-4 py-2 bg-white border border-gold-200 rounded-full text-sm text-slate-600 hover:border-gold-500 hover:text-gold-600 transition-colors"
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
