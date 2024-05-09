const n1 = 23;
const n2 = 20;
const n3 = 4;
const n4 = 3;

const isSum50 = (n1 + n2 + n3 + n4) == 50

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(isValid);

if (n1 % 5 === 0 && n4 % 5 === 0)
   {console.log ("yay!")}
 else 
   {console.log ("boo!")}

if (n2 % 5 === 0 || n3 % 5 === 0)
   {console.log ("yay!")}
 else
    {console.log ("boo!")} 

if (n1 > n4)
   {console.log ("yippee!")}
 else
  {console.log (":(")}  
  
let value = (((n1 - n2) * n3) % n4)

console.log(value)

/*total distance*/
const distance = 1500;

/*miles per gallon at that speed*/
const mph55 = 30;
const mph60 = 28;
const mph75 = 23;

/*miles travelled per hour*/
const firstTripmiles = 55;
const secondTripmiles = 60;
const thirdTripmiles = 75;

/*budget*/
const budget = 175;

/*price of fuel*/
const fuelCost = 3;

/*gallons of fuel used at that specific speed for the trip*/
const firstSpeed = (distance / mph55);
const secondSpeed = (distance / mph60);
const thirdSpeed = (distance / mph75);

/*will budget be enough to cover the fuel expense at that speed*/
const firstTrip = (firstSpeed * fuelCost <= budget)
const secondTrip = (secondSpeed * fuelCost <= budget)
const thirdTrip = (thirdSpeed * fuelCost <= budget)

/*how long will the trip take, in hours*/
const firstTripHours = (distance / firstTripmiles)
const secondTripHours = (distance / secondTripmiles)
const thirdTripHours = (distance / thirdTripmiles)

console.log(
    `It will take ${firstSpeed} gallons of fuel going at 55 mph.
    It will take ${secondSpeed} gallons of fuel going at 60 mph.
    It will take ${thirdSpeed} gallons of fuel going at 75 mph.`
)
console.log(
    `first trip budget/cost: ${firstTrip}
    second trip budget/cost: ${secondTrip}
    third trip budget/cost: ${thirdTrip}`
)
console.log(
    `The first trip would take ${firstTripHours} hours.
    The second trip would take ${secondTripHours} hours.
    The third trip would take ${thirdTripHours} hours.`
)