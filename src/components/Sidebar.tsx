
import { useState } from "react";
import { Home, Search, Library, Plus, Heart, Download } from "lucide-react";
import { userPlaylists } from "@/lib/data";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("home");

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col h-screen min-w-[240px] bg-black text-white">
      <div className="p-6">
        <div className="text-2xl font-bold mb-8 text-white">Vibe Stream</div>

        <nav className="mb-6">
          <ul className="space-y-2">
            {[
              { id: "home", label: "Home", icon: Home },
              { id: "search", label: "Search", icon: Search },
              { id: "library", label: "Your Library", icon: Library },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "flex items-center w-full py-2 px-4 rounded-md transition-colors",
                    activeItem === item.id
                      ? "text-white bg-spotify-highlight"
                      : "text-spotify-subdued hover:text-white"
                  )}
                >
                  <item.icon className="w-6 h-6 mr-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          <div className="space-y-2">
            <button className="flex items-center w-full py-2 px-4 rounded-md text-spotify-subdued hover:text-white transition-colors">
              <div className="w-6 h-6 flex items-center justify-center bg-spotify-subdued text-black rounded-sm mr-4">
                <Plus className="w-4 h-4" />
              </div>
              <span className="font-medium">Create Playlist</span>
            </button>

            <button className="flex items-center w-full py-2 px-4 rounded-md text-spotify-subdued hover:text-white transition-colors">
              <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-600 to-spotify-subdued rounded-sm mr-4">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-medium">Liked Songs</span>
            </button>
          </div>

          <div className="border-t border-spotify-highlight pt-6">
            <div className="max-h-[240px] overflow-y-auto scrollbar-hide">
              <ul className="space-y-2">
                {userPlaylists.map((playlist) => (
                  <li key={playlist.id}>
                    <button className="w-full text-left py-1 px-4 rounded-md text-spotify-subdued hover:text-white transition-colors truncate">
                      {playlist.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <button className="flex items-center mb-6 text-spotify-subdued hover:text-white">
          <Download className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Install App</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
