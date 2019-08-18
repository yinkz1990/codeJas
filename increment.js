// using postfix and prefix increment
// condition in which their uses are thesame

let incrementX = 2;
++incrementX;
alert(incrementX);

let incrementY = 2;
incrementY++;
alert(incrementY);

// condition in which they are different is when the are assigned to variables or printed directly

let incrementX = 2;
incrementX = ++incrementX;
alert(incrementX); // 3

let incrementY = 2;
incrementY = incrementY++;
alert(incrementY); // 2