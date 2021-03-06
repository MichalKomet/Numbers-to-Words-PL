const toNumber = require('../NumbersToWordsPL');

test('It should translate one digit number', () => {
	expect(toNumber(0)).toBe('zero')
	expect(toNumber(1)).toBe('jeden')
	expect(toNumber(2)).toBe('dwa')
	expect(toNumber(3)).toBe('trzy')
	expect(toNumber(4)).toBe('cztery')
	expect(toNumber(5)).toBe('pięć')
	expect(toNumber(6)).toBe('sześć')
	expect(toNumber(7)).toBe('siedem')
	expect(toNumber(8)).toBe('osiem')
	expect(toNumber(9)).toBe('dziewięć')
});

test('It should translate numbers from 10 do 19', () => {
	expect(toNumber(10)).toBe('dziesięć')
	expect(toNumber(11)).toBe('jedenaście')
	expect(toNumber(12)).toBe('dwanaście')
	expect(toNumber(13)).toBe('trzynaście')
	expect(toNumber(14)).toBe('czternaście')
	expect(toNumber(15)).toBe('piętnaście')
	expect(toNumber(16)).toBe('szesnaście')
	expect(toNumber(17)).toBe('siedemnaście')
	expect(toNumber(18)).toBe('osiemnaście')
	expect(toNumber(19)).toBe('dziewiętnaście')
});

test('It should translate dozens of numbers', () => {
	expect(toNumber(10)).toBe('dziesięć')
	expect(toNumber(20)).toBe('dwadzieścia')
	expect(toNumber(30)).toBe('trzydzieści')
	expect(toNumber(40)).toBe('czterdzieści')
	expect(toNumber(50)).toBe('pięćdziesiąt')
	expect(toNumber(60)).toBe('sześćdziesiąt')
	expect(toNumber(70)).toBe('siedemdziesiąt')
	expect(toNumber(80)).toBe('osiemdziesiąt')
	expect(toNumber(90)).toBe('dziewięćdziesiąt')
});

test('It should translate random from dozens of numbers', () => {
	expect(toNumber(23)).toBe('dwadzieścia trzy')
	expect(toNumber(31)).toBe('trzydzieści jeden')
	expect(toNumber(39)).toBe('trzydzieści dziewięć')
	expect(toNumber(44)).toBe('czterdzieści cztery')
	expect(toNumber(56)).toBe('pięćdziesiąt sześć')
	expect(toNumber(67)).toBe('sześćdziesiąt siedem')
	expect(toNumber(78)).toBe('siedemdziesiąt osiem')
	expect(toNumber(89)).toBe('osiemdziesiąt dziewięć')
	expect(toNumber(92)).toBe('dziewięćdziesiąt dwa')
});

test('It should translate hundreds of numbers', () => {
	expect(toNumber(100)).toBe('sto')
	expect(toNumber(200)).toBe('dwieście')
	expect(toNumber(300)).toBe('trzysta')
	expect(toNumber(400)).toBe('czterysta')
	expect(toNumber(500)).toBe('pięćset')
	expect(toNumber(600)).toBe('sześćset')
	expect(toNumber(700)).toBe('siedemset')
	expect(toNumber(800)).toBe('osiemset')
	expect(toNumber(900)).toBe('dziewięćset')
});

test('It should translate random from hundreds of numbers', () => {
	expect(toNumber(101)).toBe('sto jeden')
	expect(toNumber(113)).toBe('sto trzynaście')
	expect(toNumber(224)).toBe('dwieście dwadzieścia cztery')
	expect(toNumber(335)).toBe('trzysta trzydzieści pięć')
	expect(toNumber(446)).toBe('czterysta czterdzieści sześć')
	expect(toNumber(557)).toBe('pięćset pięćdziesiąt siedem')
	expect(toNumber(668)).toBe('sześćset sześćdziesiąt osiem')
	expect(toNumber(779)).toBe('siedemset siedemdziesiąt dziewięć')
	expect(toNumber(880)).toBe('osiemset osiemdziesiąt')
	expect(toNumber(919)).toBe('dziewięćset dziewiętnaście')
});

test('It should translate thousands of numbers', () => {
	expect(toNumber(1000)).toBe('tysiąc')
	expect(toNumber(2000)).toBe('dwa tysiące')
	expect(toNumber(3000)).toBe('trzy tysiące')
	expect(toNumber(4000)).toBe('cztery tysiące')
	expect(toNumber(5000)).toBe('pięć tysięcy')
	expect(toNumber(6000)).toBe('sześć tysięcy')
	expect(toNumber(7000)).toBe('siedem tysięcy')
	expect(toNumber(8000)).toBe('osiem tysięcy')
	expect(toNumber(9000)).toBe('dziewięć tysięcy')
	expect(toNumber(10000)).toBe('dziesięć tysięcy')
	expect(toNumber(11000)).toBe('jedenaście tysięcy')
	expect(toNumber(12000)).toBe('dwanaście tysięcy')
	expect(toNumber(13000)).toBe('trzynaście tysięcy')
	expect(toNumber(14000)).toBe('czternaście tysięcy')
	expect(toNumber(15000)).toBe('piętnaście tysięcy')
	expect(toNumber(16000)).toBe('szesnaście tysięcy')
	expect(toNumber(17000)).toBe('siedemnaście tysięcy')
	expect(toNumber(18000)).toBe('osiemnaście tysięcy')
	expect(toNumber(19000)).toBe('dziewiętnaście tysięcy')
	expect(toNumber(10000)).toBe('dziesięć tysięcy')
	expect(toNumber(20000)).toBe('dwadzieścia tysięcy')
	expect(toNumber(23000)).toBe('dwadzieścia trzy tysiące')
	expect(toNumber(30000)).toBe('trzydzieści tysięcy')
	expect(toNumber(40000)).toBe('czterdzieści tysięcy')
	expect(toNumber(50000)).toBe('pięćdziesiąt tysięcy')
	expect(toNumber(60000)).toBe('sześćdziesiąt tysięcy')
	expect(toNumber(70000)).toBe('siedemdziesiąt tysięcy')
	expect(toNumber(80000)).toBe('osiemdziesiąt tysięcy')
	expect(toNumber(90000)).toBe('dziewięćdziesiąt tysięcy')
	expect(toNumber(100000)).toBe('sto tysięcy')
	expect(toNumber(123000)).toBe('sto dwadzieścia trzy tysiące')
	expect(toNumber(200000)).toBe('dwieście tysięcy')
	expect(toNumber(300000)).toBe('trzysta tysięcy')
	expect(toNumber(400000)).toBe('czterysta tysięcy')
	expect(toNumber(500000)).toBe('pięćset tysięcy')
	expect(toNumber(600000)).toBe('sześćset tysięcy')
	expect(toNumber(700000)).toBe('siedemset tysięcy')
	expect(toNumber(800000)).toBe('osiemset tysięcy')
	expect(toNumber(900000)).toBe('dziewięćset tysięcy')
});

