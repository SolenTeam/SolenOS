export interface WindowState {
  id: string;
  appId: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface AppDefinition {
  id: string;
  name: string;
  icon: string;
  component: string;
  defaultSize: { width: number; height: number };
  minSize?: { width: number; height: number };
  resizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: number;
}

export interface FileSystemItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileSystemItem[];
  createdAt: number;
  modifiedAt: number;
}

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface OSTheme {
  name: string;
  primaryColor: string;
  backgroundColor: string;
  accentColor: string;
  isDark: boolean;
}
