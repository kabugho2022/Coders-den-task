//for loop
for (let i=0; i<=10; i++){
    console.log(i)
}
//while loop
let i=0;
while(i<10){
    i++;
    console.log(i)
}
//do while
let a=0;
do {
    a++;
    console.log(a);
}while(a<10)

for(let b=10; b<=10; b--){
    console.log(b)
}
//while loop
let c =10;
while(c > 0) {
c--;
console.log(c)
}

//do while loop
let d =10;
do{
    d--;
    console.log(d)
}while(d>0)

let n=Number(prompt("enter number"));
for (let i=0; i<7; i++){
    console.log(i);
}

let str="";
for(let i=0; i<7; i++){
    str +="#";
    console.log(str)
}
//multiplication
for(let i=0; i<=10; i++){
    console.log(`${i} *${i}=${i*i}`)
}
//power of 2,3
for(let i=0; i<=10; i++){
    console.log(`${i} ${i**2} ${i**3}`)
}

//print even numbers from 0-100;
for(i=0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    }
}
//print odd numbers
for(i=0; i<=100; i++){
    if(i%2 >0){
        console.log(i)
    }
}
//print prime numbers
for(let i=0; i<=100;i++){
    for(let e=2; e<i; e++){
        if(i%e ===0 && i>1){
            console.log(i)
        }
    }
}

//sum of all numbers
let sum=0;
for(let i=0; i<=100;i++){
    sum +=1;
}
console.log(sum)
//sum of all even and odd numbers
let even=0;
let odd=0;
for(let i=0;i<=100;i++){
    if(i % 2 > 0){
        even+=i;
    }else(i % 2> 0){
        odd+=i
    }
    }
console.log(`the sum of all even number is${even}.And the sum of all odd numbers is${odd}`)
//storing sum of all even/odd numbers in an array
let sumEvenOdd =[0,0]
for(let i=0;i<=100; i++){
    if(i%2==0){
        sumEvenOdd[0] +=i;
    } else if(i % 2>0) {
        sumEvenOdd[1]+=i;
    }
}
console.log(sumEvenOdd)
//array of five random numbers
let randomArr =[];
for(let i=0; i<5; i++){
    randomArr.push(Math.floor(Math.random() *10));
}
console.log(randomArr)
//generating random unique arr
let randomUniqueArr =[];
for(let i=5; randomUniqueArr.length <1;){
    let random=Math.floor(math.random()*10);
    if(randomUniqueArr.indexOf(random)===-1){
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)
//generate 6 random numbers/strings
let chars="0123456578ABCDEFGHIJKLMabcdefghijk"
let randomChars =""
for(let i=0; i<6; i++){
    let random=Math.floor(Math.random() *chars.length);
    randomChars +=chars[random];
}
console.log(randomChars)

let countries=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]
let newCountries =[];
for(let i=0; i<countries.length; i++){
    newCountries.push([countries[i], countries[i].slice(0,3),countries[i].length])
}
console.log(newCountries)
let countWithoutLand=[]
let countWithLand=[]
for(let i=0; i,countries.length; i++){
    if(countries[i].includes("LAND")){
        countWithLand.push(countries[i]);
    }else{
        countWithLand.push(countries[i])
    }
}
let countWithLa=[]
let countWithoutLa=[]
for(let i=0; i<countries.length; i++){
    if(countries[i].includes("IA")){
        countWithLa.push(countries[i]);
    }else{
        countWithoutLa.push(countries[i])
    }
}
console.log(`countries with "ia" ${countWithLa}`);
console.log(`countries without "ia" ${countWithoutLa}`);

let countriesCharLength=[];
for(let i=0; i<countries.length; i++){
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);

let highest;
highestNum=Math.max.apply(null,countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNum)]);

//countries with five char
let countriesWithFiveChars =[];
for(let i=0; i<countries.length; i++){
    if(countries[I].length ===5){
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars)

let webTechs =["html","css","javascript","vue","react","mongobd","angular"];
let webTechsLength=[];
for(let i=0; i<webTechs.length;i++){
    webTechsLength.push(webTechs[i].lenghth);

}
console.log(webTechsLength);
let highestChar;
highestChar=Math.max.apply(null[webTechsLength.indexOf(highestChar)]);
console.log(highestChar)
console.log(webTechs[webTechsLength.indexOf(highestChar)]);

letnewWebTechs =[];
for(let i=0; i<webTechs.length; i++){
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)
let mernStack =["MongoDb","Express","React","Node"]
let mern="";
for(let i=0; i<mernStack.length; i++){
    mern +=mernStack[i].slice(0,0);
}
console.log(mern)
let techs=["HTML","CSS","JS","REACT","REDUX","NODE","EXPRESS","MONGODB"]
for(let i=0; i<techs.length; i++){
    console.log(techs[i])
}
for(let tech of techs){
    console.log(tech);
}
let fruits =['banana','orange','mango','lemon']
for(let i= fruits.length -1;i>=0; i--){
    console.log(fruits[i]);
}