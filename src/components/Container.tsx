import '../styles/Container.css'
import { AlbumInfo } from './AlbumInfo';
import { Music } from './Music';


export function Container(){

    let bioText = "Hurry Up Tomorrow is an album by The Weeknd that is the final part of a trilogy with After Hours and Dawn FM. It blends synth-pop, R&B, and other genres, and explores themes of ending the 'The Weeknd' persona to live as 'Abel'. The album's concept is influenced by the real-life experience of losing his voice during a 2022 tour, which prompted reflection on his past lifestyle.";

    return (
        <div className="container">
            <Music/>
            <AlbumInfo isNew={true} title="Hurry Up Tomorrow" artist='The Weeknd' bio={bioText} link='https://open.spotify.com/intl-pt/album/3OxfaVgvTxUTy7276t7SPU?si=0cdZUeO1S7WQDyJcnh7P6w'/>
        </div>
    );
}