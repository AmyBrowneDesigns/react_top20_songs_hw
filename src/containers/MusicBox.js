import Songs from "../components/Songs";
import {useEffect, useState} from 'react'

const MusicBox=()=>{

    const [songs, setSongs] = useState([])

    useEffect(() =>{
        getSongs();
    }, []);

    const getSongs = ()=>{
        console.log("getting song info");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res =>res.json())
            .then(data =>setSongs(data.feed.entry))
    }

    // const Songs = songs.map( song=>{
    //     return()
    // })

    return (
        <>
            <h1>Music Top 20</h1>
            <Songs songs={songs}/>
        </>
    )
}
export default MusicBox;