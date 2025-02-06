import musicCatalog from "./playlist.js";

const test = musicCatalog();

test.createPlaylist('Rock mix');
test.createPlaylist('Best of Ennio Morricone');
test.createPlaylist('Best of Hans Zimmer');
console.log(test.getAllPlaylists()); 
/* output:
[
    {name: 'Rock mix', songs: []},
    {name: 'Best of Ennio Morricone', songs: []},
    {name: 'Best of Hans Zimmer', songs: []}
]
*/

test.removePlaylist('Best of Ennio Morricone');
console.log(test.getAllPlaylists());
/* output:
[
    {name: 'Rock mix', songs: []},
    {name: 'Best of Hans Zimmer', songs: []}
]
*/

test.addSongToPlaylist('Rock mix', { title: 'In the End', artist: 'Linkin Park', genre: 'Rock', duration: 216 });
test.addSongToPlaylist('Rock mix', { title: 'The Hell Song', artist: 'Sum 41', genre: 'Rock', duration: 201 });
try {
    test.addSongToPlaylist('Pop mix', { title: 'Thriller', artist: 'Michael Jackson', genre: 'pop', duration: 311 });
} catch (error) {
    console.log(error);
}
console.log(test.getAllPlaylists());
/* output: 
Error: Playlist 'Pop mix' not found!
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'In the End', artist: 'Linkin Park', genre: 'rock', duration: 216, favorite: false},
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: false}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
]
*/

test.removeSongFromPlaylist('Rock mix', 'In the End');
try {
    test.removeSongFromPlaylist('Indestructible', 'Rock mix');
} catch (error) {
    console.log(error); 
}
console.log(test.getAllPlaylists());
/* output: 
Error: Song 'Indestructible' not found in 'Rock mix' playlist!
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: false}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
*/

test.favoriteSong('Rock mix', 'The Hell Song');
console.log(test.getAllPlaylists());
/* output: 
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: true}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
*/

test.addSongToPlaylist('Rock mix', { title: 'In the End', artist: 'Linkin Park', genre: 'Rock', duration: 216 });
test.addSongToPlaylist('Rock mix', { title: 'Heavy is the Crown', artist: 'Linkin Park', genre: 'Rock', duration: 167});
test.addSongToPlaylist('Rock mix', { title: 'Indestructible', artist: 'Disturbed', genre: 'Heavy Metal', duration: 286 });

test.sortSongs('Rock mix', 'title');
console.log(test.getAllPlaylists());
/* output: 
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'Heavy is the Crown', artist: 'Linkin Park', genre: 'Rock', duration: 167, favorite: false},
            {title: 'In the End', artist: 'Linkin Park', genre: 'Rock', duration: 216, favourite: false},
            {title: 'Indestructible', artist: 'Disturbed', genre: 'Heavy Metal', duration: 286, favorite: false}
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: true}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
*/
test.sortSongs('Rock mix', 'artist');
console.log(test.getAllPlaylists());
/* output: 
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'Indestructible', artist: 'Disturbed', genre: 'Heavy Metal', duration: 286, favorite: false}
            {title: 'Heavy is the Crown', artist: 'Linkin Park', genre: 'Rock', duration: 167, favorite: false},
            {title: 'In the End', artist: 'Linkin Park', genre: 'Rock', duration: 216, favourite: false},
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: true}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
*/
test.sortSongs('Rock mix', 'duration');
console.log(test.getAllPlaylists());
/* output: 
[
    {
        name: 'Rock mix', 
        songs: [
            {title: 'Heavy is the Crown', artist: 'Linkin Park', genre: 'Rock', duration: 167, favorite: false},
            {title: 'The Hell Song', artist: 'Sum 41', genre: 'rock', duration: 201, favorite: true}
            {title: 'In the End', artist: 'Linkin Park', genre: 'Rock', duration: 216, favourite: false},
            {title: 'Indestructible', artist: 'Disturbed', genre: 'Heavy Metal', duration: 286, favorite: false}
        ]
    },
    {name: 'Best of Hans Zimmer', songs: []}
*/
try {
    test.sortSongs('Hip Hop mix', 'title');
    
} catch (error) {
    console.log(error);
}
try {
    test.sortSongs('Rock mix', 'year');
} catch (error) {
    console.log(error);
}
/* output:
Error: Playlist 'Hip Hop mix' not found!
Error: Songs cannot be sorted by 'year'!
*/