import React from "react"
import Thumbnail from "./Thumbnail"
import styled from "styled-components"

const LeftColumn = styled.ul`
    flex: 0,1,20%;
    margin-top: 0;
    padding-right: 16px;
    list-style: none;
`
const Item = styled.li`
    cursor: pointer;
`

const Filmstrip = ({artworks,thumbnails,setSelected}) => {
    
    const thumbnailArray = artworks.map( (artwork, index) => {
        let artworkThumbnail = thumbnails[index]
        return <Item key={index}> <Thumbnail artwork={artwork} thumbnail={artworkThumbnail} setSelected={setSelected}/> </Item>
    });

    return (
        <>
            <LeftColumn>
                {thumbnailArray}
            </LeftColumn>
        </>
    );
}

export default Filmstrip