import {Link} from "react-router-dom";

function Pet({id, name, breed, animal, location, images}) {
    const hero = images.length
        ? images[0]
        : "http://pets-images.dev-apis.com/pets/none.jpg";

    return (
        <Link to={`/pets/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </Link>
    );
}

export default Pet;