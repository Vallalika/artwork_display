import React from "react";
import Artwork from "./Artwork";

const ArtworkList = ({artworks,thumbnails}) => {
    
    const artworkArray = artworks.map( (artwork, index) => {
        let artworkThumbnail = thumbnails[index]
        return <li key={index}> <Artwork artwork={artwork} thumbnail = {artworkThumbnail}/> </li>
    });

    return (
        <>
            <ul>
                {artworkArray}
            </ul>
        </>
    );
}

export default ArtworkList;