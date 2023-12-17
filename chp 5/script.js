
// <!-- q1.q2 -->
let a = 40;
let b = 20;

add = (a + b);
subtract = (a - b);
multplied = (a * b);
divide = (a / b);
modulus = (a % b);

document.write("The sum of a and b is " + add + "<br>", "The subtraction of a and b is " + subtract + "<br>", "The multiplication of a and b is " + multplied + "<br>", "The division of a and b is " + divide + "<br>", "The modulus of a and b is  " + modulus + "<br>","<br>","<br>");
// q3

let variable ;
document.write("Value after variable declaration is ", variable ,"<br>") ;
let val = 5;
document.write("Initial value is ",val, "<br>");
val++;
document.write("Initial value after increment  ",val ,"<br>");
val = val+7;
document.write("Value after addition is  ",val,"<br>" );
val--;
document.write("Value after decrement is  ",val,"<br>" );
val = val%3
document.write("The remainder is  ",val ,"<br>","<br>","<br>","<br>");

// q4

let movie_Ticket;
movie_Ticket = 600;
movie_Ticket = movie_Ticket*5;
document.write("Total cost to buy 5 tickets to a movie is ",movie_Ticket,"<br>")

// q5

let number = 4;
document.write("Table of ",number);
for(let i = 1;i<number;i++)
{
document.write(number,"x"+i+ "= ","<br>");
document.write(number*i);
}

function table(number) {
    for (let i = 0; i <= 10; i++) {
        let result = i * number;
        document.write(`${number} x ${i} = ${result}<br>`);

    }
    document.write("<br>")
}


table(5);


//q6 

let celsiusTemperature = 30;


let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;


document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F", "<br>");

let fahrenheitTemperature2 = 86;


let celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;


document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C", "<br>");

//q7

document.write("<h1> Shopping  Cart</h1> <br>")

let priceofitem_1 = 650;
let quantityofitem_1 = 3;
let priceofitem_2 = 100;
let quantityofitem_2 = 7;
let shippingcharges = 100;
let totalcost = (priceofitem_1 + quantityofitem_1 + priceofitem_2 + quantityofitem_2 + shippingcharges);

document.write("Price of item 1 ", priceofitem_1, "<br>");
document.write("quantity of item 1", quantityofitem_1, "<br>");
document.write("Total cost of your order is ", priceofitem_2, "<br>");
document.write("Total cost of your order is ", quantityofitem_2, "<br>");
document.writeln("shipping charges ", shippingcharges, "<br>");
document.write("Total cost of your order is ", totalcost);

//q8

document.write("<h1>Marksheet</h1><br>");
let totalmarks = 980;
let marksobtained = 804;
let percentage = (marksobtained * 100 / totalmarks);
document.write("Marksobtained = ", marksobtained, "<br>");
document.write("Totalmarks = ", totalmarks, "<br>");
document.write("Percentage = ", percentage, "<br>");

//q9 

document.write("<h1>Currency in Pkr </h1><br>");

let usDollars = 10;
let saudiRiyals = 25;

let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;


let totalInPakistaniRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("Total currency in PKR  " + totalInPakistaniRupees.toFixed(2), "<br>", "<br>");


//q10

let num = 10;
num + 5;
num * 10
num / 2;
let result = (num + 5 * 10 / 2);
document.write(result, "<br>");

//q11
document.write("<h1 >Age Calculator </h1>", "<br>");
let currentyear = 2023;
let birthyear = 2002;
let agecalculate = currentyear - birthyear;
document.write("Your Age is ", agecalculate, "<br>");
//q12

document.write("<h1 >The Geometrizer</h1>", "<br>");
let radiusofcircle = 20;
let circumferenceOfCircle = 2 * 3.142 * radiusofcircle;
let area = 3.142 * radiusofcircle*radiusofcircle;
document.write("The radius of Circle "+radiusofcircle,"<br>","The circumference  is :",circumferenceOfCircle,"<br>","The area is ",area,"<br>")

//q13


document.write("<h1 >The lifetime supply calculator </h1>", "<br>");
let  snack = "Chocolate chip";
document.write("Favourtite snack is ",snack,"<br>");

let  currentAge = 25;
document.write("Current Age is ",currentAge,"<br>")

let  maxAge = 65;
document.write("Estimated maximum age is ",maxAge,"<br>")

let  perDay = 2;
document.write("Amount of snacks perday  ",perDay,"<br>")

let totalSnacks = perDay * (maxAge - currentAge) * 365;
document.write("Total snacks   ",totalSnacks,"<br>")


document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);
