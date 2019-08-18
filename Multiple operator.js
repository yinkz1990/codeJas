let login = prompt("What is your portfolio","Employee");
let message = (login == 'Employee')? "Hello": (login == 'Director')?"Greetings": (login == '')? "No login": "";
alert(message);