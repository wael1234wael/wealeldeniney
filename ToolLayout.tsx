import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  gradient: string;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ title, description, children, gradient }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${gradient} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Tool Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Homepage</span>
            </Link>
          </div>
          
          {children}
        </div>
      </section>
    </div>
  );
};

export default ToolLayout;