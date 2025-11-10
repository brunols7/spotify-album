import '../styles/Container.css'
import { AlbumInfo } from './AlbumInfo';
import { Music } from './Music';


export function Container(){

    let albumData = {
        "title": "Hurry Up Tomorrow",
        "artist": "The Weeknd",
        "bio": "Hurry Up Tomorrow is an album by The Weeknd that is the final part of a trilogy with After Hours and Dawn FM. It blends synth-pop, R&B, and other genres, and explores themes of ending the 'The Weeknd' persona to live as 'Abel'. The album's concept is influenced by the real-life experience of losing his voice during a 2022 tour, which prompted reflection on his past lifestyle.",
        "link": "https://open.spotify.com/intl-pt/album/3OxfaVgvTxUTy7276t7SPU?si=0cdZUeO1S7WQDyJcnh7P6w",
        "isNew": true,
        "photo_url": "https://akamai.sscdn.co/uploadfile/letras/albuns/7/5/9/b/2621201738316056.jpg",
        "spotify": "https://scannables.scdn.co/uri/plain/png/121212/white/640/spotify:album:3OxfaVgvTxUTy7276t7SPU",
        "alt": "Album Hurry Up Tomorrow - The Weeknd"

    }

    return (
        <div className="container">
            <Music {...albumData}/>
            <AlbumInfo {...albumData}/>
        </div>
    );
}