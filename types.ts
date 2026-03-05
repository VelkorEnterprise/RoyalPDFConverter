

import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  category: 'convert' | 'edit' | 'security' | 'organize' | 'optimize';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  date: string;
  author: string;
  keywords: string[];
  relatedToolSlug?: string;
}

export interface LanguageContextType {
  language: 'en' | 'es' | 'hi' | 'fr' | 'de' | 'ja' | 'it';
  setLanguage: (lang: 'en' | 'es' | 'hi' | 'fr' | 'de' | 'ja' | 'it') => void;
  t: (key: string, replacements?: { [key: string]: string }) => string;
}

export type ProcessingStatus = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';
