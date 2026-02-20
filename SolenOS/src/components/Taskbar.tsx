import { motion } from 'framer-motion';
import { LayoutGrid, Volume2, Wifi, Battery, ChevronUp } from 'lucide-react';
import { useOS } from '../context/OSContext';
import { useCurrentTime } from '../hooks/useCurrentTime';
import TaskbarIcon from './TaskbarIcon';

export default function Taskbar() {
  const { toggleStartMenu, isStartMenuOpen, windows, focusWindow, minimizeWindow, activeWindowId } = useOS();
  const currentTime = useCurrentTime();

  const openApps = windows.filter(w => w.isOpen && !w.isMinimized);

  return (
    <motion.div
      className="taskbar"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
    >
      <div className="taskbar-content">
        {/* Start Button */}
        <motion.button
          className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={toggleStartMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LayoutGrid size={22} strokeWidth={2.5} />
        </motion.button>

        {/* Divider */}
        <div className="taskbar-divider" />

        {/* Open Apps */}
        <div className="taskbar-apps">
          {openApps.map((window, index) => (
            <TaskbarIcon
              key={window.id}
              icon={window.icon}
              title={window.title}
              isActive={activeWindowId === window.id}
              onClick={() => {
                if (activeWindowId === window.id) {
                  minimizeWindow(window.id);
                } else {
                  focusWindow(window.id);
                }
              }}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* System Tray */}
        <div className="taskbar-tray">
          <div className="tray-icons">
            <motion.div
              className="tray-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUp size={16} />
            </motion.div>
            <motion.div
              className="tray-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Wifi size={18} />
            </motion.div>
            <motion.div
              className="tray-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Volume2 size={18} />
            </motion.div>
            <motion.div
              className="tray-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Battery size={18} />
            </motion.div>
          </div>

          <div className="taskbar-clock">
            <div className="clock-time">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="clock-date">
              {currentTime.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          <motion.div
            className="show-desktop"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </div>

      <style>{`
        .taskbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: var(--taskbar-height);
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 9000;
        }

        .taskbar-content {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 12px;
          gap: 8px;
        }

        .start-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .start-button:hover {
          background: rgba(99, 102, 241, 0.2);
        }

        .start-button.active {
          background: rgba(99, 102, 241, 0.3);
        }

        .start-button.active svg {
          color: var(--primary-color);
        }

        .taskbar-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 4px;
        }

        .taskbar-apps {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          padding: 0 8px;
        }

        .taskbar-tray {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 12px;
        }

        .tray-icons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tray-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tray-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .taskbar-clock {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          min-width: 70px;
        }

        .taskbar-clock:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .clock-time {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .clock-date {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .show-desktop {
          width: 8px;
          height: 36px;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </motion.div>
  );
}
