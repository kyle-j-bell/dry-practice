function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compare(num1, num2);
  if (bigNum) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = compare(num1, num2);
  if (bigNum) {
    return num1 / 3;
  } else {
    return num2 / 3;
  }
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compare(sum1, sum2)
  if (bigNum) {
    return `I ate ${sum1} tacos.`;
  } else {
    return `I ate ${sum2} tacos.`;
  }
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compare(weight1, weight2);
  if (!smallDog) {
    return `I adopted a dog that weighs ${weight1} pounds.`;
  } else {
    return `I adopted a dog that weighs ${weight2} pounds.`;
  }
}

//Returns Boolean of num1 greater than num2.
//Allows user to get larger (or smaller in the case of adoptSmallerDog) of both parameters using a single function and a simpler 'if' statement compared to the original implementations.
function compare(num1, num2) {
  return num1 > num2;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
