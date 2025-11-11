import '../../styles/Faixas.css'
import { Header } from './Header';
import { PlayIcon } from '@heroicons/react/24/outline';
import { List } from './List'


export function Faixas(){

    let data = {
        "num_musics": 22,
        "total_in_minutes": 84,
        "link": "link_here"
    }

    function PlayButton(props: {link: string}){

        return (
            <a href={props.link} target='_blank'>
                <button className='play-btn'>
                    <PlayIcon style={{ width: 20, height: 20 }} /> {}
                    Play Now
                </button>
            </a>
        );
    }

    return (
        <div className="faixas-ctn">
            <Header num_musics={data.num_musics} total_in_minutes={data.total_in_minutes}/>
            <List/>
            <PlayButton link={data.link}/>
        </div>
    );
}