# TravelDabble [React / Redux]

## 1. Didn't you have TravelDabble already built? 
Yes indeed, the first version of TravelDabble was built a few weeks ago. The previous version was made using **HTML, CSS and Vanilla JavaScript**, you can see the project by [clicking here](https://github.com/juliozaravia/travel-dabble "clicking here"). 

## 2. So... Why build it again? 
**Learning never stops.** I've spent the last few weeks learning how to use the **ReactJS** library to organize and build components and **Redux** for global state handling, so it seemed to me that re-building this application would be a good way to exercise what I've learned.

## 3. Is there a Live Demo?
If you're interested in reviewing a live version, I invite you to visit [Travel Dabble React](https://traveldabblereact.netlify.app "Travel Dabble React"), If you review the application and find an error or want to suggest an improvement, you can write to julio.zaravia.dev@gmail.com.

## 4. How was it programmed?
**The web application was built with technologies like HTML5, CSS, ReactJS, Redux and Redux-Thunk.**

To show the information of the country of origin and destination to the user, 4 APIs were consumed:
- **Navigator.geolocation:** To access the device's location data (coordinates).
- **Geocode.xyz:** To find the country and city where the device is located according to its coordinates.
- **RESTCountries.eu:** To extract country-specific data such as Region, Population, Currency, among others.
- **ExchangeRate-API.com:** To extract the exchange rate of the destination country.

The consumption of the APIs (2 - 4) was done through the **Redux Action / Reducer pattern and with the help of Redux-Thunk**. I share here an example of the form of consumption that I was using:

```javascript
// actions/index.js
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
```
Additionally I separated the code into folders to keep an organized structure. In this way, any visitor can understand the code without problems. The final structure of the project is: 

![TravelDabbleReact](http://www.juliozaravia.com/git-images/TravelDabbleReactList.jpg "TravelDabbleReact")

## 5. Anything else?
- All constructive criticisms are very well received, you can send them to me at julio.zaravia.dev@gmail.com or hey@juliozaravia.com.
- If you're going to criticize this project in an offensive way, please don't do it, remember that no one comes to this world knowing everything.
- If you want to improve the code, you're free to do so, just let me know what you changed or improved so I can learn from you.
- I know my English is a bit poor, but I'm improving little by little. Thanks for understand.
- That's it, I really liked learning from this project and refactoring it, if you took the time to read this, you're a good person and I wish you a good day.
