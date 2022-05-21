import React from "react";
import Filmstrip from "../Components/Filmstrip";
import ArtworkDisplay from "../Components/ArtworkDisplay";

const ArtworkBox = ({artworks,thumbnails,selectedArtwork,selectedImage}) => {

    return (
        <>
            <Filmstrip artworks = {artworks} thumbnails = {thumbnails}/>
            <ArtworkDisplay selectedArtwork = {selectedArtwork} selectedImage = {selectedImage}/>
        </>
    );
}

export default ArtworkBox;