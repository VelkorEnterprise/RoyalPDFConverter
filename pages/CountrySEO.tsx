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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            {t.title} <span className="text-gold-600">in {countryData.name}</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            {t.desc}
          </p>
          <Link to="/" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
            Start Converting Now
            <Zap className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.features.map((feature: string, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4 text-gold-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature}</h3>
              <p className="text-slate-600">Professional grade {feature.toLowerCase()} tools available directly in your browser.</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center mb-20">
          <Shield className="w-16 h-16 text-gold-400 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-white mb-4">100% Private & Secure</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We helped more than a Million users daily, no signup required, 100% private. Your files never leave your device.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-white bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-2" />
              No Uploads
            </div>
            <div className="flex items-center text-white bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-2" />
              Client-Side Processing
            </div>
            <div className="flex items-center text-white bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-2" />
              Free Forever
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {t.faq.map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links (SEO Siloing) */}
        <div className="border-t border-slate-200 pt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Other Regions</h3>
          <div className="flex flex-wrap gap-3">
            {countries.filter(c => c.code !== countryData.code).slice(0, 15).map(c => (
              <Link key={c.code} to={`/location/${c.code}`} className="text-sm text-slate-600 hover:text-gold-600 bg-white px-4 py-2 rounded-lg border border-slate-200 hover:border-gold-300 transition-colors">
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
