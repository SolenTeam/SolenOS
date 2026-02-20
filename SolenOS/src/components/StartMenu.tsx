import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Power, RotateCw, ChevronRight } from 'lucide-react';
import { useOS } from '../context/OSContext';

export default function StartMenu() {
  const { isStartMenuOpen, closeStartMenu, apps, openWindow, shutdown, restart } = useOS();

  const pinnedApps = apps.slice(0, 4);
  const allApps = apps;

  return (
    <AnimatePresence>
      {isStartMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="start-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStartMenu}
          />

          {/* Start Menu */}
          <motion.div
            className="start-menu"
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Profile */}
            <div className="start-menu-header">
              <div className="user-profile">
                <div className="user-avatar">
                  <User size={24} />
                </div>
                <div className="user-info">
                  <span className="user-name">User</span>
                  <span className="user-email">user@solenos.com</span>
                </div>
              </div>
              <div className="power-buttons">
                <motion.button
                  className="power-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={restart}
                >
                  <RotateCw size={18} />
                </motion.button>
                <motion.button
                  className="power-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shutdown}
                >
                  <Power size={18} />
                </motion.button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search apps, files, and settings..."
              />
            </div>

            {/* Pinned Apps */}
            <div className="start-section">
              <div className="section-header">
                <span>Pinned</span>
              </div>
              <div className="pinned-grid">
                {pinnedApps.map((app, index) => (
                  <motion.button
                    key={app.id}
                    className="app-tile"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openWindow(app.id)}
                  >
                    <div className="app-tile-icon">
                      <AppIcon name={app.icon} />
                    </div>
                    <span className="app-tile-name">{app.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* All Apps */}
            <div className="start-section">
              <div className="section-header">
                <span>All Apps</span>
                <ChevronRight size={16} />
              </div>
              <div className="all-apps-list">
                {allApps.map((app, index) => (
                  <motion.button
                    key={app.id}
                    className="app-list-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    onClick={() => openWindow(app.id)}
                  >
                    <AppIcon name={app.icon} size={20} />
                    <span className="app-list-name">{app.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <style>{`
              .start-menu-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: var(--taskbar-height);
                z-index: 8998;
              }

              .start-menu {
                position: fixed;
                bottom: calc(var(--taskbar-height) + 12px);
                left: 50%;
                transform: translateX(-50%);
                width: 600px;
                max-height: calc(100vh - var(--taskbar-height) - 80px);
                background: rgba(20, 20, 20, 0.95);
                backdrop-filter: blur(30px);
                -webkit-backdrop-filter: blur(30px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--radius-xl);
                padding: 24px;
                z-index: 8999;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                overflow-y: auto;
              }

              .start-menu-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
              }

              .user-profile {
                display: flex;
                align-items: center;
                gap: 12px;
              }

              .user-avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
              }

              .user-info {
                display: flex;
                flex-direction: column;
              }

              .user-name {
                font-size: 15px;
                font-weight: 600;
                color: var(--text-primary);
              }

              .user-email {
                font-size: 12px;
                color: var(--text-secondary);
              }

              .power-buttons {
                display: flex;
                gap: 8px;
              }

              .power-btn {
                width: 40px;
                height: 40px;
                border: none;
                background: rgba(255, 255, 255, 0.05);
                border-radius: var(--radius-md);
                color: var(--text-secondary);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all var(--transition-fast);
              }

              .power-btn:hover {
                background: rgba(239, 68, 68, 0.2);
                color: #ef4444;
              }

              .search-container {
                position: relative;
                margin-bottom: 24px;
              }

              .search-icon {
                position: absolute;
                left: 14px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--text-muted);
                pointer-events: none;
              }

              .search-input {
                width: 100%;
                padding: 12px 16px 12px 44px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--radius-md);
                color: var(--text-primary);
                font-size: 14px;
                transition: all var(--transition-fast);
              }

              .search-input:focus {
                outline: none;
                border-color: var(--primary-color);
                background: rgba(255, 255, 255, 0.08);
              }

              .search-input::placeholder {
                color: var(--text-muted);
              }

              .start-section {
                margin-bottom: 24px;
              }

              .section-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
                font-size: 13px;
                font-weight: 600;
                color: var(--text-secondary);
              }

              .pinned-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
              }

              .app-tile {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                padding: 16px 12px;
                border: none;
                background: rgba(255, 255, 255, 0.03);
                border-radius: var(--radius-lg);
                cursor: pointer;
                transition: all var(--transition-fast);
              }

              .app-tile:hover {
                background: rgba(255, 255, 255, 0.08);
              }

              .app-tile-icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                border-radius: var(--radius-md);
                color: var(--primary-color);
              }

              .app-tile-name {
                font-size: 11px;
                color: var(--text-secondary);
                text-align: center;
              }

              .all-apps-list {
                display: flex;
                flex-direction: column;
                gap: 4px;
              }

              .app-list-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 12px;
                border: none;
                background: transparent;
                border-radius: var(--radius-md);
                cursor: pointer;
                transition: all var(--transition-fast);
                text-align: left;
              }

              .app-list-item:hover {
                background: rgba(255, 255, 255, 0.05);
              }

              .app-list-name {
                font-size: 14px;
                color: var(--text-primary);
              }
            `}</style>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function AppIcon({ name, size = 24 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    terminal: <Terminal size={size} />,
    folder: <Folder size={size} />,
    settings: <Settings size={size} />,
    globe: <Globe size={size} />,
    calculator: <Calculator size={size} />,
    'file-text': <FileText size={size} />,
    music: <Music size={size} />,
    code: <Code size={size} />,
  };
  return <>{icons[name] || <Folder size={size} />}</>;
}

import { 
  Terminal, 
  Folder, 
  Settings, 
  Globe, 
  Calculator, 
  FileText, 
  Music, 
  Code 
} from 'lucide-react';
