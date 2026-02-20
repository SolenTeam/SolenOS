import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Minus, Square, Copy } from 'lucide-react';
import { useOS } from '../context/OSContext';
import type { WindowState } from '../types';
import { getAppComponent } from '../components/apps';

interface WindowProps {
  windowState: WindowState;
  isActive: boolean;
  onFocus: () => void;
}

export default function Window({ windowState, isActive, onFocus }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, updateWindowPosition, updateWindowSize, apps } = useOS();
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const app = apps.find(a => a.id === windowState.appId);
  const minSize = app?.minSize || { width: 400, height: 300 };

  const AppComponent = getAppComponent(windowState.appId);

  const handleDragStart = (e: React.MouseEvent) => {
    if (windowState.isMaximized) return;
    e.preventDefault();
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - windowState.position.x,
      y: e.clientY - windowState.position.y,
    };
    onFocus();
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    if (windowState.isMaximized) return;
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        // Clamp to screen bounds
        const maxX = window.innerWidth - minSize.width;
        const maxY = window.innerHeight - 100;
        updateWindowPosition(windowState.id, {
          x: Math.max(-100, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      } else if (isResizing && windowRef.current) {
        const rect = windowRef.current.getBoundingClientRect();
        const newWidth = Math.max(minSize.width, e.clientX - rect.left);
        const newHeight = Math.max(minSize.height, e.clientY - rect.top);
        updateWindowSize(windowState.id, { width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, windowState.id, minSize.width, minSize.height, updateWindowPosition, updateWindowSize]);

  if (windowState.isMinimized) return null;

  const windowStyle = windowState.isMaximized
    ? {
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - var(--taskbar-height))',
        borderRadius: 0,
      }
    : {
        top: windowState.position.y,
        left: windowState.position.x,
        width: windowState.size.width,
        height: windowState.size.height,
        minWidth: minSize.width,
        minHeight: minSize.height,
      };

  return (
    <motion.div
      ref={windowRef}
      className={`window ${isActive ? 'active' : ''}`}
      style={windowStyle}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div
        className="window-header"
        onDoubleClick={() => maximizeWindow(windowState.id)}
        onMouseDown={handleDragStart}
      >
        <div className="window-title">
          <div className="window-icon">
            <AppIcon name={windowState.icon} />
          </div>
          <span>{windowState.title}</span>
        </div>
        <div className="window-controls">
          <button
            className="window-control minimize"
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(windowState.id);
            }}
          >
            <Minus size={16} />
          </button>
          <button
            className="window-control maximize"
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(windowState.id);
            }}
          >
            {windowState.isMaximized ? <Copy size={14} /> : <Square size={14} />}
          </button>
          <button
            className="window-control close"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(windowState.id);
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content">
        {AppComponent && <AppComponent />}
      </div>

      {/* Resize Handle */}
      {!windowState.isMaximized && (
        <div className="resize-handle" onMouseDown={handleResizeStart} />
      )}

      <style>{`
        .window {
          position: absolute;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .window.active {
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
        }

        .window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: grab;
        }

        .window-header:active {
          cursor: grabbing;
        }

        .window:not(.active) .window-header {
          cursor: grab;
        }

        .window-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          pointer-events: none;
        }

        .window-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: var(--radius-sm);
          color: var(--primary-color);
        }

        .window-controls {
          display: flex;
          gap: 4px;
          pointer-events: auto;
        }

        .window-control {
          width: 32px;
          height: 32px;
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

        .window-control:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .window-control.close:hover {
          background: #ef4444;
          color: white;
        }

        .window-content {
          flex: 1;
          overflow: auto;
          position: relative;
          user-select: text;
        }

        .resize-handle {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          cursor: se-resize;
          z-index: 10;
        }

        .resize-handle::before {
          content: '';
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--text-muted);
          border-bottom: 2px solid var(--text-muted);
        }
      `}</style>
    </motion.div>
  );
}

function AppIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    terminal: <Terminal size={16} />,
    folder: <Folder size={16} />,
    settings: <Settings size={16} />,
    globe: <Globe size={16} />,
    calculator: <Calculator size={16} />,
    'file-text': <FileText size={16} />,
    music: <Music size={16} />,
    code: <Code size={16} />,
  };
  return <>{icons[name] || <Folder size={16} />}</>;
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
