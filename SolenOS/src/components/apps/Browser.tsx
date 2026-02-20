import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Home, 
  Star, 
  Search,
  Shield,
  Lock
} from 'lucide-react';
import { useState } from 'react';

export default function Browser() {
  const [url, setUrl] = useState('https://www.example.com');
  const [displayUrl, setDisplayUrl] = useState('example.com');

  return (
    <div className="browser">
      {/* Browser Header */}
      <div className="browser-header">
        <div className="browser-nav">
          <motion.button className="browser-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowLeft size={18} />
          </motion.button>
          <motion.button className="browser-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowRight size={18} />
          </motion.button>
          <motion.button className="browser-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <RotateCw size={18} />
          </motion.button>
          <motion.button className="browser-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Home size={18} />
          </motion.button>
        </div>

        <div className="browser-url-bar">
          <Shield size={16} className="secure-icon" />
          <input
            type="text"
            value={displayUrl}
            onChange={(e) => {
              setDisplayUrl(e.target.value);
              setUrl(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setDisplayUrl(url.replace(/^https?:\/\//, ''));
              }
            }}
          />
          <motion.button className="star-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Star size={16} />
          </motion.button>
        </div>

        <div className="browser-menu">
          <motion.button className="browser-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Lock size={18} />
          </motion.button>
        </div>
      </div>

      {/* Browser Content */}
      <div className="browser-content">
        <div className="new-tab-page">
          <motion.div
            className="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Globe size={80} strokeWidth={1} />
          </motion.div>

          <motion.h1
            className="title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Solen Browser
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fast, Secure, and Beautiful
          </motion.p>

          <motion.div
            className="search-box"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Search size={20} />
            <input type="text" placeholder="Search the web..." />
          </motion.div>

          <motion.div
            className="quick-links"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['Google', 'GitHub', 'YouTube', 'Reddit'].map((site, i) => (
              <motion.button
                key={site}
                className="quick-link"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={24} />
                <span>{site}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .browser {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: var(--background-dark);
        }

        .browser-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--background-light);
          border-bottom: 1px solid var(--border-color);
        }

        .browser-nav {
          display: flex;
          gap: 4px;
        }

        .browser-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .browser-btn:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .browser-url-bar {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--background-card);
          padding: 10px 16px;
          border-radius: var(--radius-full, 9999px);
          border: 1px solid var(--border-color);
        }

        .browser-url-bar .secure-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .browser-url-bar input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 14px;
        }

        .star-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .star-btn:hover {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
        }

        .browser-menu {
          display: flex;
          gap: 4px;
        }

        .browser-content {
          flex: 1;
          overflow: hidden;
        }

        .new-tab-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 40px;
        }

        .logo {
          color: var(--primary-color);
          margin-bottom: 8px;
        }

        .title {
          font-size: 36px;
          font-weight: 600;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 16px;
          color: var(--text-secondary);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 600px;
          padding: 16px 20px;
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full, 9999px);
          margin-top: 24px;
        }

        .search-box svg {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .search-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 16px;
        }

        .quick-links {
          display: flex;
          gap: 16px;
          margin-top: 32px;
        }

        .quick-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 24px;
          border: none;
          background: var(--background-card);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .quick-link:hover {
          background: var(--background-hover);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        .quick-link span {
          font-size: 13px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
