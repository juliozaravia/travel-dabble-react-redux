import * as TYPE from '../globals/actionTypes';
import { populationFormatter } from '../helpers';

import geocode from "../apis/geoCode";
import restcountries from "../apis/restCountries";
import exchangerate from "../apis/exchangeRate";

export const fetchOriginData = () => {
	return async (dispatch) => {
		await navigator.geolocation.getCurrentPosition(dispatchLocation);
		function dispatchLocation(position) {
			let { latitude, longitude } = position.coords;
			geocode(latitude, longitude).get()
				.then(responseGeo => responseGeo)
				.then(dataGeo => {
					restcountries.get(`/name/${dataGeo.data.country}`)
						.then(responseRest => responseRest)
						.then(dataRest => {
							dispatch({
								type: TYPE.FETCH_ORIGIN_DATA,
								payload: {
									country: dataGeo.data.country,
									city: dataGeo.data.city,
									confidence: `${dataGeo.data.confidence * 100}% accuracy`,
									currencyCode: dataRest.data[0].currencies[0].code,
									currencyName: dataRest.data[0].currencies[0].name,
									flag: dataRest.data[0].flag
								}
							});
							dispatch({
								type: TYPE.FETCH_DATA_ERROR_RESET,
								payload: 'noErrors',
							});
						}).catch((err) => {
							dispatch({
								type: TYPE.FETCH_DATA_ERROR,
								payload: err.message
							});
						});
				}).catch((err) => {
					dispatch({
						type: TYPE.FETCH_DATA_ERROR,
						payload: err.message
					});
				});
		}
	};
};

export const fetchDestinationData = (country) => {
	return async (dispatch) => {
		try {
			const { data } = await restcountries.get(`/alpha/${country}`);
			dispatch({
				type: TYPE.FETCH_DESTINATION_DATA,
				payload: {
					country: data.name,
					capital: data.capital,
					region: `${data.subregion} - ${data.region}`,
					population: populationFormatter(data.population),
					flag: data.flag,
					language: `${data.languages[0].nativeName} - ${data.languages[0].name}`,
					callingCode: `+${data.callingCodes[0]}`,
					currencyCode: data.currencies[0].code,
					currencyName: data.currencies[0].name
				}
			});
			dispatch({
				type: TYPE.FETCH_DATA_ERROR_RESET,
				payload: 'noErrors',
			});
		} catch (err) {
			dispatch({
				type: TYPE.FETCH_DATA_ERROR,
				payload: err.message
			});
		}
	}
};

export const fetchExchangeRateData = (destinationCurrencyCode, originCurrencyCode) => {
	return async (dispatch) => {
		try {
			const { data } = await exchangerate.get(`/${destinationCurrencyCode}`);
			dispatch({
				type: TYPE.FETCH_EXCHANGE_RATE_DATA,
				payload: {
					result: data.result,
					conversionRate: `1 ${destinationCurrencyCode} = ${data.conversion_rates[originCurrencyCode]} ${originCurrencyCode}`,
					lastUpdate: data.time_last_update_utc
				}
			});
			dispatch({
				type: TYPE.FETCH_DATA_ERROR_RESET,
				payload: 'noErrors',
			});
		} catch (err) {
			dispatch({
				type: TYPE.FETCH_DATA_ERROR,
				payload: err.message
			});
		}
	}
};

export const selectedDestination = (country) => {
	return {
		type: TYPE.SELECTED_DESTINATION,
		payload: country
	};
};