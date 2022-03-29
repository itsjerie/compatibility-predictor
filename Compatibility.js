const input = {
  "team" : [
    {
      "name": "Eddie",
      "attributes": {
        "intelligence": 1,
        "strength": 5,
        "endurance": 3,
        "spicyFoodTolerance": 1
      }
    }, {
      "name": "Will",
      "attributes": {
        "intelligence": 9,
        "strength": 4,
        "endurance": 1,
        "spicyFoodTolerance": 6
      }
    }, {
      "name": "Mike",
      "attributes": {
        "intelligence": 3,
        "strength": 2,
        "endurance": 9,
        "spicyFoodTolerance": 5
      }
    }
  ],
  "applicants": [
    {
      "name": "John",
      "attributes": {
        "intelligence": 4,
        "strength": 5,
        "endurance": 2,
        "spicyFoodTolerance": 1
      }
    }, {
      "name": "Jane",
      "attributes": {
        "intelligence": 7,
        "strength": 4,
        "endurance": 3,
        "spicyFoodTolerance": 2
      }
    }, {
      "name": "Joe",
      "attributes": {
        "intelligence": 1,
        "strength": 1,
        "endurance": 1,
        "spicyFoodTolerance": 10
      }
    }
  ]
};

//console.log(input);

const average = function(data,num){

//---------Attribute Data from Team---------

  const intelData = Object.entries(data.team).map(items => items[1].attributes.intelligence);
  const strenData = Object.entries(data.team).map(items => items[1].attributes.strength);
  const endureData = Object.entries(data.team).map(items => items[1].attributes.endurance);
  const toleranceData = Object.entries(data.team).map(items => items[1].attributes.spicyFoodTolerance);

//---------Averaged Data from Team for Each Attribute---------

  const intelAvg = intelData.reduce(function(a,b){return Number(a) + Number(b)}) / intelData.length;
  const strenAvg = strenData.reduce(function(a,b){return Number(a) + Number(b)}) / strenData.length;
  const endureAvg = endureData.reduce(function(a,b){return Number(a) + Number(b)}) / endureData.length;
  const toleranceAvg = toleranceData.reduce(function(a,b){return Number(a) + Number(b)}) / toleranceData.length;

//---------Data from Applicants---------

  const names = Object.entries(input.applicants).map(items => items[1]);

//---------Averaged Data from Applicants's Attributes---------

  const appAvg = (Math.abs((intelAvg - names[num].attributes.intelligence)/intelAvg) + Math.abs((strenAvg - names[num].attributes.strength)/strenAvg) + Math.abs((endureAvg - names[num].attributes.endurance)/endureAvg) + Math.abs((toleranceAvg - names[num].attributes.spicyFoodTolerance)/toleranceAvg)) / 4;


  return {
//---------Compatability Score---------
    //intelligence: i,
    //strength: s,
    //endurance: e,
    //spicyFoodTolerance: t,
    name: names[num].name,
    score: appAvg.toFixed(2)
  }
}

const compatible =[];

for(let x=0; x<3; x++){
  compatible.push(average(input,x));
}

console.log(compatible);
