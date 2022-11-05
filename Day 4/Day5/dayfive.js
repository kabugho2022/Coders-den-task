let number =[]
console.log(number)

 let softDrinks=["pepsi","coke","fanta","sprite","krest" ,"stoney"]
console.log(softDrinks)
console.log(softDrinks.length)
let firstItem=console.log(softDrinks[0])
let middleItem=console.log(softDrinks[3])
let lastItem=console.log(softDrinks[softDrinks.length-1])

let mixedDataTypes=["judith",12,false,null,undefined,{favouriteColor:["blue","emerald","pink"]}]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)
 
let itCompanies=["facebook","google","microsoft","apple","ibm","Oracle","amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
let firstCompany=console.log(itCompanies[0])
let middleCompany=console.log(itCompanies[4])
let lastCompany=console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

let sentence =("Facebook,Google,Microsoft,Apple,IBM,Oracle and Amazon are big IT companies")
console.log(sentence)
let searchTechcompanies=prompt("enter company to search");
if (itCompanies.includes(searchTechcompanies)){
    console.log(searchTechcompanies)
}else{
    console.log("company not found")
}

let oo=[]
for(let i=0; i < itCompanies.length; i++){
    oo.push(itCompanies[i].includes("oo"));
}
itCompanies.sort();
itCompanies.reverse();
itCompanies.slice(0,3)
itCompanies.slice(itCompanies.length -1,3)
itCompanies.slice(math.floor(itCompanies.length /2),1)
itCompanies.pop()   
itCompanies.length=0;

let text ="i love teaching and empowering people. i teach html,css,javascript,react,python"
text.split("")
console.log(text.length)

let shoppingCart=["milk","coffee","tea","honey"]
shoppingCart.unshift("meat")
shoppingCart.push("sugar")
shoppingCart[shoppingCart.indexOf(tea)]="green tea"

let frontend =['HTML','CSS','JS','REACT','READUX']
let backend=['Node','Express','MongoDB']
console.log(frontend.concat(backend));

let ages =[19,22,19,24,20,25,26,24,25,24]
let minAge=ages.sort()[0]
let maxAge =ages.sort()[ages.length-1]
console.log(minAge)
console.log(maxAge)
let medianAge =ages[math.floor(ages.length / 2)]
console.log(medianAge)
let avgAge;
for (i =0; i <ages.length; i++){
    let totalAge =0;
    totalAge +=ages[1];
    avgAge =totalAge /ages.length;
}
console.log(avgAge)
let range =maxAge-minAge;
console.log(range)
let ma =abs(minAge-avgAge)
let maa=abs(maxAge-avgAge)
console.log(ma)
console.log(maa)