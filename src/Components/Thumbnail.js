import React from "react";
import Artwork from "./Artwork";

const Thumbnail = ({artwork,thumbnail}) => {

    const handleClick = () => {
        return <p>  </p>
    }

    return (
        <img src={thumbnail} alt={`Thumbnail of ${artwork.title}`} onClick={handleClick} />
    );
}

export default Thumbnail;