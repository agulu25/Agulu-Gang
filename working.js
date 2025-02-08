document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOptions = document.querySelector(".menu-options");
    const songListContainer = document.getElementById("variousTracks");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    const musicData = [
        {
            title: "zipepese",
            artist: "king bobz,chowinila and yatrender",
            album: "none",
            release: "2025-01-09",
            duration: "2:33",
            producer: "L B Music (by Richie)",
            genre: "Rap",
            file: "zipepese by king bobz,chowinila and yatrender.mp3",
            artwork: "zipepese.jpg",
            trending:"yes"
        },
        {
            title: "umvere",
            artist: "Agulu",
            album: "none",
            release: "2024-12-18",
            duration: "3:57",
            producer: "Arise",
            genre: "Rap",
            file: "umvere agulu by Agulu Gang.mp3",
            artwork: "agulu.jpg",
            trending:"yes"
        },
            {
            title: "anzanga",
            artist: "king bobz ft yatrender",
            album: "none",
            release: "2024-11-08",
            duration: "2:18",
            producer: "Mtunda Hill",
            genre: "Hip-hop",
            file: "anzanga by nsikizi family.mp3",
            artwork: "anzanga.jpg",
            trending:"no"
        },
        {
            title: "Ana a town",
            artist: "generous & various artist",
            album: "none",
            release: "2024-10-28",
            duration: "3:39",
            producer: "Agabon Records",
            genre: "Hip-hop",
            file: "Ana a town by generous and various artist.mp3",
            artwork: "none.jpg",
            trending:"yes"
        },
            {
            title: "slime",
            artist: "Toxic,Prom LL and K sharta",
            album: "none",
            release: "2024-09-09",
            duration: "4:53",
            producer: "Dom records",
            genre: "hip-hop",
            file: "slime by Toxic,Prom LL and K sharta.mp3",
            artwork: "dom.jpg",
            trending:"yes"
        },
        {
            title: "Tisasa",
            artist: "CBA",
            album: "none",
            release: "2024-06-18",
            duration: "2:56",
            producer: "Agabon records",
            genre: "ma piano",
            file: "Tisasa by Prom LL.mp3",
            artwork: "none.jpg",
            trending:"no"
        },
    ];

    function displaySongs(songs) {
        if (!songListContainer) return;
        songListContainer.innerHTML = '';

        songs.forEach(song => {
            const songElement = document.createElement("li");
            songListContainer.style.fontSize = "24px";
            const songLink = document.createElement("a");
            songLink.href = `song-details.html?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}&album=${encodeURIComponent(song.album)}&release=${encodeURIComponent(song.release)}&duration=${encodeURIComponent(song.duration)}&producer=${encodeURIComponent(song.producer)}&genre=${encodeURIComponent(song.genre)}&file=${encodeURIComponent(song.file)}&artwork=${encodeURIComponent(song.artwork)}`;
            songLink.textContent = `${song.title} by ${song.artist}`;
            songLink.style.textDecoration = "none";
            songElement.appendChild(songLink);
            songListContainer.appendChild(songElement);
        });
    }
  
  

function search() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    if (!searchInput || !searchButton) {
        console.error("Search elements not found!");
        return;
    }

    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form action

        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Store search term in localStorage
            localStorage.setItem("searchQuery", searchTerm);

            // Redirect to search-results.html
            window.location.href = "search-results.html";
        }
    });
}

