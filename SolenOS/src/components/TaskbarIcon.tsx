import { motion } from 'framer-motion';
import { 
  Terminal, 
  Folder, 
  Settings, 
  Globe, 
  Calculator, 
  FileText, 
  Music, 
  Code,
  type LucideIcon
} from 'lucide-react';

interface TaskbarIconProps {
  icon: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  terminal: Terminal,
  folder: Folder,
  settings: Settings,
  globe: Globe,
  calculator: Calculator,
  'file-text': FileText,
  music: Music,
  code: Code,
};

export default function TaskbarIcon({ icon, title, isActive, onClick, delay = 0 }: TaskbarIconProps) {
  const IconComponent = iconMap[icon] || Folder;

  return (
    <motion.button
      className={`taskbar-icon ${isActive ? 'active' : ''}`}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-bg" />
      <IconComponent size={22} strokeWidth={2} />
      {isActive && <div className="active-indicator" />}
      
      {/* Tooltip */}
      <div className="tooltip">{title}</div>

      <style>{`
        .taskbar-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          overflow: visible;
        }

        .taskbar-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .taskbar-icon.active {
          background: rgba(255, 255, 255, 0.15);
          color: var(--text-primary);
        }

        .icon-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .taskbar-icon:hover .icon-bg,
        .taskbar-icon.active .icon-bg {
          opacity: 1;
        }

        .active-indicator {
          position: absolute;
          bottom: 4px;
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          transition: all var(--transition-fast);
        }

        .taskbar-icon.active .active-indicator {
          width: 16px;
          border-radius: 2px;
        }

        .taskbar-icon .tooltip {
          display: none;
        }

        .taskbar-icon:hover .tooltip {
          display: block;
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </motion.button>
  );
}
