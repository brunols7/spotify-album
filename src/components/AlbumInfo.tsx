import '../styles/AlbumInfo.css'

export function AlbumInfo(props: {isNew: boolean | false, title: string, artist: string, bio: string, link: string}){

    return (
        <div className="info">
            {props.isNew && <p className="new">Novo Álbum</p>}
            <h1>{props.title}</h1>
            <h3>by {props.artist}</h3>
            <p className="bio">{props.bio}</p>
        </div>
    );

}