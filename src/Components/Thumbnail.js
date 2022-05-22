import React from "react"

const Thumbnail = ({artwork,thumbnail,setSelected}) => {

    const handleClick = () => {
        setSelected(artwork,thumbnail)
    }

    return (
        <img src={thumbnail} alt={`Thumbnail of ${artwork.title}`} onClick={handleClick} />
    )
}

export default Thumbnail