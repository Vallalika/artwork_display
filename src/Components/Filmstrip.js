import React from "react";
import Thumbnail from "./Thumbnail";

const Filmstrip = ({artworks,thumbnails}) => {
    
    const thumbnailArray = artworks.map( (artwork, index) => {
        let artworkThumbnail = thumbnails[index]
        return <li key={index}> <Thumbnail artwork={artwork} thumbnail = {artworkThumbnail}/> </li>
    });

    return (
        <>
            <ul>
                {thumbnailArray}
            </ul>
        </>
    );
}

export default Filmstrip;