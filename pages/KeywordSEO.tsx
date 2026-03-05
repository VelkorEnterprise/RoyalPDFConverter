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
            <span className="text-slate-600 text-sm font-medium ml-2">4.9/5 from 64,812 reviews</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight capitalize">
            {keywordData.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            The most advanced solution for {keywordData.title.toLowerCase()}. Process your files instantly in your browser with military-grade security.
          </p>
          <Link to="/" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200">
            Access Tool Now
            <Zap className="w-5 h-5 ml-2" />
          </Link>
          <p className="mt-4 text-sm text-slate-500 font-medium">No signup required • 100% Free • Private</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Complete Guide to {keywordData.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                When you need a reliable solution for <strong>{keywordData.title.toLowerCase()}</strong>, you shouldn't have to compromise on privacy or pay expensive subscription fees. Our tool is built on modern WebAssembly technology, meaning all processing happens directly on your device. Your sensitive documents never touch our servers.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Choose Us for {keywordData.title}?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Instant processing with zero upload wait times",
                  "Military-grade local encryption",
                  "No file size limits or daily quotas",
                  "Works completely offline after first load",
                  "Pixel-perfect conversion quality"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12 border-t border-slate-100 pt-8">Frequently Asked Questions (FAQ)</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-start">
                      <span className="text-gold-500 mr-3">Q:</span>
                      {faq.q}
                    </h4>
                    <p className="text-slate-600 leading-relaxed pl-7">
                      <span className="font-bold text-slate-400 mr-2">A:</span>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <Shield className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-slate-300 mb-6">
                Trusted by professionals worldwide. Our client-side architecture ensures your data remains strictly confidential.
              </p>
              <Link to="/security" className="text-gold-400 font-medium hover:text-gold-300 flex items-center">
                Read our security whitepaper
                <FileText className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Tools</h3>
              <div className="space-y-4">
                {internalLinks.map(k => (
                  <Link key={k.slug} to={`/feature/${k.slug}`} className="group flex items-center justify-between text-sm text-slate-600 hover:text-gold-600 hover:bg-gold-50 p-3 rounded-xl transition-colors border border-transparent hover:border-gold-100">
                    <span className="font-medium">{k.title}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
