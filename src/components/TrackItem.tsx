
import { useState } from "react";
import { Play, MoreHorizontal } from "lucide-react";
import { Track } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TrackItemProps {
  track: Track;
  index: number;
  isActive?: boolean;
  onPlay?: () => void;
}

const TrackItem = ({ track, index, isActive = false, onPlay }: TrackItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 rounded-md text-sm transition-colors",
        isActive ? "bg-spotify-highlight text-white" : "hover:bg-spotify-highlight text-spotify-subdued hover:text-white"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        {isHovered ? (
          <button onClick={onPlay} className="w-4 h-4 flex items-center justify-center">
            <Play className="w-3 h-3" fill={isActive ? "white" : undefined} />
          </button>
        ) : (
          <span className={cn("font-medium", isActive && "text-spotify-green")}>
            {index + 1}
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-3 overflow-hidden">
        <img
          src={track.coverUrl}
          alt={track.album}
          className="w-10 h-10 rounded object-cover"
        />
        <div className="truncate">
          <div className={cn("font-medium truncate", isActive && "text-spotify-green")}>
            {track.title}
          </div>
          <div className="text-xs text-spotify-subdued truncate">{track.artist}</div>
        </div>
      </div>
      
      <div className="truncate flex items-center text-spotify-subdued">
        {track.album}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-spotify-subdued">{track.duration}</span>
        <button className="text-spotify-subdued opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
