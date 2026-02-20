import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat } from 'lucide-react';

const songs = [
  { id: '1', title: 'Midnight Dreams', artist: 'Luna Wave', duration: '3:45', cover: '🌙' },
  { id: '2', title: 'Electric Sunrise', artist: 'Neon Pulse', duration: '4:12', cover: '⚡' },
  { id: '3', title: 'Ocean Breeze', artist: 'Coastal Vibes', duration: '3:28', cover: '🌊' },
  { id: '4', title: 'City Lights', artist: 'Urban Beat', duration: '3:56', cover: '🌃' },
  { id: '5', title: 'Mountain High', artist: 'Peak Sounds', duration: '4:33', cover: '⛰️' },
];

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [progress] = useState(35);
  const [volume] = useState(75);
  const [liked, setLiked] = useState(false);

  return (
    <div className="music">
      {/* Main Content */}
      <div className="music-content">
        <div className="music-header">
          <h2>Now Playing</h2>
          <div className="header-actions">
            <motion.button
              className={`heart-btn ${liked ? 'active' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLiked(!liked)}
            >
              <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            </motion.button>
          </div>
        </div>

        {/* Album Art */}
        <motion.div
          className="album-art"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', repeatType: isPlaying ? 'loop' : 'reverse' }}
        >
          <div className="album-art-inner">
            {currentSong.cover}
          </div>
        </motion.div>

        {/* Song Info */}
        <div className="song-info">
          <h3 className="song-title">{currentSong.title}</h3>
          <p className="song-artist">{currentSong.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="progress-thumb" />
            </motion.div>
          </div>
          <div className="progress-time">
            <span>1:18</span>
            <span>{currentSong.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <motion.button
            className="control-btn secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Shuffle size={18} />
          </motion.button>
          <motion.button
            className="control-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSong(songs[Math.max(0, songs.indexOf(currentSong) - 1)])}
          >
            <SkipBack size={24} fill="currentColor" />
          </motion.button>
          <motion.button
            className="control-btn play-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
          </motion.button>
          <motion.button
            className="control-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSong(songs[Math.min(songs.length - 1, songs.indexOf(currentSong) + 1)])}
          >
            <SkipForward size={24} fill="currentColor" />
          </motion.button>
          <motion.button
            className="control-btn secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Repeat size={18} />
          </motion.button>
        </div>

        {/* Volume */}
        <div className="volume-container">
          <Volume2 size={18} />
          <div className="volume-bar">
            <motion.div
              className="volume-fill"
              style={{ width: `${volume}%` }}
            >
              <div className="volume-thumb" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="playlist">
        <h3>Up Next</h3>
        <div className="playlist-items">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className={`playlist-item ${currentSong.id === song.id ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
              onClick={() => setCurrentSong(song)}
            >
              <div className="playlist-item-cover">{song.cover}</div>
              <div className="playlist-item-info">
                <div className="playlist-item-title">{song.title}</div>
                <div className="playlist-item-artist">{song.artist}</div>
              </div>
              <div className="playlist-item-duration">{song.duration}</div>
              {currentSong.id === song.id && isPlaying && (
                <div className="equalizer">
                  <motion.div
                    className="bar"
                    animate={{ height: [8, 20, 12, 24, 8] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="bar"
                    animate={{ height: [12, 8, 20, 10, 16] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                  <motion.div
                    className="bar"
                    animate={{ height: [16, 20, 10, 18, 12] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .music {
          width: 100%;
          height: 100%;
          display: flex;
          background: var(--background-dark);
          overflow: hidden;
        }

        .music-content {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          overflow-y: auto;
        }

        .playlist {
          width: 280px;
          background: var(--background-light);
          border-left: 1px solid var(--border-color);
          padding: 20px;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .music-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .music-header h2 {
          font-size: 18px;
          font-weight: 600;
        }

        .heart-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          border-radius: 50%;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .heart-btn:hover,
        .heart-btn.active {
          color: #ec4899;
          background: rgba(236, 72, 153, 0.1);
        }

        .album-art {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
        }

        .album-art-inner {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--background-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
        }

        .song-info {
          text-align: center;
        }

        .song-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .song-artist {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .progress-container {
          width: 100%;
          max-width: 400px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: var(--background-hover);
          border-radius: 3px;
          cursor: pointer;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 3px;
          position: relative;
        }

        .progress-thumb {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .progress-bar:hover .progress-thumb {
          opacity: 1;
        }

        .progress-time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: none;
          background: var(--background-card);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--background-hover);
          transform: scale(1.1);
        }

        .control-btn.secondary {
          width: 36px;
          height: 36px;
          color: var(--text-secondary);
        }

        .play-btn {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .play-btn:hover {
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 200px;
        }

        .volume-container svg {
          color: var(--text-secondary);
        }

        .volume-bar {
          flex: 1;
          height: 4px;
          background: var(--background-hover);
          border-radius: 2px;
          cursor: pointer;
        }

        .volume-fill {
          height: 100%;
          background: var(--text-secondary);
          border-radius: 2px;
          position: relative;
        }

        .volume-thumb {
          position: absolute;
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          opacity: 0;
        }

        .volume-bar:hover .volume-thumb {
          opacity: 1;
        }

        .playlist h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .playlist-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .playlist-item.active {
          background: rgba(99, 102, 241, 0.2);
        }

        .playlist-item-cover {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .playlist-item-info {
          flex: 1;
          min-width: 0;
        }

        .playlist-item-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .playlist-item-artist {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .playlist-item-duration {
          font-size: 12px;
          color: var(--text-muted);
        }

        .equalizer {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 24px;
          padding-left: 8px;
        }

        .equalizer .bar {
          width: 3px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
