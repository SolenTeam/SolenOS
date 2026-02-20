import { motion } from 'framer-motion';
import { 
  Monitor, 
  Palette, 
  User, 
  Bell, 
  Wifi, 
  Bluetooth, 
  Shield, 
  Info,
  Check,
  Moon,
  Sun,
  Laptop,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { useOS, wallpapers } from '../../context/OSContext';
import type { ThemeMode } from '../../types';

export default function Settings() {
  const { themeMode, setThemeMode, wallpaper, setWallpaper, addNotification } = useOS();
  const [activeSection, setActiveSection] = useState('personalization');

  const sections = [
    { id: 'personalization', icon: Palette, label: 'Personalization' },
    { id: 'system', icon: Monitor, label: 'System' },
    { id: 'accounts', icon: User, label: 'Accounts' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'network', icon: Wifi, label: 'Network' },
    { id: 'bluetooth', icon: Bluetooth, label: 'Bluetooth' },
    { id: 'privacy', icon: Shield, label: 'Privacy' },
    { id: 'about', icon: Info, label: 'About' },
  ];

  return (
    <div className="settings">
      {/* Sidebar */}
      <div className="settings-sidebar">
        <div className="settings-search">
          <input type="text" placeholder="Find a setting..." />
        </div>
        <div className="settings-menu">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`settings-menu-item ${activeSection === section.id ? 'active' : ''}`}
              whileHover={{ x: 4 }}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon size={20} />
              <span>{section.label}</span>
              <ChevronRight size={16} className="chevron" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="settings-content">
        {activeSection === 'personalization' && (
          <PersonalizationSection 
            themeMode={themeMode} 
            setThemeMode={setThemeMode}
            wallpaper={wallpaper}
            setWallpaper={setWallpaper}
            addNotification={addNotification}
          />
        )}
        {activeSection === 'system' && <SystemSection />}
        {activeSection === 'accounts' && <AccountsSection />}
        {activeSection === 'notifications' && <NotificationsSection />}
        {activeSection === 'network' && <NetworkSection />}
        {activeSection === 'bluetooth' && <BluetoothSection />}
        {activeSection === 'privacy' && <PrivacySection />}
        {activeSection === 'about' && <AboutSection />}
      </div>

      <style>{`
        .settings {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .settings-sidebar {
          width: 260px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          padding: 20px 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
        }

        .settings-content {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
        }

        .settings-search input {
          width: 100%;
          padding: 10px 14px;
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 14px;
        }

        .settings-search input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .settings-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .settings-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          font-size: 14px;
        }

        .settings-menu-item:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .settings-menu-item.active {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary-color);
        }

        .settings-menu-item .chevron {
          margin-left: auto;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .settings-menu-item:hover .chevron {
          opacity: 1;
        }

        .settings-section {
          max-width: 700px;
        }

        .settings-header {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .settings-group {
          margin-bottom: 24px;
        }

        .settings-group-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .settings-card {
          background: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 16px;
          margin-bottom: 12px;
        }

        .settings-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .settings-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .settings-row-label {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .settings-row-title {
          font-size: 14px;
          color: var(--text-primary);
        }

        .settings-row-description {
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}

function PersonalizationSection({ 
  themeMode, 
  setThemeMode, 
  wallpaper, 
  setWallpaper,
  addNotification 
}: { 
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  wallpaper: string;
  setWallpaper: (url: string) => void;
  addNotification: (n: any) => void;
}) {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Personalization</h2>

      <div className="settings-group">
        <div className="settings-group-title">Theme</div>
        <div className="theme-options">
          <motion.button
            className={`theme-option ${themeMode === 'dark' ? 'active' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setThemeMode('dark')}
          >
            <Moon size={24} />
            <span>Dark</span>
            {themeMode === 'dark' && <Check size={16} className="check" />}
          </motion.button>
          <motion.button
            className={`theme-option ${themeMode === 'light' ? 'active' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setThemeMode('light')}
          >
            <Sun size={24} />
            <span>Light</span>
            {themeMode === 'light' && <Check size={16} className="check" />}
          </motion.button>
          <motion.button
            className={`theme-option ${themeMode === 'auto' ? 'active' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setThemeMode('auto')}
          >
            <Laptop size={24} />
            <span>System</span>
            {themeMode === 'auto' && <Check size={16} className="check" />}
          </motion.button>
        </div>
      </div>

      <div className="settings-group">
        <div className="settings-group-title">Wallpaper</div>
        <div className="wallpaper-grid">
          {wallpapers.map((wp, index) => (
            <motion.button
              key={index}
              className={`wallpaper-preview ${wallpaper === wp ? 'active' : ''}`}
              style={{ background: wp }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setWallpaper(wp);
                addNotification({
                  title: 'Wallpaper Changed',
                  message: 'Your new wallpaper has been applied.',
                  type: 'success'
                });
              }}
            >
              {wallpaper === wp && <Check size={24} className="wallpaper-check" />}
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        .theme-options {
          display: flex;
          gap: 12px;
        }

        .theme-option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          border: 2px solid var(--border-color);
          background: var(--background-card);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .theme-option:hover {
          border-color: var(--text-muted);
        }

        .theme-option.active {
          border-color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
        }

        .theme-option .check {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .wallpaper-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .wallpaper-preview {
          aspect-ratio: 16/9;
          border: 3px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .wallpaper-preview:hover {
          border-color: var(--text-muted);
          transform: scale(1.05);
        }

        .wallpaper-preview.active {
          border-color: var(--primary-color);
        }

        .wallpaper-check {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}

function SystemSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">System</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Display Name</span>
            <span className="settings-row-description">Your computer's name on the network</span>
          </div>
          <input className="input" style={{ width: 200 }} defaultValue="SolenOS-PC" />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Screen Brightness</span>
            <span className="settings-row-description">Adjust your display brightness</span>
          </div>
          <input type="range" min="0" max="100" defaultValue="80" />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Night Light</span>
            <span className="settings-row-description">Reduce blue light in the evening</span>
          </div>
          <ToggleSwitch defaultChecked={false} />
        </div>
      </div>
    </div>
  );
}

function AccountsSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Accounts</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Username</span>
            <span className="settings-row-description">Your display name</span>
          </div>
          <input className="input" style={{ width: 200 }} defaultValue="User" />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Email</span>
            <span className="settings-row-description">Your account email</span>
          </div>
          <span className="settings-row-description">user@solenos.com</span>
        </div>
      </div>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Notifications</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Show Notifications</span>
            <span className="settings-row-description">Allow apps to show notifications</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Sound</span>
            <span className="settings-row-description">Play sound for notifications</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
      </div>
    </div>
  );
}

function NetworkSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Network</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Wi-Fi</span>
            <span className="settings-row-description">Connected to Home Network</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Airplane Mode</span>
            <span className="settings-row-description">Disable all wireless connections</span>
          </div>
          <ToggleSwitch defaultChecked={false} />
        </div>
      </div>
    </div>
  );
}

function BluetoothSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Bluetooth</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Bluetooth</span>
            <span className="settings-row-description">Discoverable as SolenOS-PC</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
      </div>
    </div>
  );
}

