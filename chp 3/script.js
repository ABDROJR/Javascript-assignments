
  //q1
  let age;
  age = 20;
  alert("I am "+ age + " years old ");


  //q2 
let visits = localStorage.getItem('visits');
  if (!visits) {
    visits = 0;
  }


  visits++;

 
  localStorage.setItem('visits', visits);

  document.body.innerHTML = `<b><p>You have visited this site ${visits} times.</p>`;
  
  //q3 

  let birthYear = 2002;
document.write("My birthyear is ",birthYear,"<br>");
document.write("Data type of my declared variable is ",typeof birthYear,"<br>");


let store = " XYZ clothing store";
let visitor_Name = "<strong> Jhon <br> Doe </strong>"; 
let product_Title = " 5 T-shirt (s)"
let quantity = 5;
document.write(visitor_Name, " ","ordered",product_Title,"On",store);