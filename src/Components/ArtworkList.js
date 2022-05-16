import React from "react";
import Artwork from "./Artwork";

const ArtworkList = ({artworks}) => {
    
    const artworkArray = artworks.map( (artwork, index) => {
        return <li key={index}> <Artwork artwork={artwork}></Artwork> </li>

        
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