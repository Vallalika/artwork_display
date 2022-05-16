import React from "react";

const Profile = ({artist}) => {
    
    // If time cleanup data in {artist.description}

    return (
        <>
            <h2>{artist.title}</h2>
            <p>{artist["birth_date"]} - {artist["death_date"]}</p>
            <p id="bigParagraph">{artist.description}</p>
        </>
    );
}

export default Profile;