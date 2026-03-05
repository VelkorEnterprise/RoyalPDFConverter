
// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOLS, BLOG_POSTS, FAQS, APP_NAME, TOOL_SEO_CONTENT } from '../constants.ts';
import { 
  FileUp, Download, Check, Sparkles, ChevronRight, BookOpen, Trash2, Plus, 
  ChevronUp, ChevronDown, HelpCircle, Info, Quote, Lightbulb, Zap, 
  ShieldCheck, Lock, Unlock, Crown, BrainCircuit, MessageSquareText, 
  FileSearch, Type, Hash, Stamp, Scissors, PenTool, RotateCw, Crop, 
  RefreshCcw, DownloadCloud, MousePointer2, Shield, CheckCircle2,
  FileCheck2, ShieldAlert, Cpu, Settings2, BarChart4, Globe2, FileCode2
} from 'lucide-react';
import { processFile } from '../services/pdfService.ts';
import { analyzeDocument } from '../services/aiService.ts';
import { useLanguage } from '../components/Layout.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const ToolDeepDive = ({ tool }) => {
    const seoData = TOOL_SEO_CONTENT[tool.slug] || {
        howTo: `To use ${tool.name}, upload your file to the secure Royal PDF-converter workspace. Our local engine handles the process within your browser using native machine speeds.`,
        faq: [{ q: `Is ${tool.name} free?`, a: "Yes, 100% free forever for all professional and personal users." }],
        keywords: `${tool.name} free, secure pdf tool, local pdf converter`
    };

    return (
        <section className="mt-32 border-t border-gold-100 pt-32 pb-48 bg-slate-50/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-3xl border border-gold-100 relative overflow-hidden mb-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 blur-[100px] rounded-full"></div>
                    <div className="relative z-10">
                        <span className="px-6 py-2 bg-gold-50 text-gold-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-gold-100 mb-8 inline-block">
                            EXPERT STRATEGY: {tool.name.toUpperCase()}
                        </span>
                        <h2 className="text-4xl md:text-7xl font-serif font-black text-slate-950 mb-10 leading-[0.9] tracking-tighter uppercase">
                            Professional {tool.name} Workflow.
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                            <div className="space-y-12">
                                <div>
                                    <h4 className="font-black text-slate-950 uppercase text-xs tracking-[0.3em] mb-6 flex items-center">
                                        <MousePointer2 size={16} className="mr-3 text-gold-500" /> Operational Blueprint
                                    </h4>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium">
                                        {seoData.howTo}
                                    </p>
                                    <p className="text-slate-400 text-base leading-relaxed">
                                        This utility is engineered for high-stakes environments where document integrity is paramount. Whether you are a legal associate, a medical administrator, or a software engineer, our <strong>local-first architecture</strong> provides the speed and safety you require to dominate your field.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-950 uppercase text-xs tracking-[0.3em] mb-6 flex items-center">
                                        <Shield size={16} className="mr-3 text-gold-500" /> Technical SEO Integration
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        By utilizing our {tool.name}, you are generating <strong>EEAT-compliant document assets</strong>. Our engine automatically strips tracking cookies and redundant metadata while preserving the semantic structure that search engines like Google and AI platforms like Gemini utilize for high-authority indexing.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {seoData.keywords.split(',').map(kw => (
                                            <span key={kw} className="px-3 py-1 bg-white border border-gold-100 text-[9px] font-black uppercase tracking-widest text-gold-600 rounded-lg">{kw.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-slate-950 p-12 rounded-[3rem] text-white shadow-3xl">
                                    <h4 className="text-gold-400 font-black uppercase tracking-[0.3em] text-[10px] mb-10 flex items-center">
                                        <HelpCircle size={16} className="mr-3" /> Targeted FAQ for Professionals
                                    </h4>
                                    <div className="space-y-10">
                                        {seoData.faq.map((q, i) => (
                                            <div key={i}>
                                                <h5 className="font-black text-lg mb-3 tracking-tight">{q.q}</h5>
                                                <p className="text-slate-400 text-sm leading-relaxed">{q.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gold-50 p-10 rounded-[3rem] border border-gold-200">
                                     <h4 className="text-gold-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center">
                                        <BarChart4 size={16} className="mr-3" /> Performance Metrics
                                    </h4>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase">Avg Speed</p>
                                            <p className="text-2xl font-serif font-black text-slate-950">240ms</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase">Privacy Rating</p>
                                            <p className="text-2xl font-serif font-black text-slate-950">Elite</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-xl max-w-none border-t border-gold-100 pt-16">
                            <h3 className="font-serif font-black text-slate-950 uppercase mb-8">Disrupting Legacy Software with Modern Logic.</h3>
                            <p className="text-slate-500 font-medium">
                                Royal PDF-converter provides the world's most innovative <strong>36 professional utilities</strong> with 100% local binary execution. We outrank the competition by prioritizing user privacy and technical precision. Professionals trust our suite for <strong>HIPAA-compliant document management</strong> and high-speed local processing that cloud tools simply cannot match. Every bit of data is handled on your hardware, ensuring that your corporate secrets remain yours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ToolView = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = TOOLS.find(t => t.slug === slug);
  const { t } = useLanguage();
  
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [resultBlobs, setResultBlobs] = useState<Blob[]>([]);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Advanced State
  const [extraValue, setExtraValue] = useState(''); 
  const [watermarkText, setWatermarkText] = useState('');
  const [password, setPassword] = useState('');
  const [rotation, setRotation] = useState(90);
  const [fontSize, setFontSize] = useState(30);
  const [xPos, setXPos] = useState(50);
  const [yPos, setYPos] = useState(50);
  const [aiTask, setAiTask] = useState('Summarize this document clearly for business analysis.');

  const isBatchInput = tool?.id === 'merge' || tool?.id === 'jpg2pdf' || tool?.id === 'png2pdf';
  const isSecurity = tool?.id === 'protect' || tool?.id === 'unlock';
  const isAi = tool?.id === 'ai-analyze';
  const isRange = tool?.id === 'split' || tool?.id === 'delete' || tool?.id === 'extract';
  const isEdit = tool?.id === 'edit' || tool?.id === 'watermark' || tool?.id === 'sign' || tool?.id === 'redact';

  const startProcessing = async () => {
    if (files.length === 0) return;
    setStatus('processing');
    setErrorMessage(null);
    try {
      if (isAi && aiTask !== 'Direct Conversion') {
        const textBlob = await processFile(files[0], 'pdf2text', (p) => setProgress(p * 0.5));
        const text = await textBlob.text();
        const result = await analyzeDocument(text, aiTask);
        setAiResponse(result);
        setStatus('completed');
        confetti({ colors: ['#D4AF37', '#ffffff'], particleCount: 150 });
      } else {
        const output = await processFile(
            isBatchInput ? files : files[0], 
            tool.id, 
            setProgress,
            { range: extraValue, watermarkText, password, rotation, fontSize, xPos, yPos }
        );
        const blobs = Array.isArray(output) ? output : [output];
        setResultBlobs(blobs);
        setStatus('completed');
        confetti({ spread: 70, origin: { y: 0.6 }, colors: ['#D4AF37', '#B59228'], particleCount: 200 });
      }
    } catch (e) { 
      setStatus('error');
      setErrorMessage(e.message || "Binary engine halted. Check file type.");
    }
  };

  const handleDownload = (blob, index) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ext = blob.type.includes('pdf') ? 'pdf' : blob.type.split('/')[1] || 'bin';
    a.download = `${APP_NAME.replace(/\s+/g, '_')}_${tool.id}_Result_${index + 1}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  const handleReset = () => {
      setFiles([]); setStatus('idle'); setResultBlobs([]); setAiResponse(null); setErrorMessage(null); setProgress(0); setExtraValue('');
  };

  if (!tool) return <div className="p-20 text-center font-bold text-slate-400 uppercase">Tool Specification Missing.</div>;

  return (
    <div className="min-h-screen bg-[#FBF9F0] pb-24 selection:bg-gold-200">
      <div className="bg-slate-950 pt-24 pb-48 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D4AF3715,_transparent)]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">
                <ShieldCheck size={12} className="mr-2"/> NO UPLOADS • LOCAL EXECUTION
            </div>
            <div className="w-28 h-28 bg-gradient-to-br from-gold-400 to-gold-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-3xl border border-white/10">
                <tool.icon size={56} className="text-white drop-shadow-lg" />
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-black mb-8 text-white tracking-tighter uppercase">{tool.name}</h1>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-xl leading-relaxed">{tool.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-32 relative z-20">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[4rem] shadow-3xl overflow-hidden border border-gold-100">
          <div className="p-8 md:p-20">
            {status === 'idle' && (
                <div className="max-w-3xl mx-auto">
                    {/* AI ANALYST CUSTOM TASK UI */}
                    {isAi && files.length > 0 && (
                        <div className="mb-10 p-10 bg-slate-900 border border-gold-500/20 rounded-[3rem] space-y-6 text-left shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-gold-400"><BrainCircuit size={120}/></div>
                            <div className="relative z-10">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-400 mb-6 flex items-center">
                                    <Settings2 size={14} className="mr-2"/> Custom AI Strategy
                                </h3>
                                <textarea 
                                    rows={4}
                                    value={aiTask} 
                                    onChange={(e) => setAiTask(e.target.value)} 
                                    className="w-full p-6 rounded-2xl border border-gold-900/50 font-bold text-white bg-slate-800/50 focus:ring-2 focus:ring-gold-400 focus:outline-none placeholder:text-slate-500"
                                    placeholder="e.g., Analyze this contract for liability risks and extract key dates..."
                                />
                            </div>
                        </div>
                    )}

                    {/* DYNAMIC PARAMETERS UI */}
                    {isEdit && files.length > 0 && (
                        <div className="mb-10 p-8 bg-gold-50/50 border border-gold-200 rounded-[2.5rem] space-y-6 text-left">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600">Parameters Configuration</h3>
                            <input type="text" placeholder="Add text, watermark, or signature..." value={watermarkText} onChange={(e) => setWatermarkText(e.target.value)} className="w-full p-4 rounded-xl border border-gold-200 font-bold" />
                            <div className="grid grid-cols-3 gap-4">
                                <div><label className="text-[9px] font-bold block mb-1">X Coord</label><input type="number" value={xPos} onChange={(e) => setXPos(Number(e.target.value))} className="w-full p-3 rounded-lg border border-gold-100" /></div>
                                <div><label className="text-[9px] font-bold block mb-1">Y Coord</label><input type="number" value={yPos} onChange={(e) => setYPos(Number(e.target.value))} className="w-full p-3 rounded-lg border border-gold-100" /></div>
                                <div><label className="text-[9px] font-bold block mb-1">Size</label><input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full p-3 rounded-lg border border-gold-100" /></div>
                            </div>
                        </div>
                    )}
                    
                    {isRange && files.length > 0 && (
                        <div className="mb-10 p-8 bg-gold-50/50 border border-gold-200 rounded-[2.5rem] text-left">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-4">Page Selection (e.g. 1-3, 5)</h3>
                            <input type="text" placeholder="Range of pages..." value={extraValue} onChange={(e) => setExtraValue(e.target.value)} className="w-full p-4 rounded-xl border border-gold-200 font-bold" />
                        </div>
                    )}

                    {files.length === 0 ? (
                        <div className="border-4 border-dashed border-gold-100 rounded-[3rem] p-24 hover:border-gold-400 hover:bg-gold-50/30 transition-all cursor-pointer relative text-center group bg-slate-50/20 shadow-inner">
                            <input type="file" multiple={isBatchInput} onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl text-gold-400 group-hover:scale-110 transition-transform">
                                <FileUp size={56} />
                            </div>
                            <h3 className="text-4xl font-serif font-black text-slate-950 mb-4 uppercase">{t('chooseFile')}</h3>
                            <p className="text-slate-400 font-bold text-lg opacity-60 uppercase tracking-widest">WASM EXECUTION • ABSOLUTE PRIVACY</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="p-8 bg-gold-50/20 border border-gold-100 rounded-[3rem] flex items-center gap-6 shadow-sm">
                                <div className="w-16 h-16 bg-gold-400 text-white rounded-2xl flex items-center justify-center font-black shadow-xl">{files.length}</div>
                                <div className="flex-grow overflow-hidden text-left">
                                    <p className="text-xl font-black text-slate-950 truncate">{files[0].name}</p>
                                    <p className="text-[10px] font-black text-gold-600 uppercase tracking-widest">Memory Context Ready</p>
                                </div>
                                <button onClick={() => setFiles([])} className="p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"><Trash2 size={20}/></button>
                            </div>
                            <button onClick={startProcessing} className="w-full bg-slate-950 text-white py-12 rounded-[3.5rem] font-black text-2xl shadow-3xl hover:bg-black transition-all flex items-center justify-center border border-gold-500/20">
                                <Sparkles className="mr-4 text-gold-400" size={32} /> {t('startProcessingButton', { action: tool.name.toUpperCase() })} <ChevronRight className="ml-2" />
                            </button>
                        </div>
                    )}
                </div>
            )}

            {status === 'processing' && (
                <div className="py-24 text-center">
                    <div className="relative w-48 h-48 mx-auto mb-16">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-100" />
                            <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" strokeDasharray={502.6} strokeDashoffset={502.6 - (502.6 * progress) / 100} className="text-gold-500 transition-all duration-500" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-serif font-black text-5xl text-slate-950">{Math.round(progress)}%</div>
                    </div>
                    <h2 className="text-4xl font-serif font-black text-slate-950 mb-4 uppercase tracking-tight">Binary Execution in Progress</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] animate-pulse">Running {tool.name} Logic Locally</p>
                </div>
            )}

            {status === 'completed' && (
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-xl"><Check size={48} /></div>
                    <h2 className="text-5xl font-serif font-black mb-10 text-slate-950 tracking-tighter uppercase text-center">SUCCESS</h2>
                    
                    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                        {aiResponse && (
                            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 shadow-inner text-left">
                                <h3 className="text-xs font-black text-gold-600 uppercase tracking-[0.3em] mb-6 flex items-center">
                                    <Sparkles size={14} className="mr-2"/> AI Strategic Analysis Results
                                </h3>
                                <div className="prose prose-slate prose-lg max-w-none text-slate-800" dangerouslySetInnerHTML={{ __html: aiResponse.replace(/\n/g, '<br/>') }} />
                            </div>
                        )}
                        {resultBlobs.length > 0 && (
                            <div className="bg-slate-50 border border-slate-200 rounded-[4rem] p-10 shadow-inner">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10 text-center">Your Assets Are Ready for Secure Export</h3>
                                <div className="space-y-4 mb-10">
                                    {resultBlobs.map((blob, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl group">
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="w-12 h-12 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center font-bold"><FileCheck2 size={24}/></div>
                                                <div>
                                                    <p className="font-black text-slate-900 text-sm">Asset_{i+1}.{blob.type.includes('pdf') ? 'pdf' : blob.type.split('/')[1] || 'bin'}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{Math.round(blob.size / 1024)} KB • Secure Local Export</p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => handleDownload(blob, i)}
                                                className="px-6 py-3 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all flex items-center shadow-lg"
                                            >
                                                <Download size={14} className="mr-2" /> Download Result
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button onClick={handleReset} className="text-slate-400 font-black uppercase text-xs tracking-widest hover:text-gold-600 transition-colors">Initiate New Task</button>
                    </div>
                </div>
            )}
          </div>
        </motion.div>
      </div>

      <ToolDeepDive tool={tool} />
    </div>
  );
};

export default ToolView;
