import React from "react"
import Filmstrip from "./Filmstrip"
import ArtworkDisplay from "./ArtworkDisplay"
import styled from "styled-components"

const MainDisplay = styled.main`
    display: flex
`

const ArtworkBox = ({artworks,selectedArtwork,setSelected,selectedImage}) => {

    return (
        <>
            <MainDisplay>
                <Filmstrip artworks = {artworks} setSelected = {setSelected}/>
                <ArtworkDisplay selectedArtwork = {selectedArtwork} selectedImage = {selectedImage}/>
            </MainDisplay>
        </>
    );
}

export default ArtworkBox