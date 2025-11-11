import '../../styles/Tile.css'
import { ClockIcon } from '@heroicons/react/24/outline';


interface MusicData {
    "title": string,
    "time_in_seconds": number
}

export function MusicTile(props: {data: MusicData, index: number, isLast: boolean | false}){

    function returnMinutes(time_in_seconds: number){
        const min = Math.floor(time_in_seconds/60);
        const sec = time_in_seconds % 60;
        const formattedSec = sec.toString().padStart(2, '0');
        return `${min}:${formattedSec}`
    }

    const formattedIndex = (props.index + 1).toString().padStart(2, '0'); 

    function Duration(props: {time_in_seconds: number}){
        const timeTotal = returnMinutes(props.time_in_seconds);

        return(
            <div className="duration">
                <ClockIcon style={{ width: 20, height: 20 }} />
                <span>{timeTotal}</span>
            </div>
        );
    }

    return (
        <div className="tile-container">
            <div className="music-tile">
                <div className="title">
                    <p className='index'>{formattedIndex}</p>
                    <p className='title'>{props.data.title}</p>
                </div>
                <Duration time_in_seconds={props.data.time_in_seconds}/>
            </div>
            {!props.isLast && <hr className='rounded'/>}
        </div>
    );
    

}