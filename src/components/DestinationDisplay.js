import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDestinationData } from '../actions';
import DestinationSearchBar from './DestinationSearchBar';
import DestinationMainInfo from './DestinationMainInfo';
import DestinationListInfo from './DestinationListInfo';
import DestinationCurrencyInfo from './DestinationCurrencyInfo';

const DestinationDisplay = ({ destinationCountry, fetchDestinationData, destinationData, errorState }) => {
	useEffect(() => {
		if (destinationCountry) {
			fetchDestinationData(destinationCountry);
		}
	}, [destinationCountry]);

	return (
		<div>
			<DestinationSearchBar />
			<div className="info info--separator">
				<div className="search__main">
					<DestinationMainInfo
						country={destinationData.country}
						region={destinationData.region}
						capital={destinationData.capital}
						flag={destinationData.flag}
					/>
					<DestinationCurrencyInfo
						currencyCode={destinationData.currencyCode}
						currencyName={destinationData.currencyName}
					/>
				</div><div className="search__secondary">
					<DestinationListInfo
						population={destinationData.population}
						language={destinationData.language}
						callingCode={destinationData.callingCode}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		destinationData: state.destination.destinationData,
		destinationCountry: state.selected.destinationCountry,
	};
};

const mapDispatchToProps = {
	fetchDestinationData
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationDisplay);