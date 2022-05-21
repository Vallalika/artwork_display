import React from "react";
import styled from "styled-components";

const DisplayStyle = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const ArtworkDisplay = ({selectedArtwork,selectedImage}) => {

    return (
        <>
            <DisplayStyle>
                <img src={selectedImage} alt={`Image of ${selectedArtwork.title}`} />
                <h3>{selectedArtwork.title}</h3>
                    <p>{selectedArtwork["artwork_type_title"]} ({selectedArtwork["date_start"]} - {selectedArtwork["date_end"]}), {selectedArtwork["place_of_origin"]}</p>
                    <p>Dimensions: {selectedArtwork["dimensions"]}</p>
                    <p>Medium: {selectedArtwork["medium_display"]}</p>
            </DisplayStyle>
        </>
    );
}

export default ArtworkDisplay;