import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchExchangeRateData } from '../actions';

const DestinationCurrencyInfo = ({ fetchExchangeRateData, originData, exchangeRateData, currencyCode, currencyName }) => {
	useEffect(() => {
		if (currencyCode !== 'Destination currency code' && originData.currencyCode !== 'Your currency code') {
			fetchExchangeRateData(currencyCode, originData.currencyCode);
		}
	}, [currencyCode]);

	return (
		<div className="search__info">
			<div className="search__row">
				<div className="search__row--title">
					Currency
				</div><div className="search__row--desc">
					<span className="destination-currency">{currencyCode === 'noCurrencyCode' ? currencyName : `${currencyCode} - ${currencyName}`}</span>
				</div>
			</div>
			<div className="search__row">
				<div className="search__row--title">
					Exchange rate
				</div><div className="search__row--desc">
					<span className="destination-exchange-rate">{exchangeRateData.conversionRate}</span>
				</div>
			</div>
			<div className="search__row">
				<div className="search__row--title">
					Last update UTC
				</div><div className="search__row--desc">
					<span className="destination-exchange-rate-date">{exchangeRateData.lastUpdate}</span>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		originData: state.origin.originData,
		exchangeRateData: state.exchangeRate.exchangeRateData
	};
};

const mapDispatchToProps = {
	fetchExchangeRateData
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationCurrencyInfo);