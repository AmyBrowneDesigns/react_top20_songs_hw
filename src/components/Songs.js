import Song from './Song'

const Songs=({ songs })=>{
    const songListItems = songs.map(song => {
        return (
            <Song name={song["im:name"]["label"]} artist={song["im:artist"]["label"]}></Song>
        )
    })

    return (
        <>
            <h2>List of songs</h2>
            {songListItems}
        </>
    )
}
export default Songs;