// Call search function globally
search();
    
    
    function displayNewMusic() {
        if (!songListContainer) return;
        songListContainer.innerHTML = '';

        const optionsContainer = document.querySelector(".options-container");
        if (optionsContainer) {
            // Instead of overwriting, keep buttons intact
            optionsContainer.innerHTML = `
                <h2 style='font-size: 36px; text-align: center;'>NEW MUSIC</h2>
            `;
        }

        if (menuOptions) menuOptions.style.display = "none";

        const newMusicSongs = musicData.filter(song => song.release >="2025-01-01");
        if (newMusicSongs.length === 0) {
            songListContainer.innerHTML = "<p style='text-align: center;'>No new music available.</p>";
            return;
        }

        const songList = document.createElement("ul");
        newMusicSongs.forEach(song => {
            const songItem = document.createElement("li");
            const songLink = document.createElement("a");
            songLink.href = `song-details.html?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}&album=${encodeURIComponent(song.album)}&release=${encodeURIComponent(song.release)}&duration=${encodeURIComponent(song.duration)}&producer=${encodeURIComponent(song.producer)}&genre=${encodeURIComponent(song.genre)}&file=${encodeURIComponent(song.file)}&artwork=${encodeURIComponent(song.artwork)}`;
            songLink.textContent = `${song.title} by ${song.artist}`;
            songLink.style.textDecoration = "none";
            songItem.appendChild(songLink);
            songList.appendChild(songItem);
        });

        songListContainer.appendChild(songList);
    }

function displayTrendingMusic() {
  if (!songListContainer) return;
  songListContainer.innerHTML = '';
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <h2 style='font-size: 36px; text-align: center;'>TRENDING MUSIC</h2>
    `;
  }
  if (menuOptions) menuOptions.style.display = "none";
  const trendingSongs = musicData.filter(song => song.trending === "yes");
  if (trendingSongs.length === 0) {
    songListContainer.innerHTML = "<p style='text-align: center;'>No trending music available.</p>";
    return;
  }
  const songList = document.createElement("ul");
  trendingSongs.forEach(song => {
    const songItem = document.createElement("li");
    const songLink = document.createElement("a");
    songLink.href = `song-details.html?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}&album=${encodeURIComponent(song.album)}&release=${encodeURIComponent(song.release)}&duration=${encodeURIComponent(song.duration)}&producer=${encodeURIComponent(song.producer)}&genre=${encodeURIComponent(song.genre)}&file=${encodeURIComponent(song.file)}&artwork=${encodeURIComponent(song.artwork)}`;
    songLink.textContent = `${song.title} by ${song.artist}`;
    songLink.style.textDecoration = "none";
    songItem.appendChild(songLink);
    songList.appendChild(songItem);
  });
  songListContainer.appendChild(songList);
}



function displayAlbums() {
  const albumListContainer = document.getElementById("variousTracks");
  albumListContainer.innerHTML = '';
  
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <h2 style='font-size: 36px; text-align: center;'>ALBUM</h2>
    `;
  }
  const albums = musicData.filter(song => song.album !== "none");
  const uniqueAlbums = [...new Set(albums.map(song => song.album))];
  if (uniqueAlbums.length === 0) {
    albumListContainer.innerHTML = "<p style='text-align: center;'>No albums available.</p>";
    return;
  }
  const albumList = document.createElement("ul");
  uniqueAlbums.forEach(album => {
    const albumItem = document.createElement("li");
    const albumLink = document.createElement("a");
    albumLink.href = `album-songs.html?album=${encodeURIComponent(album)}`;
    albumLink.textContent = album;
    albumLink.style.textDecoration = "none";
    albumItem.appendChild(albumLink);
    albumList.appendChild(albumItem);
  });
  albumListContainer.appendChild(albumList);
}

