import { motion } from 'framer-motion';
import { useOS } from '../context/OSContext';

export default function DesktopIcons() {
  const { openWindow, apps } = useOS();

  const desktopApps = apps.slice(0, 5);

  return (
    <div className="desktop-icons">
      {desktopApps.map((app, index) => (
        <motion.button
          key={app.id}
          className="desktop-icon"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openWindow(app.id)}
          onDoubleClick={() => openWindow(app.id)}
        >
          <div className="icon-background">
            <AppIcon name={app.icon} />
          </div>
          <span className="icon-label">{app.name}</span>
        </motion.button>
      ))}

      <style>{`
        .desktop-icons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
        }

        .desktop-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 12px 8px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          min-width: 80px;
        }

        .desktop-icon:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .icon-background {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
          border-radius: var(--radius-lg);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .icon-label {
          font-size: 12px;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          text-align: center;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

function AppIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    terminal: <Terminal size={28} />,
    folder: <Folder size={28} />,
    settings: <Settings size={28} />,
    globe: <Globe size={28} />,
    calculator: <Calculator size={28} />,
    'file-text': <FileText size={28} />,
    music: <Music size={28} />,
    code: <Code size={28} />,
  };
  return <>{icons[name] || <Folder size={28} />}</>;
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
