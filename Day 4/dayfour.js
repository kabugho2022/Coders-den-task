let age =Number(prompt("enter age"));
if(age > 18){
    console.log("you are old enough to drive")
}else{
    console.log(`you are left with ${18-age} years to drive`)
}

let yourAge=30;
if (age > yourAge){
    console.log("i'm older than you with ${age-yourAge}")
}else{
    console.log(`you are ${yourAge-age} years older than me`)
}

let a = 4;
let b = 3;
if(a > b) {
    console.log("a is greater than b");
}else{
    console.log("a is less than b");

}
//ternary
(a > b) ? console.log("a is greater thyan b"): console.log("a is greater than b"): console.log("a is less than b");

//even and odd 
let num =Number(prompt("enter number to know if its even/odd"))
if (num % 2 ===0) {
    console.log(`${num} is an even number`)
}else if (num % 2 !== 0){
console.log(`${num} is an odd number`)
}

let score =Number(prompt("enter your score"));
switch(true){
    case score > 80:
    console.log("A");
    break;
    case score > 70:
    console.log("B");
    break;
    case score > 60:
    console.log("C");
    break;
    case score >50:
    console.log("D");
    break;
    case(score < 50):
    console.log("F")
    break;
    default:
        console.log("no score assigned")

}
//check weekend
let weekDay =prompt("enter weekDay to check if its a weekend")
if(weekDay == "saturday"|| weekDay == "sunday") {
    console.log(`${weekDay} is weekend day`)
}else if(weekDay == "monday" || weekDay =="tuesday" || weekDay =="wednesday" || weekDay =="thursday"|| weekDay =="friday" ) {
    console.log(`${weekDay} is a work day`)
} else{
    console.log("invalid weekDay")
}

//checkDays in month
let month = prompt("enter month to check number of days");
switch (month) {
    case "january":
    case "march":
    case "may": 
    case "july": 
    case "august":
    case "october": 
    case "december": 
    console.log(`${month} has 31 days`)
    break;
    case "april":
    case "june": 
    case "september":
    case "november": 
    console.log(`${month} has 30 days`)
    break;
    case "february": 
    console.log(`${month} has 29 days`)
    break;
    default:
    console.log("invalid month entered")
}

