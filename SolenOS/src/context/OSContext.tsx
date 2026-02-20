import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { WindowState, AppDefinition, Notification, FileSystemItem, ThemeMode } from '../types';

type PowerState = 'booting' | 'running' | 'shutting-down' | 'shut-down' | 'restarting';

interface OSContextType {
  windows: WindowState[];
  activeWindowId: string | null;
  openWindow: (appId: string) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  maximizeWindow: (windowId: string) => void;
  focusWindow: (windowId: string) => void;
  updateWindowPosition: (windowId: string, position: { x: number; y: number }) => void;
  updateWindowSize: (windowId: string, size: { width: number; height: number }) => void;
  apps: AppDefinition[];
  isStartMenuOpen: boolean;
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  fileSystem: FileSystemItem[];
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  wallpaper: string;
  setWallpaper: (url: string) => void;
  powerState: PowerState;
  powerOn: () => void;
  shutdown: () => void;
  restart: () => void;
}

const OSContext = createContext<OSContextType | null>(null);

export const defaultApps: AppDefinition[] = [
  {
    id: 'terminal',
    name: 'Terminal',
    icon: 'terminal',
    component: 'Terminal',
    defaultSize: { width: 600, height: 400 },
    minSize: { width: 500, height: 300 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'file-explorer',
    name: 'File Explorer',
    icon: 'folder',
    component: 'FileExplorer',
    defaultSize: { width: 800, height: 500 },
    minSize: { width: 600, height: 400 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: 'settings',
    component: 'Settings',
    defaultSize: { width: 700, height: 550 },
    minSize: { width: 650, height: 500 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'browser',
    name: 'Browser',
    icon: 'globe',
    component: 'Browser',
    defaultSize: { width: 900, height: 600 },
    minSize: { width: 700, height: 500 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'calculator',
    name: 'Calculator',
    icon: 'calculator',
    component: 'Calculator',
    defaultSize: { width: 320, height: 450 },
    minSize: { width: 280, height: 400 },
    resizable: false,
    maximizable: true,
    closable: true,
  },
  {
    id: 'notes',
    name: 'Notes',
    icon: 'file-text',
    component: 'Notes',
    defaultSize: { width: 700, height: 500 },
    minSize: { width: 500, height: 400 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'music',
    name: 'Music',
    icon: 'music',
    component: 'Music',
    defaultSize: { width: 800, height: 500 },
    minSize: { width: 650, height: 450 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
  {
    id: 'vscode',
    name: 'Code Editor',
    icon: 'code',
    component: 'CodeEditor',
    defaultSize: { width: 900, height: 650 },
    minSize: { width: 700, height: 500 },
    resizable: true,
    maximizable: true,
    closable: true,
  },
];

const defaultFileSystem: FileSystemItem[] = [
  {
    id: 'root',
    name: 'Root',
    type: 'folder',
    createdAt: Date.now(),
    modifiedAt: Date.now(),
    children: [
      {
        id: 'documents',
        name: 'Documents',
        type: 'folder',
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        children: [
          {
            id: 'readme',
            name: 'Welcome.txt',
            type: 'file',
            content: 'Welcome to SolenOS!\n\nThis is a beautiful, animated web-based operating system.\nEnjoy exploring!',
            createdAt: Date.now(),
            modifiedAt: Date.now(),
          },
        ],
      },
      {
        id: 'pictures',
        name: 'Pictures',
        type: 'folder',
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        children: [],
      },
      {
        id: 'music',
        name: 'Music',
        type: 'folder',
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        children: [],
      },
      {
        id: 'downloads',
        name: 'Downloads',
        type: 'folder',
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        children: [],
      },
    ],
  },
];

const wallpapers = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
];

export function OSProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [fileSystem] = useState<FileSystemItem[]>(defaultFileSystem);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [powerState, setPowerState] = useState<PowerState>('booting');

  useEffect(() => {
    // Initial boot sequence
    const timer = setTimeout(() => setPowerState('running'), 1500);
    return () => clearTimeout(timer);
  }, []);

  const generateWindowId = () => `window-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const openWindow = useCallback((appId: string) => {
    const app = defaultApps.find(a => a.id === appId);
    if (!app) return;

    const existingWindow = windows.find(w => w.appId === appId && !w.isMinimized);
    if (existingWindow) {
      focusWindow(existingWindow.id);
      return;
    }

    const offset = windows.length * 30;
    const newWindow: WindowState = {
      id: generateWindowId(),
      appId: app.id,
      title: app.name,
      icon: app.icon,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: windows.length + 1,
      position: { x: 100 + offset, y: 50 + offset },
      size: { ...app.defaultSize },
    };

    setWindows(prev => [...prev, newWindow]);
    setActiveWindowId(newWindow.id);
    setIsStartMenuOpen(false);
  }, [windows]);

  const closeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
    setActiveWindowId(prev => prev === windowId ? null : prev);
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
    setActiveWindowId(prev => prev === windowId ? null : prev);
  }, []);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }, []);

  const focusWindow = useCallback((windowId: string) => {
    const maxZIndex = Math.max(...windows.map(w => w.zIndex), 0);
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, isMinimized: false, zIndex: maxZIndex + 1 }
        : w
    ));
    setActiveWindowId(windowId);
  }, [windows]);

  const updateWindowPosition = useCallback((windowId: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, position } : w
    ));
  }, []);

  const updateWindowSize = useCallback((windowId: string, size: { width: number; height: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, size } : w
    ));
  }, []);

  const toggleStartMenu = useCallback(() => {
    setIsStartMenuOpen(prev => !prev);
  }, []);

  const closeStartMenu = useCallback(() => {
    setIsStartMenuOpen(false);
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notification-${Date.now()}`,
      timestamp: Date.now(),
    };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const setWallpaper = useCallback((url: string) => {
    const index = wallpapers.indexOf(url);
    if (index !== -1) {
      setWallpaperIndex(index);
    }
  }, []);

  const powerOn = useCallback(() => {
    setPowerState('booting');
    setTimeout(() => setPowerState('running'), 1500);
  }, []);

  const shutdown = useCallback(() => {
    // Close all windows first
    setWindows([]);
    setActiveWindowId(null);
    setIsStartMenuOpen(false);
    // Show shutting down state
    setPowerState('shutting-down');
    // After animation, stay in shut-down state
    setTimeout(() => {
      setPowerState('shut-down');
    }, 1500);
  }, []);

  const restart = useCallback(() => {
    // Close all windows
    setWindows([]);
    setActiveWindowId(null);
    setIsStartMenuOpen(false);
    // Show restarting state
    setPowerState('restarting');
    // Boot back up after animation
    setTimeout(() => {
      setPowerState('running');
    }, 1500);
  }, []);

  const value: OSContextType = {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
    apps: defaultApps,
    isStartMenuOpen,
    toggleStartMenu,
    closeStartMenu,
    notifications,
    addNotification,
    removeNotification,
    fileSystem,
    themeMode,
    setThemeMode,
    wallpaper: wallpapers[wallpaperIndex],
    setWallpaper,
    powerState,
    powerOn,
    shutdown,
    restart,
  };

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
}

export function useOS() {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error('useOS must be used within an OSProvider');
  }
  return context;
}

export { wallpapers };
