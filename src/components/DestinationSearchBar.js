import React, { useState } from 'react';
import { connect } from "react-redux";
import { selectedDestination } from '../actions';

import countryList from '../globals/countries';

const DestinationSearchBar = ({ selectedDestination, errorState }) => {
	const [destination, setDestination] = useState("");

	const destinationListLoader = () => {
		let options = [<option key='SYD' value='SYD'>Select your destination here</option>];
		for (const [key, value] of Object.entries(countryList)) {
			options.push(<option key={key} value={key}>{value}</option>);
		}
		return options;
	};

	const onSubmit = (event) => {
		event.preventDefault();
		selectedDestination(destination);
	}

	return (
		<div>
			<h1 className="title title--destination">🛫 Where are you going?</h1>
			<div className="info">
				<form onSubmit={onSubmit}>
					<div className="search__selector">
						<div className="select">
							<select
								disabled={errorState === 'noErrors' ? false : true}
								id="destination-selector"
								onChange={(event) => setDestination(event.target.value)}>
								{destinationListLoader()}
							</select>
						</div>
					</div><div className="search__action">
						<button disabled={errorState === 'noErrors' ? false : true} className="search__button" type="submit">Search</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		destinationCountry: state.selected.destinationCountry,
		errorState: state.errors.errorState
	};
};

const mapDispatchToProps = {
	selectedDestination
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationSearchBar);