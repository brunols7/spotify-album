import { MusicTile } from './MusicTile'
import '../../styles/List.css'

export function List(){

    let musics = [
        {
            "title": "Wake Me Up (feat. Justice)",
            "time_in_seconds": 308
        },
        {
            "title": "Cry For Me",
            "time_in_seconds": 224
        },
        {
            "title": "São Paulo (feat. Anitta)",
            "time_in_seconds": 301
        },
        {
            "title": "Timeless (feat Playboi Carti)",
            "time_in_seconds": 256
        },
        {
            "title": "Take Me Back To LA",
            "time_in_seconds": 253
        },
        {
            "title": "Niagara Falls",
            "time_in_seconds": 277
        },
        {
            "title": "The Abyss (feat. Lana Del Rey)",
            "time_in_seconds": 282
        },
    ]

    return (
        <div className="list-ctn">
            {musics.map((music, index) => (
                <MusicTile data={music} index={index} isLast={index === musics.length - 1}/>
            ))}
        </div>
    );
}