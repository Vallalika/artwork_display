import React, {useState, useEffect} from "react"
import UserActions from "../Components/UserActions"
import ArtworkBox from "../Components/ArtworkBox"
import styled from "styled-components"

const MainTitle = styled.h1 `
    padding: 16px;
`

const MainBox = () => {
    
// STATES
    
    // Initial data fetched
    const [artist, setArtist] = useState([])
    const [artworks, setArtworks] = useState([])
    const [imgEndpoint, setImgEndpoint] = useState("")
    
    // Data built
    const [artworksWithImgs, setArtworksWithImgs] = useState([])

    // Selected display
    const [currentArtwork, setCurrentArtwork] = useState([])
    const [currentImage, setCurrentImage] = useState("")
    
    // Filters
    const [currentFilter, setCurrentFilter] = useState("All")
    const [filteredArtworks, setFilteredArtworks] = useState([])



// EFFECTS

    useEffect( () => {
        loadArtist()
        }, [])
    
    useEffect( () => {
        if (Object.keys(artist).length > 0) {
            loadArtworks()
        }
    }, [artist])

    useEffect( () => {
        if (Object.keys(artworks).length > 0) {
            getThumbnails()
            setFilteredArtworks(artworksWithImgs)
        }
    }, [artworks])

    useEffect( () => {
        if (Object.keys(artworksWithImgs).length > 0) {
            setSelected(artworksWithImgs[0])
        }
    }, [artworksWithImgs])

// ACTIONS

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

        const addThumbnails = artworks.map((artwork, index) => {
            let artworkUrl = imgUrls[index]
            artwork["artworkUrl"] = artworkUrl
            return artwork
        })

        setArtworksWithImgs(addThumbnails)
    }

    const setSelected = (artwork) => {
        setCurrentArtwork(artwork)
        const currentImageUrl = artwork.artworkUrl.replace("200", "600")
        setCurrentImage(currentImageUrl)
    }

    const showFiltered = (filter) => {
        
        if (filter !== currentFilter) {
            setCurrentFilter(filter)
            
            if (filter === "All") {

                console.log("Within all condition")
                setFilteredArtworks(artworksWithImgs)
                setSelected(artworksWithImgs[0])
                
            } else {
                console.log("Within painting and watercolors")
                const tempFilter = artworksWithImgs.filter(artwork => artwork["artwork_type_title"] === filter)
                setFilteredArtworks(tempFilter)
                setSelected(tempFilter[0])
            }
        }
    }

    return (
        <>  
            <MainTitle> {artist.title}'s artwork from the Art Institute of Chicago</MainTitle>
            <UserActions showFiltered = {showFiltered} setCurrentFilter = {setCurrentFilter} />
            <main>
                <ArtworkBox artworks = {filteredArtworks} selectedArtwork = {currentArtwork} selectedImage = {currentImage} setSelected = {setSelected}/>
            </main>
        </>
    );
}

export default MainBox;