import { combineReducers } from 'redux';

import * as TYPE from '../globals/actionTypes';
import INITIAL_STATE from '../globals/initialState';

const originDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.FETCH_ORIGIN_DATA:
			return {
				...state,
				originData: { ...action.payload }
			};
		default:
			return state;
	}
};

const destinationDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.FETCH_DESTINATION_DATA:
			return {
				...state,
				destinationData: { ...action.payload }
			};
		default:
			return state;
	}
};

const exchangeRateDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.FETCH_EXCHANGE_RATE_DATA:
			return {
				...state,
				exchangeRateData: { ...action.payload }
			};
		default:
			return state;
	}
};

const selectedDestinationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.SELECTED_DESTINATION:
			return {
				...state,
				destinationCountry: action.payload
			};
		default:
			return state;
	}
};

const errorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.FETCH_DATA_ERROR:
			return {
				...state,
				errorState: action.payload
			};
		case TYPE.FETCH_DATA_ERROR_RESET:
			return {
				...state,
				errorState: action.payload
			};
		default:
			return state;
	}
};


export default combineReducers({
	origin: originDataReducer,
	destination: destinationDataReducer,
	exchangeRate: exchangeRateDataReducer,
	selected: selectedDestinationReducer,
	errors: errorReducer
});