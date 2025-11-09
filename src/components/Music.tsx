import '../styles/Music.css'

export function Music(){

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
            <AlbumPhoto photo_url="https://akamai.sscdn.co/uploadfile/letras/albuns/7/5/9/b/2621201738316056.jpg" alt="Album Hurry Up Tomorrow - The Weeknd"/>
            <SpotifyLink link="https://scannables.scdn.co/uri/plain/png/121212/white/640/spotify:album:3OxfaVgvTxUTy7276t7SPU"/>
        </div>

    );
}