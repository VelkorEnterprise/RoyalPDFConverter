import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seoKeywords } from '../data/seoData';
import { FileText, Shield, Zap, CheckCircle, Star, ChevronRight } from 'lucide-react';

const KeywordSEO = () => {
  const { keyword } = useParams<{ keyword: string }>();
  
  const keywordData = seoKeywords.find(k => k.slug === keyword) || { slug: keyword, title: keyword?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') };

  // Generate dynamic FAQs based on the exact keyword
  const faqs = useMemo(() => [
    {
      q: `What is the best way to handle ${keywordData.title}?`,
      a: `Handling ${keywordData.title} is incredibly easy with our free online tool. We provide a secure, fast, and reliable way to process your files without any registration or software installation. Everything runs locally in your browser.`
    },
    {
      q: `Is it safe to use a tool for ${keywordData.title}?`,
      a: `Yes, absolutely. When you use our platform for ${keywordData.title}, your files never leave your device. We use advanced WebAssembly technology to process everything client-side, ensuring 100% privacy and military-grade security.`
    },
    {
      q: `How much does it cost for ${keywordData.title}?`,
      a: `Our tool for ${keywordData.title} is completely free. There are no hidden fees, no subscriptions, and no premium tiers. You get full access to all professional features at zero cost.`
    },
    {
      q: `Can I perform ${keywordData.title} on my mobile device?`,
      a: `Yes! Our website is fully optimized for all devices. Whether you are on an iPhone, Android, Mac, or Windows PC, you can easily use our ${keywordData.title} tool with the same high-speed performance.`
    },
    {
      q: `Do I need to download any software for ${keywordData.title}?`,
      a: `No downloads or installations are required. You can complete ${keywordData.title} entirely online through your web browser, saving you time and storage space.`
    }
  ], [keywordData.title]);

  // Get exactly 10 internal links
  const internalLinks = useMemo(() => {
    return seoKeywords.filter(k => k.slug !== keywordData.slug).sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [keywordData.slug]);

  useEffect(() => {
    document.title = `${keywordData.title} | 100% Free & Secure | Royal PDF`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Looking for ${keywordData.title}? Use our free, secure, and fast tool. No signup required. Client-side processing ensures your privacy.`);
    }
  }, [keywordData]);

  return (
    <div className="min-h-screen bg-gold-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-1 mb-6 text-gold-500">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="text-gold-600/80 text-sm font-black uppercase tracking-widest ml-3">4.9/5 from 64,812 reviews</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-black text-gold-950 mb-8 leading-[0.9] tracking-tighter uppercase">
            {keywordData.title}
          </h1>
          <p className="text-xl text-gold-600/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            The most advanced solution for {keywordData.title?.toLowerCase() || ''}. Process your files instantly in your browser with military-grade security.
          </p>
          <Link to="/" className="inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white bg-gold-950 rounded-[2rem] hover:bg-gold-800 transition-all shadow-3xl hover:shadow-4xl border border-gold-700/20">
            Access Tool Now
            <Zap className="w-5 h-5 ml-3 text-gold-200" />
          </Link>
          <p className="mt-6 text-[10px] text-gold-400 font-black uppercase tracking-[0.3em]">No signup required • 100% Free • Private</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100">
              <h2 className="text-4xl font-serif font-black text-gold-950 mb-8 uppercase tracking-tight">Complete Guide to {keywordData.title}</h2>
              <p className="text-gold-600/80 mb-8 leading-relaxed text-lg font-medium">
                When you need a reliable solution for <strong>{keywordData.title?.toLowerCase() || ''}</strong>, you shouldn't have to compromise on privacy or pay expensive subscription fees. Our tool is built on modern WebAssembly technology, meaning all processing happens directly on your device. Your sensitive documents never touch our servers.
              </p>
              
              <h3 className="text-2xl font-serif font-black text-gold-950 mb-6 mt-12 uppercase tracking-tight">Why Choose Us for {keywordData.title}?</h3>
              <ul className="space-y-4 mb-12">
                {[
                  "Instant processing with zero upload wait times",
                  "Military-grade local encryption",
                  "No file size limits or daily quotas",
                  "Works completely offline after first load",
                  "Pixel-perfect conversion quality"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0" />
                    <span className="text-gold-800 font-bold text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-serif font-black text-gold-950 mb-8 mt-16 border-t border-gold-100 pt-12 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gold-50/50 p-8 rounded-[2.5rem] border border-gold-100">
                    <h4 className="text-xl font-serif font-black text-gold-950 mb-4 flex items-start uppercase leading-tight">
                      <span className="text-gold-500 mr-4">Q:</span>
                      {faq.q}
                    </h4>
                    <div className="text-gold-600/80 leading-relaxed pl-10 font-medium">
                      <span className="font-black text-gold-400 mr-3 uppercase text-xs tracking-widest">A:</span>
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gold-950 p-10 rounded-[3rem] text-white border border-gold-700/20 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-700/10 blur-[50px] rounded-full"></div>
              <Shield className="w-14 h-14 text-gold-400 mb-8 relative z-10" />
              <h3 className="text-2xl font-serif font-black mb-4 relative z-10 uppercase tracking-tight">Enterprise Security</h3>
              <p className="text-gold-200/80 mb-8 font-medium relative z-10 leading-relaxed">
                Trusted by professionals worldwide. Our client-side architecture ensures your data remains strictly confidential.
              </p>
              <Link to="/security" className="text-gold-400 font-black uppercase text-xs tracking-widest hover:text-gold-200 flex items-center relative z-10 transition-colors">
                Read our security whitepaper
                <FileText className="w-4 h-4 ml-3" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gold-100">
              <h3 className="text-xl font-serif font-black text-gold-950 mb-8 uppercase tracking-widest">Explore More Tools</h3>
              <div className="space-y-4">
                {internalLinks.map(k => (
                  <Link key={k.slug} to={`/feature/${k.slug}`} className="group flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gold-600 hover:text-white hover:bg-gold-700 p-4 rounded-xl transition-all border border-transparent hover:border-gold-700">
                    <span>{k.title}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeywordSEO;
