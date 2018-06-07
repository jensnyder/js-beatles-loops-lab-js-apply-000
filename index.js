function theBeatlesPlay(musicians, instruments) {
  var array = [];
<<<<<<< HEAD
  for (var i=0; i < musicians.length; i++) {
=======
  for (var i=0; i < 4; i++) {
>>>>>>> cf30f47dfc258f8616b2c97da367270eb44a4f8a
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsExclamation = [];
  while (i < facts.length) {
    factsExclamation[i] = facts[i] + "!!!";
    i++;
  }
  return factsExclamation;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
return array;
}