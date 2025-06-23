import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Image, 
  Volume2, 
  FileText, 
  Languages, 
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Header from '../components/Header';

const HomePage = () => {
  const aiTools = [
    {
      icon: Image,
      title: "AI Image Generator",
      description: "Transform your ideas into stunning visuals with our advanced AI image generation technology.",
      gradient: "from-purple-500 to-pink-500",
      path: "/image-generator"
    },
    {
      icon: Volume2,
      title: "Voice Enhancer",
      description: "Improve audio quality instantly with AI-powered voice enhancement and noise reduction.",
      gradient: "from-blue-500 to-cyan-500",
      path: "/voice-enhancer"
    },
    {
      icon: FileText,
      title: "Text Summarizer",
      description: "Condense long documents and articles into key points while preserving essential information.",
      gradient: "from-green-500 to-emerald-500",
      path: "/text-summarizer"
    },
    {
      icon: Languages,
      title: "Translator",
      description: "Break language barriers with accurate, context-aware translations across 100+ languages.",
      gradient: "from-orange-500 to-red-500",
      path: "/translator"
    },
    {
      icon: MessageCircle,
      title: "Chat Assistant",
      description: "Your intelligent writing companion for brainstorming, content creation, and problem-solving.",
      gradient: "from-indigo-500 to-purple-500",
      path: "/chat-assistant"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful AI Tools
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All in One Place
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Work smarter, faster, and more creatively with our collection of cutting-edge AI tools. 
              From image generation to voice enhancement, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Explore Tools</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your AI Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each tool is designed to solve specific challenges and boost your productivity. 
              Select the one that fits your current needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tool.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {tool.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <Link
                      to={tool.path}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 group-hover:shadow-xl"
                    >
                      <span>Try the tool</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <div className="text-blue-100 text-lg">Happy Users</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
              <div className="text-blue-100 text-lg">Tasks Completed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Brain className="h-8 w-8 text-blue-400" />
                  <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl font-bold">Mazmak</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                Empowering creativity and productivity through accessible AI tools. 
                Join thousands of users who are already working smarter.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mazmak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;