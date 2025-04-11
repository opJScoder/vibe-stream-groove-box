
// Sample music data for the Spotify clone

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  trackCount: number;
};

export const recentPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Chill Vibes',
    description: 'Relax and unwind with these smooth tracks',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop',
    trackCount: 24,
  },
  {
    id: '2',
    title: 'Workout Mix',
    description: 'High energy tracks to fuel your workout',
    coverUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop',
    trackCount: 18,
  },
  {
    id: '3',
    title: 'Focus Flow',
    description: 'Ambient sounds to help you concentrate',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop',
    trackCount: 32,
  },
  {
    id: '4',
    title: 'Throwback Hits',
    description: 'Classic songs from the past decades',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2670&auto=format&fit=crop',
    trackCount: 45,
  },
  {
    id: '5',
    title: 'Indie Discoveries',
    description: 'Undiscovered gems from indie artists',
    coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2670&auto=format&fit=crop',
    trackCount: 27,
  },
  {
    id: '6',
    title: 'Evening Jazz',
    description: 'Smooth jazz for your evening relaxation',
    coverUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2670&auto=format&fit=crop',
    trackCount: 20,
  }
];

export const popularTracks: Track[] = [
  {
    id: '1',
    title: 'Sunflower',
    artist: 'Post Malone, Swae Lee',
    album: 'Spider-Man: Into the Spider-Verse',
    duration: '2:38',
    coverUrl: 'https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    coverUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Don\'t Start Now',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:03',
    coverUrl: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2626&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
    coverUrl: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&w=2577&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Dance Monkey',
    artist: 'Tones and I',
    album: 'The Kids Are Coming',
    duration: '3:29',
    coverUrl: 'https://images.unsplash.com/photo-1527150122806-f682d2fd8b09?q=80&w=2670&auto=format&fit=crop',
  }
];

export const userPlaylists: Playlist[] = [
  {
    id: '101',
    title: 'My Playlist #1',
    description: 'A collection of my favorite songs',
    coverUrl: 'https://images.unsplash.com/photo-1463725876303-ff0c0dd15b34?q=80&w=2574&auto=format&fit=crop',
    trackCount: 12,
  },
  {
    id: '102',
    title: 'Road Trip Tunes',
    description: 'Perfect soundtrack for long drives',
    coverUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop',
    trackCount: 28,
  },
  {
    id: '103',
    title: 'Morning Coffee',
    description: 'Gentle tunes to start your day',
    coverUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop',
    trackCount: 15,
  }
];

export const genres = [
  'Pop', 'Rock', 'Hip-Hop', 'R&B', 'Country', 
  'Electronic', 'Jazz', 'Classical', 'Reggae', 'Folk'
];
