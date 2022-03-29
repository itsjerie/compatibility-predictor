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

const avg = function(data,n){

//---------Attribute Data from Team---------

  const intel = Object.entries(data.team).map(items => items[1].attributes.intelligence);
  const strong = Object.entries(data.team).map(items => items[1].attributes.strength);
  const endure = Object.entries(data.team).map(items => items[1].attributes.endurance);
  const tolerance = Object.entries(data.team).map(items => items[1].attributes.spicyFoodTolerance);

//---------Averaged Data from Team for Each Attribute---------

  const i = intel.reduce(function(a,b){return Number(a) + Number(b)}) / intel.length;
  const s = strong.reduce(function(a,b){return Number(a) + Number(b)}) / strong.length;
  const e = endure.reduce(function(a,b){return Number(a) + Number(b)}) / endure.length;
  const t = tolerance.reduce(function(a,b){return Number(a) + Number(b)}) / tolerance.length;

//---------Data from Applicants---------

  const names = Object.entries(input.applicants).map(items => items[1]);

//---------Averaged Data from Applicants's Attributes---------

  const a = (Math.abs((i - names[n].attributes.intelligence)/i) + Math.abs((s - names[n].attributes.strength)/s) + Math.abs((e - names[n].attributes.endurance)/e) + Math.abs((t - names[n].attributes.spicyFoodTolerance)/t)) / 4;


  return {
//---------Compatability Score---------
    //intelligence: i,
    //strength: s,
    //endurance: e,
    //spicyFoodTolerance: t,
    name: names[n].name,
    score: a.toFixed(2)
  }
}

const compatible =[];

for(let x=0; x<3; x++){
  compatible.push(avg(input,x));
}

console.log(compatible);
