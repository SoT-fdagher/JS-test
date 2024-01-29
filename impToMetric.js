//Imperial to metric

let m = prompt('Which unit do you want to convert? ');
let n = prompt(`How many ${m}s do you want to convert? `);

if (m === 'feet'){
  console.log(feetToMeters(n) + ' m');
}
else if(m === 'mile'){
  console.log(mileToKm(n) + ' km')
}
else if(m === 'pound'){
    console.log(poundToKg(n) + ' kg');
}
else if(m=== 'gallon'){
    console.log(gallonToL(n) + ' L');
}

function feetToMeters(num){
  return num * 0.3048;
}

function mileToKm(num){
  return num * 1.60934;
}

function poundToKg(num){
  return num * 0.453592;
}

function gallonToL(num){
  return num * 3.78541;
}
