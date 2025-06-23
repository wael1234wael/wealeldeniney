import React, { useState } from 'react';
import { FileText, Zap, Copy, Download } from 'lucide-react';
import ToolLayout from '../components/ToolLayout';

const TextSummarizerPage = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [summaryLength, setSummaryLength] = useState('medium');

  const handleSummarize = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate text summarization
    setTimeout(() => {
      const mockSummary = `This is a summarized version of your text. The AI has identified the key points and condensed the content while preserving the essential information. The summary maintains the original context and meaning while being significantly shorter than the original text.

Key points covered:
• Main topic and central theme
• Important supporting details
• Conclusion and implications

This summary represents approximately ${summaryLength === 'short' ? '25%' : summaryLength === 'medium' ? '40%' : '60%'} of the original text length.`;
      
      setSummary(mockSummary);
      setIsProcessing(false);
    }, 2500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <ToolLayout
      title="Text Summarizer"
      description="Condense long documents and articles into key points while preserving essential information."
      gradient="from-green-500 to-emerald-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Original Text</h2>
            </div>

            <div className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your text here to summarize. You can include articles, research papers, reports, or any long-form content that you'd like to condense into key points..."
                className="w-full h-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{inputText.length} characters</span>
                <span>{inputText.split(/\s+/).filter(word => word.length > 0).length} words</span>
              </div>

              {/* Summary Length Options */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Summary Length</label>
                <div className="flex space-x-4">
                  {[
                    { value: 'short', label: 'Short' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'detailed', label: 'Detailed' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value={option.value}
                        checked={summaryLength === option.value}
                        onChange={(e) => setSummaryLength(e.target.value)}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSummarize}
                disabled={!inputText.trim() || isProcessing}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Summarizing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5" />
                    <span>Summarize Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Summary</h2>
              </div>
              
              {summary && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {summary ? (
                <div className="bg-gray-50 rounded-lg p-6 h-80 overflow-y-auto">
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {summary}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your summary will appear here</p>
                    <p className="text-sm mt-2">Enter text and click "Summarize Text" to get started</p>
                  </div>
                </div>
              )}
              
              {summary && (
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{summary.length} characters</span>
                  <span>{summary.split(/\s+/).filter(word => word.length > 0).length} words</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Tips for Better Summaries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>• Use well-structured text with clear paragraphs</div>
            <div>• Include headings and subheadings when possible</div>
            <div>• Ensure the text has a clear main topic</div>
            <div>• Remove unnecessary formatting before pasting</div>
            <div>• Choose appropriate summary length for your needs</div>
            <div>• Review and edit the summary as needed</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default TextSummarizerPage;