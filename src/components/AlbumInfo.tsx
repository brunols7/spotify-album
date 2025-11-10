import '../styles/AlbumInfo.css'
import { PlayIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export function AlbumInfo(props: {isNew: boolean | false, title: string, artist: string, bio: string, link: string}){

    function PlayButton(){
        
        return (
            <a href={props.link} target='_blank' >
                <button className='play-btn'>
                    <PlayIcon style={{ width: 20, height: 20 }} /> {}
                    Ouvir Agora
                </button>
            </a>
        );
    }

    function FavoriteButton(){
        return (
            <button className='favorite-btn'>
                <HeartIcon style={{ width: 20, height: 20 }} /> {}
                Adicionar à playlist
            </button>
        )
    }

    function ShareButton(){
        return <button className='share-btn'>
            <ShareIcon style={{ width: 20, height: 20 }} />
            Compartilhar
        </button>
    }

    return (
        <div className="info">
            {props.isNew && <p className="new">Novo Álbum</p>}
            <h1>{props.title}</h1>
            <h3>by {props.artist}</h3>
            <p className="bio">{props.bio}</p>
            <div className="buttons">
                <PlayButton/>
                <FavoriteButton/>
                <ShareButton/>
            </div>
        </div>
    );

}