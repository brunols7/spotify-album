import '../../styles/Faixas.css'
export function Header(props: {num_musics: number, total_in_minutes: number}){

    function returnTotalTime(total_in_minutes: number){
        const hours = Math.floor(total_in_minutes/60);
        const minutes = total_in_minutes % 60;
        return `${hours}h ${minutes}min`
    }

    let total_time = returnTotalTime(props.total_in_minutes);

    return (
        <div className="header">
            <h3>Tracklist</h3>
            <p>{props.num_musics} musics, {total_time}</p>
        </div>
    );
}