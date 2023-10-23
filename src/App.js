import React, { useState } from 'react';
import starWhite from './star-white.svg'
import starColored from './star-colored.svg'
import profilePicture from './aaaaaaa.jpeg'
import './App.css'

const Card = ({ data, isFavourite, onToggleFavourite }) => {
	console.log(data.image);
	
	return (
		<div className={`card ${isFavourite ? 'favourite' : ''}`}>
			<div className='primary-info'>
				<div className='flexed-div'>
					<div className="image-container">
						<img src={profilePicture} alt={data.name} />
					</div>
					<div className="star" onClick={onToggleFavourite}>
						{isFavourite ? <img src={starColored} alt="Favorited" /> : <img src={starWhite} alt="Not Favorited" />}
					</div>
				</div>

				<div className="name">
					<span>{data.name}</span>
				</div>
				<div className="designation">{data.designation}</div>
			</div>
			<div className='secondary-info'>
				
				<div className="location">{data.location}</div>
				<div className="links">
					<a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
					<a href={data.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
					<a href={data.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
				</div>
			</div>
			
		</div>
	);
};

const CardContainer = () => {
	const [cards, setCards] = useState([
		{
			name: 'Manas Sarma',
			image: 'doesnt matter Ive hardcoded this rn',
			designation: 'FrontEnd Developer',
			location: 'Guwahati',
			github: 'https://github.com/johndoe',
			twitter: 'https://twitter.com/johndoe',
			facebook: 'https://facebook.com/johndoe',
			isFavourite: false,
		},
		{
			name: 'Adem Itler',
			image: 'doesnt matter Ive hardcoded this rn',
			designation: 'Backend Developer',
			location: 'Gotham',
			github: 'https://github.com/janesmith',
			twitter: 'https://twitter.com/janesmith',
			facebook: 'https://facebook.com/janesmith',
			isFavourite: false,
		},
	]);

	const toggleFavourite = (index) => {
		const updatedCards = [...cards];
		updatedCards[index].isFavourite = !updatedCards[index].isFavourite;
		setCards(updatedCards);
	};

	return (
		<div className="card-container">
			{cards.map((card, index) => (
				<Card
					key={index}
					data={card}
					isFavourite={card.isFavourite}
					onToggleFavourite={() => toggleFavourite(index)}
				/>
			))}
		</div>
	);
};

export default CardContainer;
