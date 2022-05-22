import React from "react"

const Thumbnail = ({artwork,setSelected}) => {

    const handleClick = () => {
        setSelected(artwork)
    }

    return (
        <img src={artwork.artworkUrl} alt={`Thumbnail of ${artwork.title}`} onClick={handleClick} />
    )
}

export default Thumbnail