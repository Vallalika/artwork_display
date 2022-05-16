import React, {useState, useEffect} from "react";
import Profile from "../Components/Profile";
import ArtworkList from "../Components/ArtworkList";
import Display from "../Components/Display";

const MainBox = () => {
    
    const [artist, setArtist] = useState([]);
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {
        loadArtist();
        }, [])
    
    useEffect( () => {
        setIsLoading(false);
    }, [artist])
    
    useEffect( () => {
        loadArtworks();
        }, [isLoading])

    const loadArtist = () => {
        fetch('https://api.artic.edu/api/v1/artists/35809?fields=api_link,artwork_ids,birth_date,death_date,description,id,sort_title,title')
        .then(response => response.json())
        .then(artist => setArtist(artist.data))
        .catch(error => console.error);
    }
    
    const loadArtworks = () => {
        const artworkIds = artist["artwork_ids"];
        console.log("I'm finally in loadArtwork, have checked that my ids are ok");
        let artworkQuery = `https://api.artic.edu/api/v1/artworks?ids=${artworkIds}`;
        artworkQuery = artworkQuery.toString();
        console.log(artworkQuery)
        fetch(artworkQuery)
        .then(response => response.json())
        .then(artworks => setArtworks(artworks.data))
        .catch(error => console.error);
        console.log(response)
    }
    
    
    return (
        <>  
            <h1> {artist.title}'s artwork from the Art Institute of Chicago</h1>
            <Display />
            <main>
                <section profile="profile">
                    <Profile artist = {artist}/>
                </section>
                <section id="artworkList">
                {artworks.length > 0 ? < ArtworkList artworks={artworks}/> : "Artworks haven't loaded yet..."}
                </section>
            </main>
        </>
    );
}

export default MainBox;