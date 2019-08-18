function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
   if (str.slice(str.length - target.length) === target){
   return true;
  }
  else {
    return false;
  }
}
alert (confirmEnding("Bastian", "n"));
