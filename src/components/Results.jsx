import Pet from "./Pet.jsx";

function Results({pets}) {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets found...</h1>
            ) : (
                pets.map(({id, name, animal, breed, images, city, state}) => (
                    <Pet
                        key={id}
                        id={id}
                        name={name}
                        animal={animal}
                        breed={breed}
                        images={images}
                        location={`${city}, ${state}`}
                    />
                ))
            )}
        </div>
    );
}

export default Results;