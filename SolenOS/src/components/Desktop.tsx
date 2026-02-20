import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useOS } from '../context/OSContext';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Window from './Window';
import DesktopIcons from './DesktopIcons';
import NotificationArea from './NotificationArea';
import BootScreen from './BootScreen';
import { useCurrentTime } from '../hooks/useCurrentTime';

export default function Desktop() {
  const {
    windows,
    activeWindowId,
    focusWindow,
    closeStartMenu,
    wallpaper,
    powerState,
    powerOn,
    themeMode
  } = useOS();

  const currentTime = useCurrentTime();

  // Apply theme mode
  useEffect(() => {
    const applyTheme = () => {
      const isDark = themeMode === 'dark' || (themeMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.style.setProperty('--background-dark', '#0f0f0f');
        document.documentElement.style.setProperty('--background-light', '#1a1a1a');
        document.documentElement.style.setProperty('--background-card', '#252525');
        document.documentElement.style.setProperty('--background-hover', '#303030');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#a1a1aa');
        document.documentElement.style.setProperty('--text-muted', '#71717a');
      } else {
        document.documentElement.style.setProperty('--background-dark', '#f5f5f5');
        document.documentElement.style.setProperty('--background-light', '#ffffff');
        document.documentElement.style.setProperty('--background-card', '#e5e5e5');
        document.documentElement.style.setProperty('--background-hover', '#d4d4d4');
        document.documentElement.style.setProperty('--text-primary', '#171717');
        document.documentElement.style.setProperty('--text-secondary', '#525252');
        document.documentElement.style.setProperty('--text-muted', '#71717a');
      }
    };

    applyTheme();

    if (themeMode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [themeMode]);

  // Show boot/shutdown screen based on power state
  if (powerState === 'shut-down') {
    return (
      <div className="shutdown-screen" onClick={powerOn}>
        <p>Click to power on</p>
        <style>{`
          .shutdown-screen {
            width: 100%;
            height: 100%;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-size: 14px;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }

  if (powerState === 'booting' || powerState === 'restarting' || powerState === 'shutting-down') {
    return <BootScreen status={powerState} />;
  }

  const handleDesktopClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeStartMenu();
    }
  };

  return (
    <div 
      className="desktop"
      style={{ 
        background: wallpaper,
        transition: 'background 0.5s ease',
      }}
      onClick={handleDesktopClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Time Display Overlay (ambient clock - behind everything) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="ambient-clock"
      >
        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </motion.div>

      {/* Desktop Area */}
      <div className="desktop-area">
        {/* Desktop Icons */}
        <DesktopIcons />

        {/* Windows */}
        <AnimatePresence>
          {windows.map((windowState) => (
            <Window
              key={windowState.id}
              windowState={windowState}
              isActive={activeWindowId === windowState.id}
              onFocus={() => focusWindow(windowState.id)}
            />
          ))}
        </AnimatePresence>

        {/* Start Menu */}
        <StartMenu />

        {/* Notifications */}
        <NotificationArea />
      </div>

      {/* Taskbar */}
      <Taskbar />

      <style>{`
        .desktop {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .desktop-area {
          width: 100%;
          height: calc(100% - var(--taskbar-height));
          position: relative;
          z-index: 10;
        }

        .ambient-clock {
          position: fixed;
          top: 20px;
          right: 30px;
          font-size: 300px;
          font-weight: 200;
          color: rgba(255, 255, 255, 0.03);
          pointer-events: none;
          z-index: 0;
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}
