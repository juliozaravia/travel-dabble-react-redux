export const populationFormatter = function (population) {
	let formattedPopulation;
	if (Number(population) >= 1000000000) {
		formattedPopulation = (Number(population) / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
	} else if (Number(population) >= 1000000) {
		formattedPopulation = (Number(population) / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
	} else if (Number(population) >= 1000) {
		formattedPopulation = (Number(population) / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
	}
	return formattedPopulation;
};