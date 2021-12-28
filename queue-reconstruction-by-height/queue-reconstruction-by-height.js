/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let sortedArray = [];
  let peopleLen = people.length;
  for (let i = 0; i < peopleLen; i++) {
    let satisfyArray = [];
    for (let j = 0; j < people.length; j++) {
      if (isSatisfy(sortedArray, people[j])) {
        satisfyArray.push({ people: people[j], index: j });
      }
    }
    if (satisfyArray.length === 1) {
      sortedArray.push(satisfyArray[0].people);
      people.splice(satisfyArray[0].index, 1);
    } else {
      let sortedSatisfy = satisfyArray.sort(
        (a, b) => a.people[0] - b.people[0]
      );
      sortedArray.push(sortedSatisfy[0].people);
      people.splice(sortedSatisfy[0].index, 1);
    }
  }
  return sortedArray;
};

let isSatisfy = function (array, people) {
  let peopleHeight = people[0];
  let peopleOrder = people[1];
  if (array.length === 0) {
    if (peopleOrder === 0) return true;
  } else {
    let greaterOrEqualCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] >= peopleHeight) greaterOrEqualCount += 1;
    }
    if (greaterOrEqualCount === peopleOrder) return true;
    return false;
  }
};