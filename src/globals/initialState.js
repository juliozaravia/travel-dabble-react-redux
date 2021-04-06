const INITIAL_STATE = {
	originData: {
		country: 'Your country',
		city: 'Your city',
		confidence: 'The accuracy',
		currencyCode: 'Your currency code',
		currencyName: 'Your currency name',
		flag: 'noFlag'
	},
	destinationData: {
		country: 'Your destination country',
		capital: 'Your destination capital',
		region: 'Your destination region',
		flag: 'noFlag',
		population: '0.0 M',
		language: 'Destination language',
		callingCode: 'Destination code',
		currencyCode: 'noCurrencyCode',
		currencyName: 'Currency name of your destination'
	},
	exchangeRateData: {
		result: 'Pending result',
		conversionRate: 'Exchange rate of your destination',
		lastUpdate: 'Last update of the exchange rate'
	},
	destinationCountry: "",
	errorState: 'noErrors'
};

export default INITIAL_STATE;