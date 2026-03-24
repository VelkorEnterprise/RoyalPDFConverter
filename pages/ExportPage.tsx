import React, { useState, useEffect } from 'react';
import { Copy, CheckCircle2, AlertCircle, Download } from 'lucide-react';

const ExportPage = () => {
  const [exportData, setExportData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  useEffect(() => {
    fetch('/export-data.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch export data');
        return res.json();
      })
      .then(data => {
        setExportData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Could not load export data. Please ensure you have run the build process.');
        setLoading(false);
      });
  }, []);

  const handleCopy = (filename: string, content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedFile(filename);
      setTimeout(() => setCopiedFile(null), 2000);
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gold-50 pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-200 border-t-gold-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gold-600 font-black uppercase tracking-widest text-xs">Loading export data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gold-50 pt-32 pb-24 flex items-center justify-center">
        <div className="bg-white p-16 rounded-[3rem] shadow-3xl max-w-lg text-center border border-rose-100">
          <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-8" />
          <h2 className="text-3xl font-serif font-black text-gold-950 mb-4 uppercase tracking-tight">Export Unavailable</h2>
          <p className="text-gold-600/80 font-medium leading-relaxed">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gold-50 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gold-950 text-gold-400 rounded-[2rem] mb-10 shadow-3xl border border-gold-700/20">
            <Download size={48} />
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-black text-gold-950 mb-8 uppercase tracking-tighter leading-[0.9]">Source Code Export</h1>
          <p className="text-xl text-gold-600/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Copy the compiled source files directly to your clipboard. This bypasses any mobile browser download restrictions.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(exportData).map(([filename, content]) => (
            <div key={filename} className="bg-white rounded-[3rem] shadow-3xl border border-gold-100 overflow-hidden">
              <div className="flex items-center justify-between px-10 py-8 bg-gold-950 text-white border-b border-gold-700/20">
                <h3 className="text-lg font-black font-mono uppercase tracking-widest">{filename}</h3>
                <button
                  onClick={() => handleCopy(filename, content)}
                  className={`flex items-center px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                    copiedFile === filename 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'bg-gold-800 hover:bg-gold-700 text-gold-100 shadow-md'
                  }`}
                >
                  {copiedFile === filename ? (
                    <>
                      <CheckCircle2 size={16} className="mr-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="mr-3" /> Copy to Clipboard
                    </>
                  )}
                </button>
              </div>
              <div className="p-10 bg-gold-50/30">
                {filename === 'main.js' ? (
                  <div className="text-center py-16">
                    <p className="text-gold-600/80 mb-8 font-medium">Main bundle is too large to display in browser.</p>
                    <a
                      href={`data:text/javascript;charset=utf-8,${encodeURIComponent(content)}`}
                      download={filename}
                      className="inline-flex items-center px-10 py-5 bg-gold-950 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-gold-800 transition-all shadow-3xl hover:shadow-4xl border border-gold-700/20"
                    >
                      <Download size={20} className="mr-3 text-gold-400" /> Download {filename}
                    </a>
                  </div>
                ) : (
                  <textarea
                    readOnly
                    value={content}
                    className="w-full h-96 p-8 font-mono text-sm bg-white border border-gold-100 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-gold-500/20 resize-y text-gold-950 font-medium leading-relaxed shadow-inner"
                    spellCheck="false"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportPage;
