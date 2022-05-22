import React from "react";
import styled from "styled-components";

const DisplayStyle = styled.section `
    flex: 0 1 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const Info = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`

const ArtworkDisplay = ({selectedArtwork,selectedImage}) => {

    return (
        <>
            <DisplayStyle>
                <img src={selectedImage} alt={`Image of ${selectedArtwork.title}`} />
                <h3>{selectedArtwork.title}</h3>
                    <Info>{selectedArtwork["artwork_type_title"]} ({selectedArtwork["date_start"]} - {selectedArtwork["date_end"]}), {selectedArtwork["place_of_origin"]}</Info>
                    <Info>Dimensions: {selectedArtwork["dimensions"]}</Info>
                    <Info>Medium: {selectedArtwork["medium_display"]}</Info>
            </DisplayStyle>
        </>
    );
}

export default ArtworkDisplay;