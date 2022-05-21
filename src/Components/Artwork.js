import React,{useState, useEffect} from "react";

const Artwork = ({artwork,thumbnail}) => {

    return (
        <>
            <hgroup>
                <img src={thumbnail} alt={`Thumbnail of ${artwork.title}`} />
                <h3>{artwork.title}</h3>
                <p>{artwork["artwork_type_title"]} ({artwork["date_start"]} - {artwork["date_end"]}), {artwork["place_of_origin"]}</p>
                <p>Dimensions: {artwork["dimensions"]}</p>
                <p>Medium: {artwork["medium_display"]}</p>
            </hgroup>
        </>
    );
}

export default Artwork;