import React from "react"
import styled from "styled-components"

const CustomButton = styled.button `
    margin: 16px;
    background-color: #275082;
    border: none;
    color: white;
    padding: 8px;
    text-align: center;
    display: inline-block;
    font-size: 1em;
`

const UserActions = ({showFiltered}) => {

    const handleChange = (event) => {
        const chosenFilter = event.target.value
        showFiltered(chosenFilter)
    }

    return (
        <>
            <CustomButton>Sort by date</CustomButton>
            <select onChange={handleChange}>
                <option value="All">View all artwork</option>
                <option value="Painting">View all paintings</option>
                <option value="Drawing and Watercolor">View all drawings</option>
            </select>
        </>
    );
}

export default UserActions;