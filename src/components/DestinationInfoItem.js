import React from 'react';

const DestinationInfoItem = ({ name, emoji, data, personalizedClass }) => {
	return (
		<div className="search__card">
			<div className="search__card--title">{name}</div>
			<div className="search__card--data">
				{emoji} <span className={personalizedClass}>{data}</span>
			</div>
		</div>
	);
};

export default DestinationInfoItem;