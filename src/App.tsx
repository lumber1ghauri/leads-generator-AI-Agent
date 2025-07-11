import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  ArrowDownTrayIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

interface SearchResponse {
  sheet_link?: string;
}

const loadingMessages = [
  "🔍 Scanning the business landscape...",
  "📊 Analyzing potential leads...",
  "🎯 Finding the perfect matches...",
  "📝 Preparing your custom sheet...",
  "✨ Almost ready..."
];

function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingMessageIndex((prev: number) => 
          prev < loadingMessages.length - 1 ? prev + 1 : prev
        );
      }, 2000);
    } else {
      setLoadingMessageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setError(null);
    setResult(null);
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://1873bef7b7b5.ngrok-free.app/webhook/lead-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      const data: SearchResponse = await response.json();
      setResult(data);
      
      if (!data.sheet_link) {
        throw new Error('No sheet link received');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="futuristic-bg">
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.2
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <header className="futuristic-header">
        <motion.h1 
          className="futuristic-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Agentic Leads Generator
        </motion.h1>
        <motion.p 
          className="futuristic-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         An AI-powered tool that lets you generate leads for any industry by entering a keyword 
         automatically finds company names, websites, and emails, and gives you
          a clean downloadable sheet in seconds.
        </motion.p>
      </header>
      
      <main className="futuristic-main">
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="input-wrapper">
            <MagnifyingGlassIcon className="input-icon" width={20} height={20} />
            <input
              className="futuristic-input"
              type="text"
              placeholder="Enter a business niche... (e.g., 'local coffee shops')"
              value={query}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <div className="input-focus-effect"></div>
          </div>
          
          <motion.button 
            className="futuristic-button search-button"
            onClick={handleSearch}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="button-content">
              {isLoading ? (
                <>⏳ Processing...</>
              ) : (
                <><MagnifyingGlassIcon className="button-icon" width={20} height={20} /> Generate Leads</>
              )}
            </span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="result-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="error-icon">❌</span>
              {error}
            </motion.div>
          )}
          
          {isLoading && (
            <motion.div 
              className="loading-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="loading-spinner"></div>
              <span>{loadingMessages[loadingMessageIndex]}</span>
            </motion.div>
          )}
          
          {result?.sheet_link && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="success-icon">✨</span>
              Your leads are ready!
              <motion.a 
                href={result.sheet_link}
                target="_blank"
                rel="noopener noreferrer"
                className="sheet-link"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowDownTrayIcon className="sheet-icon" width={20} height={20} />
                View Your Custom Lead Sheet
                <span className="arrow">→</span>
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </main>

      <motion.footer 
        className="futuristic-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="footer-content">
          <span>Connect with us: </span>
          <div className="social-links">
            <motion.a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <span className="social-icon">𝕏</span>
            </motion.a>
            <motion.a 
              href="https://github.com/lumber1ghauri" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <span className="social-icon">🔗</span>
            </motion.a>
            <motion.a 
              href="https://siriussolutions.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <GlobeAltIcon className="social-icon" width={24} height={24} />
            </motion.a>
          </div>
          <motion.p
            className="footer-credit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A product of Sirius Solutions
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
