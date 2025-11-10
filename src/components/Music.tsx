import '../styles/Music.css'

export function Music(props: {photo_url : string, spotify: string, alt: string}){

    function AlbumPhoto(props: {photo_url : string, alt: string}){
        return (
            <div className="albumPhoto">
                <img src={props.photo_url} alt={props.alt} />
            </div>
        );
    }

    function SpotifyLink(props: {link : string}){
        return <img className="spotify-link" src={props.link}/>
    }

    return (

        <div className="musicCard">
            <AlbumPhoto photo_url={props.photo_url} alt={props.alt}/>
            <SpotifyLink link={props.spotify}/>
        </div>

    );
}