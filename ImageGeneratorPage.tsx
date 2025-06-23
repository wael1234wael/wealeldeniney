import React, { useState } from 'react';
import { Image, Wand2, Download, Sparkles } from 'lucide-react';
import ToolLayout from '../components/ToolLayout';

const ImageGeneratorPage = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI image generation with a delay
    setTimeout(() => {
      // Using a placeholder image service for demonstration
      const imageUrl = `https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop`;
      setGeneratedImage(imageUrl);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <ToolLayout
      title="AI Image Generator"
      description="Transform your ideas into stunning visuals with our advanced AI image generation technology."
      gradient="from-purple-500 to-pink-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <Image className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create Your Image</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Describe what you want to create
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A serene mountain landscape at sunset with a crystal clear lake reflecting the orange and pink sky..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  <span>Generate Image</span>
                </>
              )}
            </button>

            {generatedImage && (
              <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Generated Image</h3>
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src={generatedImage}
                      alt="Generated artwork"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Sparkles className="h-5 w-5 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips for Better Results</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Be specific about colors, lighting, and mood</li>
            <li>• Include artistic styles (e.g., "oil painting", "digital art", "photorealistic")</li>
            <li>• Mention composition details (e.g., "close-up", "wide angle", "bird's eye view")</li>
            <li>• Add quality modifiers like "highly detailed", "4K", "professional photography"</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ImageGeneratorPage;