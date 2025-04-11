
import { Playlist } from "@/lib/data";
import { Play } from "lucide-react";

interface PlaylistCardProps {
  playlist: Playlist;
  onClick?: () => void;
}

const PlaylistCard = ({ playlist, onClick }: PlaylistCardProps) => {
  return (
    <div 
      className="bg-spotify-elevated-base rounded-md p-4 hover:bg-spotify-highlight transition-all duration-200 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative mb-4">
        <img 
          src={playlist.coverUrl} 
          alt={playlist.title} 
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-spotify-green flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg">
          <Play className="w-5 h-5 text-black" fill="black" />
        </button>
      </div>
      <h3 className="font-bold text-white truncate">{playlist.title}</h3>
      <p className="text-spotify-subdued text-sm mt-1 line-clamp-2 h-10">
        {playlist.description}
      </p>
    </div>
  );
};

export default PlaylistCard;
