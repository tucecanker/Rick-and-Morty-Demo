import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function CardList() {
    const [characters, setCharacters] = React.useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/`)
            .then(function (response) {
                console.log("cevap", response.data.results);
                setCharacters(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
    console.log("karakter", characters);
    return (
        <div className="App-container">
            {characters.map((character) => {
                return (
                    <div className={"card-main"}>
                        <img src={character.image} />
                        <ul>
                            <li key={character.id}>
                                <h3>{character.name}</h3>
                                <a> Read More...</a>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default CardList;