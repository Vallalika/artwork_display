import React, {useState, useEffect} from "react"
import Profile from "../Components/Profile"
import ArtworkList from "../Components/ArtworkList"
import Display from "../Components/Display"

const MainBox = () => {
    const [artist, setArtist] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [artworks, setArtworks] = useState([])
    const [imgEndpoint, setImgEndpoint] = useState("")
    const [thumbnails, setThumbnails] = useState([])
    
    useEffect( () => {
        loadArtist()
        }, [])
    
    useEffect( () => {
        if (Object.keys(artist).length > 0) {
            setIsLoading(false)
            loadArtworks()
        }
    }, [artist])

    useEffect( () => {
        if (Object.keys(artworks).length > 0) {
            getThumbnails()
        }
    }, [artworks])

    const loadArtist = () => {
        fetch('https://api.artic.edu/api/v1/artists/35809?fields=api_link,artwork_ids,birth_date,death_date,description,id,sort_title,title')
        .then(response => response.json())
        .then(artist => setArtist(artist.data))
        .catch(error => console.error)
    }

    const loadArtworks = () => {

        // Get artwork ids from artist object
        const artworkIds = artist["artwork_ids"]

        // Cleanup artwork ids
        const index = artworkIds.indexOf(16575)
        artworkIds.splice(index,1)

        // Build fetch query
        let artworkQueryBuild = "https://api.artic.edu/api/v1/artworks?ids="
        for (let id of artworkIds) {
            artworkQueryBuild = artworkQueryBuild+id+","
        }
        let artworkQuery = artworkQueryBuild.slice(0,-1);
        artworkQuery = artworkQuery + "&fields=id,api_link,title,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,dimensions,medium_display,artwork_type_title,artist_id,artist_title,term_titles,style_titles,classification_title,classification_titles,subject_titles,image_id"
        
        // Fetch
        fetch(artworkQuery)
        .then(response => response.json())
        .then(artworks => (setImgEndpoint(artworks['config']['iiif_url']), setArtworks(artworks.data)))
        .catch(error => console.error)
    }

    const getThumbnails = () => {
        
        const imgIds = artworks.map(artwork => {
            return artwork["image_id"]
        })

        const imgUrls = imgIds.map(imgId => {
            const imgUrl = imgEndpoint+"/"+imgId+"/full/200,/0/default.jpg"
            return(imgUrl)
        })

        setThumbnails(imgUrls)
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
                    {artworks.length > 0 ? < ArtworkList artworks={artworks} thumbnails={thumbnails}/> : "ARTWORKS LOADING"}
                </section>
            </main>
        </>
    );
}

export default MainBox;