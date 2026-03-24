import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries, getTranslation } from '../data/seoData';
import { FileText, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

const CountrySEO = () => {
  const { country } = useParams<{ country: string }>();
  
  const countryData = countries.find(c => c.code === country?.toLowerCase()) || countries[0];
  const t = getTranslation(countryData.lang);

  useEffect(() => {
    document.title = `${t.title} in ${countryData.name} | Royal PDF`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${t.desc} Optimized for users in ${countryData.name}.`);
    }
  }, [countryData, t]);

  return (
    <div className="min-h-screen bg-gold-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-gold-800 bg-gold-200 rounded-full">
            <Globe className="w-4 h-4 mr-2" />
            Available in {countryData.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-gold-950 mb-6 uppercase tracking-tighter">
            {t.title} <span className="text-gold-700">in {countryData.name}</span>
          </h1>
          <p className="text-lg text-gold-600/80 mb-8 font-medium">
            {t.desc}
          </p>
          <Link to="/" className="inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white bg-gold-950 rounded-[2rem] hover:bg-gold-800 transition-all shadow-3xl hover:shadow-4xl border border-gold-700/20">
            Start Converting Now
            <Zap className="w-5 h-5 ml-3 text-gold-200" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.features.map((feature: string, idx: number) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-3xl border border-gold-100 hover:border-gold-300 transition-all group">
              <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center mb-6 text-gold-700 border border-gold-100 group-hover:bg-gold-400 group-hover:text-white transition-all">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-black text-gold-950 mb-3 uppercase leading-tight">{feature}</h3>
              <p className="text-gold-600/80 font-medium leading-relaxed">Professional grade {feature.toLowerCase()} tools available directly in your browser.</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gold-950 rounded-[4rem] p-12 md:p-20 text-center mb-20 relative overflow-hidden border border-gold-700/20 shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-700/10 blur-[100px] rounded-full"></div>
          <Shield className="w-20 h-20 text-gold-400 mx-auto mb-8 relative z-10" />
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 relative z-10 uppercase tracking-tight">100% Private & Secure</h2>
          <p className="text-gold-200/80 max-w-2xl mx-auto mb-12 text-xl font-medium relative z-10 leading-relaxed">
            We helped more than a Million users daily, no signup required, 100% private. Your files never leave your device.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 font-black uppercase text-[10px] tracking-widest">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-3" />
              No Uploads
            </div>
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 font-black uppercase text-[10px] tracking-widest">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-3" />
              Client-Side Processing
            </div>
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 font-black uppercase text-[10px] tracking-widest">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-3" />
              Free Forever
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-serif font-black text-gold-950 mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {t.faq.map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-3xl border border-gold-100">
                <h3 className="text-xl font-serif font-black text-gold-950 mb-4 uppercase leading-tight">{item.q}</h3>
                <p className="text-gold-600/80 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links (SEO Siloing) */}
        <div className="border-t border-gold-200 pt-16">
          <h3 className="text-2xl font-serif font-black text-gold-950 mb-8 uppercase tracking-tight">Explore Other Regions</h3>
          <div className="flex flex-wrap gap-4">
            {countries.filter(c => c.code !== countryData.code).slice(0, 15).map(c => (
              <Link key={c.code} to={`/location/${c.code}`} className="text-[10px] font-black uppercase tracking-widest text-gold-700 hover:text-white bg-white hover:bg-gold-700 px-6 py-3 rounded-xl border border-gold-200 hover:border-gold-700 transition-all shadow-sm">
                PDF Tools in {c.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CountrySEO;
