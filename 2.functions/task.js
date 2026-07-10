function getArrayParams(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element > max) {
      max = arr[i];
    };
    if (element < min) {
      min = arr[i];
    };
    sum += element;
  };

  let avg = +(sum / arr.length).toFixed(2);

  return { min, max, avg };
}


function summElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  return arr.reduce((acc, num) => acc + num, 0);
}


function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  let arrayParams = getArrayParams(...arr);
  return arrayParams.max - arrayParams.min;
}


function getEvenOddElements(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  let sumEven = 0;
  let sumOdd = 0;
  let evens = [];
  let odds = [];

  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEven += element;
      evens.push(element);
    } else {
      sumOdd += element;
      odds.push(element);
    }
  });

  return { sumEven, sumOdd, evens, odds };
}


function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  let { sumEven, sumOdd } = getEvenOddElements(...arr);
  return sumEven - sumOdd;

}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  };

  let evens = getEvenOddElements(...arr).evens;
  return getArrayParams(...evens).avg;

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (arr of arrOfArr) {
    let workerResult = func(...arr);

    maxWorkerResult = workerResult > maxWorkerResult ? workerResult : maxWorkerResult;
  }

  return maxWorkerResult;
}

