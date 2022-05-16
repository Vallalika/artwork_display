import React,{useState, useEffect} from "react";

const Artwork = ({artwork}) => {
    
    const [artworkDetails, setArtworkDetails] = useState([])
    
    const artworkLoad = () => {
        fetch(`https://api.artic.edu/api/v1/artworks/${artwork.id}`)
        .then(response => response.json())
        .then(artworkDetails => setArtworkDetails(artworkDetails.data))
        .catch(error => console.error);
    }

    useEffect( () => {
        artworkLoad();
    }, [])

    return (
        <>
            <hgroup>
                <img src="" alt={`Thumbnail of ${artwork.title}`} />
                <h3>{artwork.title}</h3>
            </hgroup>
            <p>{artworkDetails["artwork_type_title"]} ({artworkDetails["date_start"]} - {artworkDetails["date_end"]}), {artworkDetails["place_of_origin"]}</p>
            <p>Dimensions: {artworkDetails["dimensions"]}</p>
            <p>Medium: {artworkDetails["medium_display"]}</p>
        </>
    );
}

export default Artwork;