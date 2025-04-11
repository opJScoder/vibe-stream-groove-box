
import { useState } from "react";
import { 
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, 
  Volume2, Maximize2, ListMusic 
} from "lucide-react";
import { Track } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MusicPlayerProps {
  currentTrack?: Track;
}

const MusicPlayer = ({ currentTrack }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(30);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-elevated-base border-t border-spotify-highlight px-4 py-3 grid grid-cols-3 items-center">
      {/* Track info */}
      <div className="flex items-center gap-3">
        {currentTrack ? (
          <>
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className="h-14 w-14 rounded object-cover"
            />
            <div>
              <div className="font-medium text-sm text-white">{currentTrack.title}</div>
              <div className="text-xs text-spotify-subdued">{currentTrack.artist}</div>
            </div>
          </>
        ) : (
          <div className="text-spotify-subdued text-sm">Select a track to play</div>
        )}
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button className="text-spotify-subdued hover:text-white transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-spotify-subdued hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-black" fill="black" />
            ) : (
              <Play className="w-4 h-4 text-black ml-0.5" fill="black" />
            )}
          </button>
          <button className="text-spotify-subdued hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-spotify-subdued hover:text-white transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs text-spotify-subdued">1:12</span>
          <div className="relative flex-1 h-1 bg-spotify-highlight rounded-full">
            <div 
              className="absolute h-full bg-spotify-subdued rounded-full hover:bg-spotify-green"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute h-3 w-3 bg-white rounded-full opacity-0 hover:opacity-100 -translate-y-1/3"
              style={{ left: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-spotify-subdued">3:45</span>
        </div>
      </div>

      {/* Extra controls */}
      <div className="flex items-center justify-end gap-4">
        <button className="text-spotify-subdued hover:text-white transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 w-32">
          <Volume2 className="w-4 h-4 text-spotify-subdued" />
          <div className="relative flex-1 h-1 bg-spotify-highlight rounded-full">
            <div 
              className="absolute h-full bg-spotify-subdued rounded-full hover:bg-spotify-green"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
        <button className="text-spotify-subdued hover:text-white transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
