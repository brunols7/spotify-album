
export function AlbumInfo(props: {isNew: boolean, title: string, artist: string, bio: string, link: string}){

    return (
        <div className="info">
            {props.isNew && <p>Novo Álbum</p>}
        </div>
    );

}