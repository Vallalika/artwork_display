import React from "react"
import Filmstrip from "./Filmstrip"
import ArtworkDisplay from "./ArtworkDisplay"
import styled from "styled-components"

const MainDisplay = styled.main`
    display: flex
`

const ArtworkBox = ({artworks,thumbnails,selectedArtwork,selectedImage,setSelected}) => {

    return (
        <>
            <MainDisplay>
                <Filmstrip artworks = {artworks} thumbnails = {thumbnails} setSelected = {setSelected}/>
                <ArtworkDisplay selectedArtwork = {selectedArtwork} selectedImage = {selectedImage}/>
            </MainDisplay>
        </>
    );
}

export default ArtworkBox