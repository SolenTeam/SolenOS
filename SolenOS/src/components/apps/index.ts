import Terminal from './Terminal';
import FileExplorer from './FileExplorer';
import Settings from './Settings';
import Browser from './Browser';
import Calculator from './Calculator';
import Notes from './Notes';
import Music from './Music';
import CodeEditor from './CodeEditor';

export {
  Terminal,
  FileExplorer,
  Settings,
  Browser,
  Calculator,
  Notes,
  Music,
  CodeEditor,
};

export function getAppComponent(appId: string) {
  switch (appId) {
    case 'terminal':
      return Terminal;
    case 'file-explorer':
      return FileExplorer;
    case 'settings':
      return Settings;
    case 'browser':
      return Browser;
    case 'calculator':
      return Calculator;
    case 'notes':
      return Notes;
    case 'music':
      return Music;
    case 'vscode':
      return CodeEditor;
    default:
      return null;
  }
}
