import React, { useState, useRef } from 'react';
import { Volume2, Upload, Play, Pause, Download, Mic } from 'lucide-react';
import ToolLayout from '../components/ToolLayout';

const VoiceEnhancerPage = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [processedAudio, setProcessedAudio] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      setProcessedAudio(null);
    }
  };

  const handleEnhance = async () => {
    if (!audioFile) return;
    
    setIsProcessing(true);
    
    // Simulate audio processing
    setTimeout(() => {
      // For demo purposes, we'll use the same audio file
      const audioUrl = URL.createObjectURL(audioFile);
      setProcessedAudio(audioUrl);
      setIsProcessing(false);
    }, 4000);
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <ToolLayout
      title="Voice Enhancer"
      description="Improve audio quality instantly with AI-powered voice enhancement and noise reduction."
      gradient="from-blue-500 to-cyan-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <Volume2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Enhance Your Audio</h2>
          </div>

          <div className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-200">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              {audioFile ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Mic className="h-8 w-8 text-blue-500" />
                    <span className="text-lg font-medium text-gray-900">{audioFile.name}</span>
                  </div>
                  <p className="text-gray-600">File size: {(audioFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Choose different file
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">Upload your audio file</p>
                    <p className="text-gray-600 mb-4">Supports MP3, WAV, M4A, and other audio formats</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      Choose File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhancement Options */}
            {audioFile && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Enhancement Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700">Noise Reduction</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700">Voice Clarity</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700">Echo Removal</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700">Volume Normalization</span>
                  </label>
                </div>
              </div>
            )}

            {/* Enhance Button */}
            {audioFile && (
              <button
                onClick={handleEnhance}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enhancing Audio...</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-5 w-5" />
                    <span>Enhance Audio</span>
                  </>
                )}
              </button>
            )}

            {/* Enhanced Audio Player */}
            {processedAudio && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Enhanced Audio</h3>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlayback}
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  
                  <span className="text-sm text-gray-600">1:23 / 3:45</span>
                </div>
                
                <audio
                  ref={audioRef}
                  src={processedAudio}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Enhancement Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>• AI-powered noise reduction</div>
            <div>• Voice clarity enhancement</div>
            <div>• Echo and reverb removal</div>
            <div>• Automatic volume normalization</div>
            <div>• Background music separation</div>
            <div>• Real-time processing</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default VoiceEnhancerPage;