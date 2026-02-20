import { motion } from 'framer-motion';
import { 
  Folder, 
  FileText, 
  ChevronRight, 
  Home, 
  HardDrive, 
  Clock, 
  Star,
  Image,
  Music,
  Download,
  Search,
  Grid3X3,
  List,
  ArrowUp
} from 'lucide-react';
import { useState } from 'react';
import { useOS } from '../../context/OSContext';
import type { FileSystemItem } from '../../types';

export default function FileExplorer() {
  const { fileSystem } = useOS();
  const [currentPath, setCurrentPath] = useState<string[]>(['root']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const getCurrentFolder = (): FileSystemItem | null => {
    let current: FileSystemItem | undefined = fileSystem[0];
    for (let i = 1; i < currentPath.length; i++) {
      const folder: FileSystemItem | undefined = current?.children?.find(c => c.id === currentPath[i]);
      if (folder && folder.type === 'folder') {
        current = folder;
      } else {
        return null;
      }
    }
    return current || null;
  };

  const currentFolder = getCurrentFolder();
  const children = currentFolder?.children || [];

  const navigateTo = (folderId: string) => {
    const index = currentPath.indexOf(folderId);
    if (index !== -1) {
      setCurrentPath(currentPath.slice(0, index + 1));
    } else {
      setCurrentPath([...currentPath, folderId]);
    }
  };

  const navigateUp = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };

  const sidebarItems = [
    { icon: Home, label: 'Home', id: 'root' },
    { icon: Clock, label: 'Recent', id: 'recent' },
    { icon: Star, label: 'Favorites', id: 'favorites' },
    { icon: HardDrive, label: 'This PC', id: 'pc' },
  ];

  const quickAccessItems = [
    { icon: Image, label: 'Pictures', id: 'pictures' },
    { icon: Music, label: 'Music', id: 'music' },
    { icon: Download, label: 'Downloads', id: 'downloads' },
    { icon: FileText, label: 'Documents', id: 'documents' },
  ];

  return (
    <div className="file-explorer">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-title">Quick Access</div>
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              className={`sidebar-item ${currentPath[0] === item.id ? 'active' : ''}`}
              whileHover={{ x: 4 }}
              onClick={() => setCurrentPath([item.id])}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="sidebar-section">
          <div className="sidebar-title">Folders</div>
          {quickAccessItems.map((item) => (
            <motion.button
              key={item.id}
              className="sidebar-item"
              whileHover={{ x: 4 }}
              onClick={() => navigateTo(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Toolbar */}
        <div className="toolbar">
          <div className="toolbar-nav">
            <button className="nav-btn" onClick={navigateUp} disabled={currentPath.length <= 1}>
              <ArrowUp size={18} />
            </button>
          </div>
          
          <div className="toolbar-path">
            {currentPath.map((segment, index) => (
              <div key={segment} className="path-segment">
                {index > 0 && <ChevronRight size={16} />}
                <button onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </button>
              </div>
            ))}
          </div>

          <div className="toolbar-actions">
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* File Grid */}
        <div className={`file-view ${viewMode}`}>
          {children.length === 0 ? (
            <div className="empty-folder">
              <Folder size={64} strokeWidth={1} />
              <p>This folder is empty</p>
            </div>
          ) : (
            children.map((item, index) => (
              <motion.div
                key={item.id}
                className={`file-item ${item.type}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="file-icon">
                  {item.type === 'folder' ? (
                    <Folder size={40} fill="rgba(99, 102, 241, 0.2)" />
                  ) : (
                    <FileText size={40} />
                  )}
                </div>
                <div className="file-name">{item.name}</div>
                {viewMode === 'list' && (
                  <div className="file-meta">
                    <span>{item.type === 'file' ? 'File' : 'Folder'}</span>
                    <span>{new Date(item.modifiedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <span>{children.length} items</span>
        </div>
      </div>

      <style>{`
        .file-explorer {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .sidebar {
          width: 200px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          padding: 12px;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .sidebar-section {
          margin-bottom: 20px;
        }

        .sidebar-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 8px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          font-size: 14px;
        }

        .sidebar-item:hover {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .sidebar-item.active {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary-color);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .toolbar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--background-light);
          border-bottom: 1px solid var(--border-color);
        }

        .toolbar-nav {
          display: flex;
          gap: 4px;
        }

        .nav-btn {
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

        .nav-btn:hover:not(:disabled) {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .toolbar-path {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--background-card);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .path-segment {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
        }

        .path-segment button {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 14px;
          padding: 0 4px;
        }

        .path-segment button:hover {
          color: var(--primary-color);
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--background-card);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .search-box svg {
          color: var(--text-muted);
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 14px;
          width: 150px;
        }

        .view-btn {
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

        .view-btn:hover,
        .view-btn.active {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .file-view {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
        }

        .file-view.grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 16px;
        }

        .file-view.list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .file-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          border: 1px solid transparent;
        }

        .file-view.list .file-item {
          flex-direction: row;
          align-items: center;
          padding: 12px 16px;
        }

        .file-item:hover {
          background: var(--background-hover);
          border-color: var(--border-color);
        }

        .file-icon {
          color: var(--primary-color);
          margin-bottom: 8px;
        }

        .file-view.list .file-icon {
          margin-bottom: 0;
          margin-right: 12px;
        }

        .file-name {
          font-size: 13px;
          color: var(--text-primary);
          text-align: center;
          word-break: break-word;
        }

        .file-view.list .file-name {
          text-align: left;
          flex: 1;
        }

        .file-meta {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .empty-folder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          gap: 16px;
        }

        .status-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 16px;
          background: var(--background-light);
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
