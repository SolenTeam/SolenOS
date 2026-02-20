import { motion } from 'framer-motion';
import { Power, RotateCw } from 'lucide-react';

interface BootScreenProps {
  status?: 'booting' | 'restarting' | 'shutting-down';
}

export default function BootScreen({ status = 'booting' }: BootScreenProps) {
  const messages = {
    booting: 'Starting SolenOS...',
    restarting: 'Restarting...',
    'shutting-down': 'Shutting down...',
  };

  const icons = {
    booting: <Power size={64} strokeWidth={1.5} />,
    restarting: <RotateCw size={64} strokeWidth={1.5} />,
    'shutting-down': <Power size={64} strokeWidth={1.5} />,
  };

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="boot-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="logo-icon"
          animate={status === 'shutting-down' ? {} : {
            rotate: status === 'restarting' ? [0, 360] : [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, ease: "easeInOut" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {icons[status]}
        </motion.div>

        <motion.h1
          className="logo-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          SolenOS
        </motion.h1>

        <motion.p
          className="logo-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {messages[status]}
        </motion.p>
      </motion.div>

      {status !== 'shutting-down' && (
        <motion.div
          className="boot-progress"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '200px' }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {status === 'booting' && (
        <motion.div
          className="boot-tips"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <BootTip />
        </motion.div>
      )}

      <style>{`
        .boot-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          z-index: 9999;
        }

        .boot-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-icon {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
          color: white;
        }

        .logo-text {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 8px;
          background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          font-size: 14px;
          color: #71717a;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .boot-progress {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
          background-size: 200% 100%;
          border-radius: 2px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .boot-tips {
          position: absolute;
          bottom: 60px;
          font-size: 14px;
          color: #71717a;
          text-align: center;
        }
      `}</style>
    </motion.div>
  );
}

const tips = [
  "Click the Start button to explore apps",
  "Drag windows to reposition them",
  "Double-click desktop icons to open apps",
  "Right-click on the desktop for more options",
  "Use the taskbar to switch between apps",
  "Press the maximize button for fullscreen",
];

function BootTip() {
  const tipIndex = Math.floor(Math.random() * tips.length);
  return <p>{tips[tipIndex]}</p>;
}
