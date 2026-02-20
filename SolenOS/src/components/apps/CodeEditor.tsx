import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  File, 
  Folder, 
  ChevronRight, 
  Search, 
  GitBranch,
  Settings,
  Menu,
  X,
} from 'lucide-react';

const initialCode = `// Welcome to SolenOS Code Editor
// Start coding your amazing projects here!

function greet(name: string): string {
  return \`Hello, \${name}! Welcome to SolenOS!\`;
}

const message = greet('Developer');
console.log(message);

// Features:
// - Syntax highlighting (simulated)
// - File explorer
// - Multiple tabs
// - Git integration (UI)

class SolenOS {
  private name: string;
  private version: string;

  constructor() {
    this.name = 'SolenOS';
    this.version = '1.0.0';
  }

  boot(): void {
    console.log(\`\${this.name} v\${this.version} is booting...\`);
  }
}

const os = new SolenOS();
os.boot();
`;

const fileTree = [
  {
    name: 'src',
    type: 'folder',
    children: [
      { name: 'index.ts', type: 'file' },
      { name: 'app.ts', type: 'file' },
      { name: 'utils.ts', type: 'file' },
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Button.tsx', type: 'file' },
          { name: 'Input.tsx', type: 'file' },
        ],
      },
    ],
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file' },
      { name: 'favicon.ico', type: 'file' },
    ],
  },
  { name: 'package.json', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
  { name: 'README.md', type: 'file' },
];

