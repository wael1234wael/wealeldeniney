import React, { useState } from 'react';
import { Languages, ArrowRightLeft, Copy, Volume2 } from 'lucide-react';
import ToolLayout from '../components/ToolLayout';

const TranslatorPage = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'auto', name: 'Auto-detect' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'th', name: 'Thai' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'nl', name: 'Dutch' }
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    
    // Simulate translation
    setTimeout(() => {
      const mockTranslations: { [key: string]: string } = {
        'es': 'Esta es una traducción simulada de su texto. El sistema de IA ha procesado el contenido y lo ha convertido al idioma de destino seleccionado manteniendo el significado y contexto originales.',
        'fr': 'Ceci est une traduction simulée de votre texte. Le système IA a traité le contenu et l\'a converti dans la langue cible sélectionnée tout en préservant le sens et le contexte originaux.',
        'de': 'Dies ist eine simulierte Übersetzung Ihres Textes. Das KI-System hat den Inhalt verarbeitet und in die ausgewählte Zielsprache konvertiert, wobei die ursprüngliche Bedeutung und der Kontext erhalten bleiben.',
        'ja': 'これはあなたのテキストのシミュレートされた翻訳です。AIシステムがコンテンツを処理し、元の意味とコンテキストを保持しながら選択されたターゲット言語に変換しました。',
        'zh': '这是您文本的模拟翻译。AI系统已处理内容并将其转换为所选目标语言，同时保持原始含义和上下文。'
      };
      
      setTranslatedText(mockTranslations[targetLang] || 'This is a simulated translation of your text. The AI system has processed the content and converted it to the selected target language while preserving the original meaning and context.');
      setIsTranslating(false);
    }, 1500);
  };

  const swapLanguages = () => {
    if (sourceLang !== 'auto') {
      setSourceLang(targetLang);
      setTargetLang(sourceLang);
      setSourceText(translatedText);
      setTranslatedText(sourceText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const speakText = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <ToolLayout
      title="Translator"
      description="Break language barriers with accurate, context-aware translations across 100+ languages."
      gradient="from-orange-500 to-red-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
              <Languages className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Translate Text</h2>
          </div>

          {/* Language Selection */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={swapLanguages}
              disabled={sourceLang === 'auto'}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRightLeft className="h-5 w-5 text-gray-600" />
            </button>

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {languages.filter(lang => lang.code !== 'auto').map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Source Text */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {languages.find(l => l.code === sourceLang)?.name || 'Source'}
                </h3>
                <div className="flex space-x-2">
                  {sourceText && (
                    <>
                      <button
                        onClick={() => speakText(sourceText, sourceLang)}
                        className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(sourceText)}
                        className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{sourceText.length} characters</span>
                <span>{sourceText.split(/\s+/).filter(word => word.length > 0).length} words</span>
              </div>
            </div>

            {/* Translated Text */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {languages.find(l => l.code === targetLang)?.name || 'Translation'}
                </h3>
                <div className="flex space-x-2">
                  {translatedText && (
                    <>
                      <button
                        onClick={() => speakText(translatedText, targetLang)}
                        className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(translatedText)}
                        className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              <div className="w-full h-64 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg overflow-y-auto">
                {translatedText ? (
                  <div className="text-gray-800 whitespace-pre-wrap">{translatedText}</div>
                ) : (
                  <div className="text-gray-500 italic">Translation will appear here...</div>
                )}
              </div>
              
              {translatedText && (
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{translatedText.length} characters</span>
                  <span>{translatedText.split(/\s+/).filter(word => word.length > 0).length} words</span>
                </div>
              )}
            </div>
          </div>

          {/* Translate Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleTranslate}
              disabled={!sourceText.trim() || isTranslating}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
            >
              {isTranslating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <Languages className="h-5 w-5" />
                  <span>Translate</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🌍 Translation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div>• 100+ supported languages</div>
            <div>• Context-aware translations</div>
            <div>• Auto-language detection</div>
            <div>• Text-to-speech playback</div>
            <div>• Instant copy to clipboard</div>
            <div>• Bidirectional translation</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default TranslatorPage;