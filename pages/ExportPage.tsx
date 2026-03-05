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
      <div className="min-h-screen bg-slate-50 pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-200 border-t-gold-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-slate-500 font-medium">Loading export data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-24 flex items-center justify-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg text-center border border-rose-100">
          <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Export Unavailable</h2>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-100 text-gold-600 rounded-3xl mb-8">
            <Download size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 mb-6">Source Code Export</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Copy the compiled source files directly to your clipboard. This bypasses any mobile browser download restrictions.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(exportData).map(([filename, content]) => (
            <div key={filename} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-8 py-6 bg-slate-900 text-white">
                <h3 className="text-lg font-bold font-mono">{filename}</h3>
                <button
                  onClick={() => handleCopy(filename, content)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    copiedFile === filename 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {copiedFile === filename ? (
                    <>
                      <CheckCircle2 size={16} className="mr-2" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="mr-2" /> Copy to Clipboard
                    </>
                  )}
                </button>
              </div>
              <div className="p-6 bg-slate-50">
                {filename === 'main.js' ? (
                  <div className="text-center py-12">
                    <p className="text-slate-600 mb-4">Main bundle is too large to display in browser.</p>
                    <a
                      href={`data:text/javascript;charset=utf-8,${encodeURIComponent(content)}`}
                      download={filename}
                      className="inline-flex items-center px-6 py-3 bg-gold-500 text-white rounded-xl font-bold hover:bg-gold-600 transition-colors"
                    >
                      <Download size={20} className="mr-2" /> Download {filename}
                    </a>
                  </div>
                ) : (
                  <textarea
                    readOnly
                    value={content}
                    className="w-full h-64 p-4 font-mono text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 resize-y"
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
