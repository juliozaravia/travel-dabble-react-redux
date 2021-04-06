import React from 'react';

import destinationDefaultFlag from '../resources/images/default-flag-2.png';

const DestinationMainInfo = ({ country, region, capital, flag }) => {
	return (
		<div>
			<div className="search__flag">
				<img
					src={flag === 'noFlag' ? destinationDefaultFlag : flag}
					alt="Default flag"
					className="destination-flag"
				/>
			</div><div className="search__data">
				<div className="search__data--country">
					🌍 <span className="destination-country">{country}</span>
				</div>
				<div className="search__data--region">
					<span>Region: </span>
					<span className="destination-region">{region}</span>
				</div>
				<div className="search__data--capital">
					<span>Capital: </span>
					<span className="destination-capital">{capital}</span>
				</div>
			</div>
		</div>
	);
};

export default DestinationMainInfo;