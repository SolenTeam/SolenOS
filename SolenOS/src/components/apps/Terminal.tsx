import { Terminal as TerminalIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands: Record<string, (args: string[]) => string> = {
  help: () => `Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  echo     - Print a message
  date     - Show current date and time
  whoami   - Display current user
  ls       - List directory contents
  pwd      - Print working directory
  neofetch - Display system info
  theme    - Change theme (light/dark)
  reboot   - Reboot the system`,
  
  clear: () => '',
  
  echo: (args) => args.join(' '),
  
  date: () => new Date().toString(),
  
  whoami: () => 'user@solenos',
  
  ls: () => `Documents/  Pictures/  Music/  Downloads/  Welcome.txt`,
  
  pwd: () => '/home/user',
  
  neofetch: () => `
       ████████████       user@solenos
     ████████████████     ─────────────
    ██████░░░░████████    OS: SolenOS v1.0
   ██████░░░░░░████████   Kernel: Web 5.15
  ██████░░░░░░░░████████  Uptime: ${Math.floor(Math.random() * 24)} hours
  ██████░░░░░░░░████████  Shell: bash
  ██████░░░░░░░░████████  Resolution: ${window.innerWidth}x${window.innerHeight}
   ██████░░░░░░████████   Theme: Dark
    ██████████████████    Terminal: SolenOS Terminal
     ████████████████     
      ██████████████      `,
  
  theme: (args) => {
    if (args[0] === 'light') {
      document.documentElement.style.setProperty('--background-dark', '#f5f5f5');
      document.documentElement.style.setProperty('--background-light', '#ffffff');
      document.documentElement.style.setProperty('--background-card', '#e5e5e5');
      document.documentElement.style.setProperty('--text-primary', '#171717');
      document.documentElement.style.setProperty('--text-secondary', '#525252');
      return 'Theme changed to light';
    } else if (args[0] === 'dark') {
      document.documentElement.style.setProperty('--background-dark', '#0f0f0f');
      document.documentElement.style.setProperty('--background-light', '#1a1a1a');
      document.documentElement.style.setProperty('--background-card', '#252525');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#a1a1aa');
      return 'Theme changed to dark';
    }
    return 'Usage: theme [light|dark]';
  },
  
  reboot: () => {
    location.reload();
    return 'Rebooting...';
  },
};

export default function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: 'neofetch', output: commands.neofetch([]) },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    
    if (!trimmedInput) {
      setInput('');
      return;
    }

    const [cmd, ...args] = trimmedInput.split(' ');
    const command = cmd.toLowerCase();
    
    let output = '';
    if (commands[command]) {
      output = commands[command](args);
    } else if (command !== 'clear') {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    if (command === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { command: trimmedInput, output }]);
      setCommandHistory(prev => [...prev, trimmedInput]);
      setHistoryIndex(-1);
    }
    
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-title-bar">
          <TerminalIcon size={16} />
          <span>Terminal</span>
        </div>
      </div>
      
      <div className="terminal-body" ref={outputRef}>
        {history.map((entry, index) => (
          <motion.div
            key={index}
            className="terminal-entry"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="terminal-command">
              <span className="prompt">user@solenos:~$</span> {entry.command}
            </div>
            {entry.output && (
              <pre className="terminal-output">{entry.output}</pre>
            )}
          </motion.div>
        ))}
        
        <form onSubmit={handleCommand} className="terminal-input-line">
          <span className="prompt">user@solenos:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </form>
      </div>

      <style>{`
        .terminal {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #0d0d0d;
        }

        .terminal-header {
          padding: 8px 12px;
          background: #1a1a1a;
          border-bottom: 1px solid #2a2a2a;
        }

        .terminal-title-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #a1a1aa;
        }

        .terminal-body {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
        }

        .terminal-entry {
          margin-bottom: 8px;
        }

        .terminal-command {
          color: #22c55e;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .prompt {
          color: #6366f1;
          font-weight: 600;
        }

        .terminal-output {
          color: #e4e4e4;
          white-space: pre-wrap;
          word-break: break-all;
          margin: 4px 0 8px 0;
        }

        .terminal-input-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #22c55e;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e4e4e4;
          font-family: inherit;
          font-size: inherit;
          caret-color: #22c55e;
        }

        .terminal-body::-webkit-scrollbar {
          width: 8px;
        }

        .terminal-body::-webkit-scrollbar-track {
          background: #0d0d0d;
        }

        .terminal-body::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 4px;
        }

        .terminal-body::-webkit-scrollbar-thumb:hover {
          background: #3a3a3a;
        }
      `}</style>
    </div>
  );
}