function displayAlbumTracks(albumName) {
  if (!songListContainer) return;
  songListContainer.innerHTML = '';
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <h2 style='font-size: 36px;text-transform: uppercase; text-align: center;'>${albumName}</h2>
    `;
  }
  if (menuOptions) menuOptions.style.display = "none";
  const albumTracks = musicData.filter(song => song.album === albumName);
  if (albumTracks.length === 0) {
    songListContainer.innerHTML = "<p style='text-align: center;'>No tracks available for this album.</p>";
    return;
  }
  const songList = document.createElement("ul");
  albumTracks.forEach(track => {
    const songItem = document.createElement("li");
    const songLink = document.createElement("a");
    songLink.href = `song-details.html?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}&album=${encodeURIComponent(track.album)}&release=${encodeURIComponent(track.release)}&duration=${encodeURIComponent(track.duration)}&producer=${encodeURIComponent(track.producer)}&genre=${encodeURIComponent(track.genre)}&file=${encodeURIComponent(track.file)}&artwork=${encodeURIComponent(track.artwork)}`;
    songLink.textContent = `${track.title} by ${track.artist}`;
    songLink.style.textDecoration = "none";
    songItem.appendChild(songLink);
    songList.appendChild(songItem);
  });
  songListContainer.appendChild(songList);
}


 
// Get the album name from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const albumName = urlParams.get('album');



function displayArtists() {
  const artistListContainer = document.getElementById("variousTracks");
  artistListContainer.innerHTML = '';
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <h2 style='font-size: 36px; text-align: center;'>ARTIST</h2>
    `;
  }
  const artists = musicData.filter(song => song.artist !== "");
  const uniqueArtists = [...new Set(artists.map(song => song.artist))];
  if (uniqueArtists.length === 0) {
    artistListContainer.innerHTML = "<p style='text-align: center;'>No artist available.</p>";
    return;
  }
  const artistList = document.createElement("ul");
  uniqueArtists.forEach(artist => {
    const artistItem = document.createElement("li");
    const artistLink = document.createElement("a");
    artistLink.href = `artist-songs.html?artist=${encodeURIComponent(artist)}`;
    artistLink.textContent = artist;
    artistLink.style.textDecoration = "none";
    artistItem.appendChild(artistLink);
    artistList.appendChild(artistItem);
  });
  artistListContainer.appendChild(artistList);
}


function displayArtistsTracks(artistName) {
  const artistTrackContainer = document.getElementById("variousTracks");
  artistTrackContainer.innerHTML = '';
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <h2 style='font-size: 36px;text-transform: uppercase; text-align: center;'>${artistName}</h2>
    `;
  }
  if (menuOptions) menuOptions.style.display = "none";
  const artistTracks = musicData.filter(song => song.artist === artistName);
  if (artistTracks.length === 0) {
    artistTrackContainer.innerHTML = "<p style='text-align: center;'>No tracks available for this artist.</p>";
    return;
  }
  const songList = document.createElement("ul");
  artistTracks.forEach(track => {
    const songItem = document.createElement("li");
    const songLink = document.createElement("a");
    songLink.href = `song-details.html?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}&album=${encodeURIComponent(track.album)}&release=${encodeURIComponent(track.release)}&duration=${encodeURIComponent(track.duration)}&producer=${encodeURIComponent(track.producer)}&genre=${encodeURIComponent(track.genre)}&file=${encodeURIComponent(track.file)}&artwork=${encodeURIComponent(track.artwork)}`;
    songLink.textContent = `${track.title} by ${track.artist}`;
    songLink.style.textDecoration = "none";
    songItem.appendChild(songLink);
    songList.appendChild(songItem);
  });
  artistTrackContainer.appendChild(songList);
}




   // Display all songs initially
    displaySongs(musicData);
    
    // Handle menu toggle
    if (menuToggle && menuOptions) {
        menuToggle.addEventListener("click", function () {
            menuOptions.style.display = menuOptions.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !menuOptions.contains(event.target)) {
                menuOptions.style.display = "none";
            }
        });
    }
    
 
    // Check if current page is new-music.html and display new music
    if (window.location.href.includes("new-music.html")) {
        displayNewMusic();
    }
    if (window.location.href.includes("trending.html")) {
  displayTrendingMusic();
  }
  
  
if (window.location.href.includes("album.html")) {
  displayAlbums();
 }
 if (window.location.href.includes("album-songs.html")) {
 displayAlbumTracks(albumName);
 }
 if (window.location.href.includes("artist.html")) {
  displayArtists();
 }
 if (window.location.href.includes("artist-songs.html")) {
  const artistUrlParams = new URLSearchParams(window.location.search);
  const artistName = artistUrlParams.get('artist');
  console.log(artistName);
  displayArtistsTracks(artistName);
}
});
