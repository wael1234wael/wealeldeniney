import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImageGeneratorPage from './pages/ImageGeneratorPage';
import VoiceEnhancerPage from './pages/VoiceEnhancerPage';
import TextSummarizerPage from './pages/TextSummarizerPage';
import TranslatorPage from './pages/TranslatorPage';
import ChatAssistantPage from './pages/ChatAssistantPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/image-generator" element={<ImageGeneratorPage />} />
      <Route path="/voice-enhancer" element={<VoiceEnhancerPage />} />
      <Route path="/text-summarizer" element={<TextSummarizerPage />} />
      <Route path="/translator" element={<TranslatorPage />} />
      <Route path="/chat-assistant" element={<ChatAssistantPage />} />
    </Routes>
  );
}

export default App;