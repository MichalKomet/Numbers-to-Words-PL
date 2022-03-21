const units = ['dziesiąt', 'sta', 'set', 'tysiące', 'tysięcy'];


const main = {
	0: 'zero',
	1: 'jeden',
	2: 'dwa',
	3: 'trzy',
	4: 'cztery',
	5: 'pięć',
	6: 'sześć',
	7: 'siedem',
	8: 'osiem',
	9: 'dziewięć',
	10: 'dziesięć',
	11: 'jedenaście',
	12: 'dwanaście',
	13: 'trzynaście',
	14: 'czternaście',
	15: 'piętnaście',
	16: 'szesnaście',
	17: 'siedemnaście',
	18: 'osiemnaście',
	19: 'dziewiętnaście',
	20: 'dwadzieścia',
	30: 'trzydzieści',
	40: 'czterdzieści',
	100: 'sto',
	200: 'dwieście',
	1000: 'tysiąc'
};

const oneDigits = (number) => {
	return main[Object.keys(main)[number]];
};

const twoDigits = (digits, number) => {
	if(digits[0] === 1 || digits[0] === 0) {
		return main[number];
	} else if(digits[0] <= 4) {
		return digits[1] !== 0
			? `${main[digits[0] * 10]} ${oneDigits(digits[1])}`
			: main[number];
	} else {
		return digits[1] !== 0
			? `${main[digits[0]] + units[0]} ${oneDigits(digits[1])}`
			: main[digits[0]] + units[0];
	}
};

const threeDigits = (digits) => {
	if(digits[0] <= 2) {
		return main[digits[0] * 100];
	} else if(digits[0] <= 4) {
		return main[digits[0]] + units[1];
	} else {
		return main[digits[0]] + units[2];
	}
};

const fourDigits = (digits) => {
	const lastPart = handleThreeDigitsNumbers([digits[1], digits[2], digits[3]]);
	if(digits[0] === 1 && lastPart === 'zero') {
		return main[digits[0] * 1000];
	} else if(digits[0] <= 4 && lastPart === 'zero') {
		return `${main[digits[0]]} ${units[3]}`;
	} else if(digits[0] > 4 && lastPart === 'zero') {
		return `${main[digits[0]]} ${units[4]}`;
	} else if(digits[0] === 1 && lastPart !== 'zero') {
		return `${main[digits[0] * 1000]} ${lastPart}`;
	} else if(digits[0] <= 4 && lastPart !== 'zero') {
		return `${main[digits[0]]} ${units[3]} ${lastPart}`;
	} else {
		return `${main[digits[0]]} ${units[4]} ${lastPart}`;
	}
};

const fiveDigits = (digits, number) => {
	const lastPart = handleThreeDigitsNumbers([digits[2], digits[3], digits[4]]);
	const firstPart = twoDigits([digits[0], digits[1]], number);
	if(firstPart === 'zero' && lastPart === 'zero') {
		return units[4];
	} else {
		return lastPart === 'zero'
			? (digits[0] !== 1 && (digits[1] >= 2 && digits[1] <= 4)
				? `${firstPart} ${units[3]}`
				: `${firstPart} ${units[4]}`)
			: (digits[0] !== 1 && (digits[1] >= 2 && digits[1] <= 4)
				? `${firstPart} ${units[3]} ${lastPart}`
				: `${firstPart} ${units[4]} ${lastPart}`);
	}
};

const sixDigits = (digits) => {
	return `${threeDigits([digits[0]])} ${fiveDigits(digits.slice(1), handleNumber(digits[1], digits[2]))}`;
};

const handleNumber = (first, second, third) => {
	return parseInt([first, second, third].join(''), 10);
};

const handleThreeDigitsNumbers = (digits) => {
	const lastTwo = handleNumber(digits[1], digits[2]);
	if(digits[0] !== 0) {
		return (lastTwo !== 0)
			? `${threeDigits(digits)} ${twoDigits([digits[1], digits[2]], lastTwo)}`
			: threeDigits(digits)
	} else {
		return `${twoDigits([digits[1], digits[2]], lastTwo)}`;
	}
};

module.exports = (number) => {
	const digits = Math.floor(number).toString().split('').map(Number);

	switch(digits.length) {
		case 1:
			return oneDigits(number);
		case 2:
			return twoDigits(digits, number);
		case 3:
			return handleThreeDigitsNumbers(digits);
		case 4:
			return fourDigits(digits);
		case 5:
			const firstTwo = handleNumber(digits[0], digits[1]);
			return fiveDigits(digits, firstTwo);
		case 6:
			return sixDigits(digits);
		default:
			return;
	}
};


