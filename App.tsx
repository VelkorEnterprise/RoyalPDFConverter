import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import ToolView from './pages/ToolView.tsx';
import BlogList from './pages/BlogList.tsx';
import BlogPost from './pages/BlogPost.tsx';
import InfoPage from './pages/InfoPage.tsx';
import CountrySEO from './pages/CountrySEO.tsx';
import KeywordSEO from './pages/KeywordSEO.tsx';
import ExportPage from './pages/ExportPage.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/:slug" element={<ToolView />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* SEO Routes */}
          <Route path="/location/:country" element={<CountrySEO />} />
          <Route path="/feature/:keyword" element={<KeywordSEO />} />

          {/* Informational Pages Routes */}
          <Route path="/help" element={<InfoPage type="help" />} />
          <Route path="/news" element={<InfoPage type="news" />} />
          <Route path="/feedback" element={<InfoPage type="feedback" />} />
          <Route path="/support" element={<InfoPage type="support" />} />
          <Route path="/faq" element={<InfoPage type="faq" />} />
          <Route path="/security" element={<InfoPage type="security" />} />
          <Route path="/disclaimer" element={<InfoPage type="disclaimer" />} />
          <Route path="/privacy" element={<InfoPage type="privacy" />} />
          <Route path="/terms" element={<InfoPage type="terms" />} />
          <Route path="/cookies" element={<InfoPage type="cookies" />} />
          <Route path="/export" element={<ExportPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;