// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
    categories: ['man', 'physicist'],
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
    categories: ['man', 'mathematician'],
  },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
    categories: ['woman', 'physicist'],
  },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
    categories: ['woman', 'physicist'],
  },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
    categories: ['woman', 'physicist'],
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
    categories: ['woman', 'inventor'],
  },
];

// ---------------------------------TASK 1---------------------------------
// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

const filterOne = inventors.filter((i) => i.year >= 1500 && i.year <= 1600);
// console.log(filterOne);

// ---------------------------------TASK 2---------------------------------
// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton

const filterTwo = inventors.filter(
  (i) => i.categories && i.categories.includes('mathematician')
);

// const filterMath = inventors.filter((i) =>
//   i.categories?.includes('mathematician')
// );

// console.log(filterMath);

// ---------------------------------TASK 3---------------------------------
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

const filter3 = inventors.filter(
  (i) => i.categories?.includes('physicist') && i.categories?.includes('man')
);

// console.log(filter3);

// ---------------------------------TASK 4---------------------------------
// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

const fullNames = inventors.map((i) => `${i.first} ${i.last}`);
// console.table(fullNames);

// ---------------------------------TASK 5---------------------------------
// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

const emails = inventors.map(
  (i) => `${i.first.toLowerCase()}${i.year}@inventor.com`
);
// console.table(emails);

// ---------------------------------TASK 6---------------------------------
// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"

let numbers = [3, 1, 5, 8, 2, 6, 9, 4];
numbers.sort();
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
// console.log(numbers);

// const sortedBirthdate = inventors.sort((a, b) => b.year - a.year); // aufsteigend
// const sortedBirthdate2 = inventors.sort((a, b) => a.year - b.year); // absteigend
// console.table(sortedBirthdate);

// ---------------------------------TASK 7--------------------------------
// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?

const totalYears = inventors.reduce(
  (total, i) => total + (i.passed - i.year),
  0
);
// console.log(totalYears);

const years = inventors.reduce((acc, i) => {
  const age = i.passed - i.year;
  //   console.log(i.passed - i.year);
  acc += age;
  //   console.log(acc);
  return acc;
}, 0);

// console.log(years);

// ---------------------------------TASK 8--------------------------------
// Array.prototype.sort()
// 8. Sort the inventors by years lived

const sortedByYearsLived = inventors.sort((a, b) => {
  const lastInventorAge = b.passed - b.year;
  const firstInventorAge = a.passed - a.year;
  return lastInventorAge - firstInventorAge;
});

// console.table(sortedByYearsLived);
// console.log('oldest:', 1968 - 1878);
// console.log('youngest:', 1852 - 1815);

// ---------------------------------TASK 9--------------------------------
// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

// ---------------------------------TASK 10--------------------------------
// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const withDE = boulevardsInParis.filter((boulevard) =>
  boulevard.includes('de')
);

// console.log(withDE);

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'AAAAA, BBBBBB',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
  'Baxxx, Person',
];

// console.log(people.sort());

// ---------------------------------TASK 11--------------------------------
// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  { name: 'Lily', year: 2009 },
  { name: 'Leah', year: 2011 },
  { name: 'Liv', year: 2000 },
  { name: 'Lydia', year: 2015 },
];

const currentYear = 2024;
const adult = family.some((i) => currentYear - i.year >= 18);
// console.log(adult);

// ---------------------------------TASK 12--------------------------------
// Array.prototype.every
// 13. Do all names of the family members start with the letter L?

const withL = family.every((i) => i.name.startsWith('L'));
// console.log(withL);