test('It should translate random from thousands of numbers', () => {
	expect(toNumber(1910)).toBe('tysiąc dziewięćset dziesięć')
	expect(toNumber(2821)).toBe('dwa tysiące osiemset dwadzieścia jeden')
	expect(toNumber(3732)).toBe('trzy tysiące siedemset trzydzieści dwa')
	expect(toNumber(4643)).toBe('cztery tysiące sześćset czterdzieści trzy')
	expect(toNumber(5554)).toBe('pięć tysięcy pięćset pięćdziesiąt cztery')
	expect(toNumber(6465)).toBe('sześć tysięcy czterysta sześćdziesiąt pięć')
	expect(toNumber(7376)).toBe('siedem tysięcy trzysta siedemdziesiąt sześć')
	expect(toNumber(8287)).toBe('osiem tysięcy dwieście osiemdziesiąt siedem')
	expect(toNumber(9198)).toBe('dziewięć tysięcy sto dziewięćdziesiąt osiem')
	expect(toNumber(10013)).toBe('dziesięć tysięcy trzynaście')
	expect(toNumber(10040)).toBe('dziesięć tysięcy czterdzieści')
	expect(toNumber(11437)).toBe('jedenaście tysięcy czterysta trzydzieści siedem')
	expect(toNumber(12548)).toBe('dwanaście tysięcy pięćset czterdzieści osiem')
	expect(toNumber(13659)).toBe('trzynaście tysięcy sześćset pięćdziesiąt dziewięć')
	expect(toNumber(14760)).toBe('czternaście tysięcy siedemset sześćdziesiąt')
	expect(toNumber(15871)).toBe('piętnaście tysięcy osiemset siedemdziesiąt jeden')
	expect(toNumber(16982)).toBe('szesnaście tysięcy dziewięćset osiemdziesiąt dwa')
	expect(toNumber(17093)).toBe('siedemnaście tysięcy dziewięćdziesiąt trzy')
	expect(toNumber(18104)).toBe('osiemnaście tysięcy sto cztery')
	expect(toNumber(19215)).toBe('dziewiętnaście tysięcy dwieście piętnaście')
	expect(toNumber(20326)).toBe('dwadzieścia tysięcy trzysta dwadzieścia sześć')
	expect(toNumber(23326)).toBe('dwadzieścia trzy tysiące trzysta dwadzieścia sześć')
	expect(toNumber(30734)).toBe('trzydzieści tysięcy siedemset trzydzieści cztery')
	expect(toNumber(40825)).toBe('czterdzieści tysięcy osiemset dwadzieścia pięć')
	expect(toNumber(50916)).toBe('pięćdziesiąt tysięcy dziewięćset szesnaście')
	expect(toNumber(60027)).toBe('sześćdziesiąt tysięcy dwadzieścia siedem')
	expect(toNumber(70138)).toBe('siedemdziesiąt tysięcy sto trzydzieści osiem')
	expect(toNumber(80264)).toBe('osiemdziesiąt tysięcy dwieście sześćdziesiąt cztery')
	expect(toNumber(90555)).toBe('dziewięćdziesiąt tysięcy pięćset pięćdziesiąt pięć')
});

test('It should translate random from hundred thousands of numbers', () => {
	expect(toNumber(101278)).toBe('sto jeden tysięcy dwieście siedemdziesiąt osiem')
	expect(toNumber(213789)).toBe('dwieście trzynaście tysięcy siedemset osiemdziesiąt dziewięć')
	expect(toNumber(314159)).toBe('trzysta czternaście tysięcy sto pięćdziesiąt dziewięć')
	expect(toNumber(444444)).toBe('czterysta czterdzieści cztery tysiące czterysta czterdzieści cztery')
	expect(toNumber(572381)).toBe('pięćset siedemdziesiąt dwa tysiące trzysta osiemdziesiąt jeden')
	expect(toNumber(629178)).toBe('sześćset dwadzieścia dziewięć tysięcy sto siedemdziesiąt osiem')
	expect(toNumber(789456)).toBe('siedemset osiemdziesiąt dziewięć tysięcy czterysta pięćdziesiąt sześć')
	expect(toNumber(852024)).toBe('osiemset pięćdziesiąt dwa tysiące dwadzieścia cztery')
	expect(toNumber(904100)).toBe('dziewięćset cztery tysiące sto')
	expect(toNumber(999999)).toBe('dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć')
});
