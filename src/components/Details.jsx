import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
	const { petId } = useParams();
	const [pet, setPet] = useState({});

	useEffect(() => {
		getPetDetails(petId).then((data) => setPet(data.pets[0]));
	}, []);

	async function getPetDetails(id) {
		const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
		return response.json();
	}

	return (
		<div className="details">
			<div>
				<h1>{pet.name}</h1>
				<h2>
					{pet.animal} - {pet.breed} - {pet.city}, {pet.state}
				</h2>
				<button>Adopt {pet.name}</button>
				<p>{pet.description} </p>
			</div>
		</div>
	);
}

export default Details;