export default function CodeEditor() {
  const [activeFile, setActiveFile] = useState('index.ts');
  const [code, setCode] = useState(initialCode);
  const [expandedFolders, setExpandedFolders] = useState(['src']);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  return (
    <div className="code-editor">
      {/* Activity Bar */}
      <div className="activity-bar">
        <motion.button
          className={`activity-btn ${sidebarOpen ? 'active' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <File size={22} />
        </motion.button>
        <motion.button
          className="activity-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search size={22} />
        </motion.button>
        <motion.button
          className="activity-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GitBranch size={22} />
        </motion.button>
        <div className="activity-spacer" />
        <motion.button
          className="activity-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings size={22} />
        </motion.button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <motion.div
          className="sidebar"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 240, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
        >
          <div className="sidebar-header">
            <span>Explorer</span>
            <motion.button
              className="sidebar-action"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={16} />
            </motion.button>
          </div>
          <div className="file-tree">
            <FileTreeNode
              items={fileTree}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              depth={0}
            />
          </div>
        </motion.div>
      )}

      {/* Main Editor */}
      <div className="editor-container">
        {/* Tabs */}
        <div className="tabs">
          <div className="tab active">
            <File size={14} />
            <span>{activeFile}</span>
            <motion.button
              className="tab-close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={12} />
            </motion.button>
          </div>
          <div className="tab">
            <File size={14} />
            <span>app.ts</span>
            <motion.button
              className="tab-close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={12} />
            </motion.button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>src</span>
          <ChevronRight size={14} />
          <span>{activeFile}</span>
        </div>

        {/* Code Area */}
        <div className="code-area">
          <div className="line-numbers">
            {code.split('\n').map((_, i) => (
              <div key={i} className="line-number">{i + 1}</div>
            ))}
          </div>
          <textarea
            className="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Status Bar */}
        <div className="editor-status-bar">
          <div className="status-left">
            <span>TypeScript</span>
            <span>UTF-8</span>
          </div>
          <div className="status-right">
            <span>Ln {code.split('\n').length}, Col 1</span>
            <span>Spaces: 2</span>
          </div>
        </div>
      </div>

      {/* Terminal Panel */}
      <div className="terminal-panel">
        <div className="terminal-tabs">
          <span className="terminal-tab active">Terminal</span>
          <span className="terminal-tab">Output</span>
          <span className="terminal-tab">Problems</span>
          <span className="terminal-tab">Debug Console</span>
        </div>
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="prompt">user@solenos:~/project$</span>
            <span>npm run dev</span>
          </div>
          <div className="terminal-output">
            <span style={{ color: '#22c55e' }}>✓</span> Ready in 234ms
          </div>
          <div className="terminal-output">
            <span style={{ color: '#6366f1' }}>➜</span> Local: http://localhost:5173/
          </div>
          <div className="terminal-cursor-line">
            <span className="prompt">user@solenos:~/project$</span>
            <motion.span
              className="terminal-cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .code-editor {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #1e1e1e;
          overflow: hidden;
        }

        .activity-bar {
          width: 48px;
          background: #333333;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0;
        }

        .activity-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: #858585;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }

        .activity-btn:hover {
          color: #ffffff;
        }

        .activity-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .activity-btn.active::before {
          content: '';
          position: absolute;
          left: 0;
          width: 2px;
          height: 20px;
          background: #6366f1;
        }

        .activity-spacer {
          flex: 1;
        }

        .sidebar {
          background: #252526;
          border-right: 1px solid #333333;
          overflow: hidden;
          flex-shrink: 0;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #bbbbbb;
        }

        .sidebar-action {
          background: transparent;
          border: none;
          color: #858585;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: var(--radius-sm);
        }

        .sidebar-action:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .file-tree {
          padding: 8px 0;
        }

        .file-tree-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 16px;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 13px;
          color: #cccccc;
        }

        .file-tree-item:hover {
          background: #2a2d2e;
        }

        .file-tree-item.active {
          background: #37373d;
          color: #ffffff;
        }

        .file-tree-item.folder {
          font-weight: 500;
        }

        .file-tree-item .chevron {
          transition: transform var(--transition-fast);
        }

        .file-tree-item .chevron.expanded {
          transform: rotate(90deg);
        }

        .editor-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .tabs {
          display: flex;
          background: #252526;
          border-bottom: 1px solid #333333;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: transparent;
          border-right: 1px solid #333333;
          color: #969696;
          cursor: pointer;
          font-size: 13px;
          min-width: 120px;
        }

        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
        }

        .tab-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          color: inherit;
          cursor: pointer;
          opacity: 0;
          transition: all var(--transition-fast);
        }

        .tab:hover .tab-close {
          opacity: 1;
        }

        .tab-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          background: #1e1e1e;
          font-size: 12px;
          color: #858585;
          border-bottom: 1px solid #333333;
        }

        .code-area {
          flex: 1;
          display: flex;
          overflow: hidden;
          background: #1e1e1e;
        }

        .line-numbers {
          padding: 16px 12px;
          background: #1e1e1e;
          color: #858585;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          text-align: right;
          user-select: none;
        }

        .code-input {
          flex: 1;
          padding: 16px;
          background: transparent;
          border: none;
          outline: none;
          color: #d4d4d4;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          white-space: pre;
          overflow: auto;
        }

        .editor-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 16px;
          background: #6366f1;
          font-size: 12px;
          color: white;
        }

        .status-left,
        .status-right {
          display: flex;
          gap: 16px;
        }

        .terminal-panel {
          height: 200px;
          background: #1e1e1e;
          border-top: 1px solid #333333;
          display: flex;
          flex-direction: column;
        }

        .terminal-tabs {
          display: flex;
          gap: 4px;
          padding: 8px 16px 0;
          border-bottom: 1px solid #333333;
        }

        .terminal-tab {
          padding: 8px 12px;
          font-size: 12px;
          color: #858585;
          cursor: pointer;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: all var(--transition-fast);
        }

        .terminal-tab:hover {
          color: #ffffff;
        }

        .terminal-tab.active {
          color: #ffffff;
          background: #252526;
        }

        .terminal-content {
          flex: 1;
          padding: 12px 16px;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 13px;
          overflow-y: auto;
        }

        .terminal-line {
          color: #d4d4d4;
          margin-bottom: 4px;
        }

        .terminal-output {
          color: #858585;
          margin-bottom: 4px;
        }

        .terminal-cursor-line {
          display: flex;
          align-items: center;
        }

        .prompt {
          color: #22c55e;
          margin-right: 8px;
        }

        .terminal-cursor {
          width: 8px;
          height: 16px;
          background: #6366f1;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

function FileTreeNode({
  items,
  expandedFolders,
  toggleFolder,
  activeFile,
  setActiveFile,
  depth,
}: {
  items: any[];
  expandedFolders: string[];
  toggleFolder: (name: string) => void;
  activeFile: string;
  setActiveFile: (name: string) => void;
  depth: number;
}) {
  return (
    <>
      {items.map((item, index) => (
        <div key={`${item.name}-${index}`}>
          <motion.div
            className={`file-tree-item ${item.type} ${activeFile === item.name ? 'active' : ''}`}
            style={{ paddingLeft: `${16 + depth * 16}px` }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(item.name);
              } else {
                setActiveFile(item.name);
              }
            }}
          >
            {item.type === 'folder' && (
              <ChevronRight
                size={14}
                className={`chevron ${expandedFolders.includes(item.name) ? 'expanded' : ''}`}
              />
            )}
            {item.type === 'folder' ? (
              <Folder size={16} fill={expandedFolders.includes(item.name) ? '#6366f1' : 'none'} />
            ) : (
              <File size={16} />
            )}
            <span>{item.name}</span>
          </motion.div>
          {item.type === 'folder' && expandedFolders.includes(item.name) && item.children && (
            <FileTreeNode
              items={item.children}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              depth={depth + 1}
            />
          )}
        </div>
      ))}
    </>
  );
}
