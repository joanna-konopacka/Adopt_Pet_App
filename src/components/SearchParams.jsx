import {useEffect, useState} from "react";
import Results from "./Results.jsx";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];


function SearchParams() {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchSearch().then((data) => setResults(data.pets))
    }, [])

    async function fetchSearch(){
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        return response.json();
    }

    const fetchBreedList = async () => {
        const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        return response.json();
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchSearch().then((data) => setResults(data?.pets));
                }}
            >
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="animal">Animal</label>
                <select
                    name="animal"
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value)
                        fetchBreedList().then((data) => setBreeds(data))
                    }}
                >
                    {animals.map((animal) => (
                        <option value={animal} key={animal}>
                            {animal}
                        </option>
                    ))}

                </select>

                <label htmlFor="breed">Breed</label>
                <select
                    name="breed"
                    id="breed"
                    disabled={!breeds.length}
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                >
                    {breeds.map((breed) => (
                        <option value={breed} key={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
            <Results pets={results}/>
        </div>
    );
}

export default SearchParams;