function PrivacySection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">Privacy</h2>
      <div className="settings-card">
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Location Services</span>
            <span className="settings-row-description">Allow apps to access your location</span>
          </div>
          <ToggleSwitch defaultChecked={false} />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Camera Access</span>
            <span className="settings-row-description">Allow apps to use your camera</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
        <div className="settings-row">
          <div className="settings-row-label">
            <span className="settings-row-title">Microphone Access</span>
            <span className="settings-row-description">Allow apps to use your microphone</span>
          </div>
          <ToggleSwitch defaultChecked={true} />
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="settings-section">
      <h2 className="settings-header">About</h2>
      <div className="settings-card" style={{ textAlign: 'center', padding: 40 }}>
        <div style={{ 
          width: 80, 
          height: 80, 
          margin: '0 auto 20px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          color: 'white'
        }}>
          S
        </div>
        <h3 style={{ fontSize: 20, marginBottom: 8 }}>SolenOS</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Version 1.0.0</p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 16,
          textAlign: 'left'
        }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>OS Type</div>
            <div>Web-based OS</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Build</div>
            <div>2025.02.19</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Framework</div>
            <div>React + TypeScript</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Renderer</div>
            <div>Vite</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <motion.button
      className={`toggle-switch ${checked ? 'active' : ''}`}
      whileTap={{ scale: 0.95 }}
      onClick={() => setChecked(!checked)}
    >
      <div className="toggle-knob" />
    </motion.button>
  );
}
