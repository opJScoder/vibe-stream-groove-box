
import { useState } from "react";
import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PlaylistCard from "@/components/PlaylistCard";
import TrackItem from "@/components/TrackItem";
import MusicPlayer from "@/components/MusicPlayer";
import { recentPlaylists, popularTracks, Track } from "@/lib/data";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>();

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto pb-24 bg-gradient-to-b from-blue-900/30 to-spotify-base">
        {/* Header */}
        <header className="flex justify-between items-center p-4 sticky top-0 bg-transparent z-10 backdrop-blur-sm">
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40">
              <User className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="px-6 py-4">
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recently Played</h2>
              <button className="text-sm font-semibold text-spotify-subdued hover:text-white">
                Show all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {recentPlaylists.slice(0, 6).map((playlist) => (
                <PlaylistCard 
                  key={playlist.id} 
                  playlist={playlist} 
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Popular Tracks</h2>
              <button className="text-sm font-semibold text-spotify-subdued hover:text-white">
                Show all
              </button>
            </div>
            <div className="bg-spotify-elevated-base bg-opacity-40 rounded-md overflow-hidden">
              <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-spotify-highlight text-xs uppercase text-spotify-subdued font-semibold">
                <div>#</div>
                <div>Title</div>
                <div>Album</div>
                <div>Duration</div>
              </div>
              {popularTracks.map((track, index) => (
                <TrackItem 
                  key={track.id}
                  track={track}
                  index={index}
                  isActive={currentTrack?.id === track.id}
                  onPlay={() => handlePlayTrack(track)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <MusicPlayer currentTrack={currentTrack} />
    </div>
  );
};

export default Index;
