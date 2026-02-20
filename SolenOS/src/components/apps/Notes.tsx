import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Trash2, Edit2, Check } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', title: 'Welcome!', content: 'Welcome to SolenOS Notes!\n\nStart creating your notes here.', createdAt: Date.now() },
  ]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setIsEditing(true);
  };

  const deleteNote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
    if (selectedNote?.id === id) {
      setSelectedNote(newNotes[0] || null);
    }
  };

  const saveNote = () => {
    if (!selectedNote) return;
    const updatedNotes = notes.map(n => 
      n.id === selectedNote.id 
        ? { ...n, title: editTitle, content: editContent }
        : n
    );
    setNotes(updatedNotes);
    setSelectedNote({ ...selectedNote, title: editTitle, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="notes">
      {/* Sidebar */}
      <div className="notes-sidebar">
        <div className="notes-header">
          <h2>Notes</h2>
          <motion.button
            className="new-note-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={createNote}
          >
            <Plus size={20} />
          </motion.button>
        </div>

        <div className="notes-list">
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              className={`note-item ${selectedNote?.id === note.id ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              onClick={() => {
                setSelectedNote(note);
                setEditTitle(note.title);
                setEditContent(note.content);
                setIsEditing(false);
              }}
            >
              <div className="note-item-content">
                <div className="note-item-title">{note.title}</div>
                <div className="note-item-preview">
                  {note.content.slice(0, 50) || 'No content'}
                </div>
                <div className="note-item-date">
                  {new Date(note.createdAt).toLocaleDateString()}
                </div>
              </div>
              <motion.button
                className="delete-note-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => deleteNote(note.id, e)}
              >
                <Trash2 size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="notes-editor">
        {selectedNote ? (
          <>
            <div className="editor-header">
              {isEditing ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="editor-title-input"
                  placeholder="Note title"
                />
              ) : (
                <h3 className="editor-title">{selectedNote.title}</h3>
              )}
              <div className="editor-actions">
                {isEditing ? (
                  <motion.button
                    className="save-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={saveNote}
                  >
                    <Check size={18} />
                  </motion.button>
                ) : (
                  <motion.button
                    className="edit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setEditTitle(selectedNote.title);
                      setEditContent(selectedNote.content);
                      setIsEditing(true);
                    }}
                  >
                    <Edit2 size={18} />
                  </motion.button>
                )}
              </div>
            </div>

            <div className="editor-content">
              {isEditing ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="editor-textarea"
                  placeholder="Start writing..."
                />
              ) : (
                <div className="editor-text">{selectedNote.content}</div>
              )}
            </div>
          </>
        ) : (
          <div className="no-note-selected">
            <Edit2 size={64} strokeWidth={1} />
            <p>Select a note or create a new one</p>
          </div>
        )}
      </div>

      <style>{`
        .notes {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .notes-sidebar {
          width: 280px;
          height: 100%;
          background: var(--background-light);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .notes-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .notes-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .notes-header h2 {
          font-size: 20px;
          font-weight: 600;
        }

        .new-note-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: var(--primary-color);
          border-radius: var(--radius-md);
          color: white;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .new-note-btn:hover {
          background: var(--primary-hover);
        }

        .notes-list {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .note-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 14px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }

        .note-item:hover {
          background: var(--background-hover);
        }

        .note-item.active {
          background: rgba(99, 102, 241, 0.2);
        }

        .note-item-content {
          flex: 1;
          min-width: 0;
        }

        .note-item-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .note-item-preview {
          font-size: 12px;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 6px;
        }

        .note-item-date {
          font-size: 11px;
          color: var(--text-muted);
        }

        .delete-note-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          opacity: 0;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .note-item:hover .delete-note-btn {
          opacity: 1;
        }

        .delete-note-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .editor-title {
          font-size: 20px;
          font-weight: 600;
        }

        .editor-title-input {
          font-size: 20px;
          font-weight: 600;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          width: 300px;
        }

        .editor-actions {
          display: flex;
          gap: 8px;
        }

        .edit-btn,
        .save-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: var(--background-hover);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .save-btn {
          background: var(--success-color);
          color: white;
        }

        .editor-content {
          flex: 1;
          padding: 24px;
          overflow: hidden;
        }

        .editor-textarea {
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 15px;
          line-height: 1.6;
          resize: none;
        }

        .editor-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-primary);
          white-space: pre-wrap;
        }

        .no-note-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          gap: 16px;
        }
      `}</style>
    </div>
  );
}
