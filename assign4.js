function cubeNumber(number) {
    if (typeof number == "string") {
        return "Invalid input";
    }
    else{
        number = number*number*number;
    }

    return number;

}

const value = 3;
const cube = cubeNumber(value);  
console.log(cube);

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Input is invalid";
    }
    else {
        result = string1.includes(string2);
    }
    return result;
}

const string1 = "JavaScript";
const string2 = 8;

const results = matchFinder(string1, string2);
console.log(results);

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'incorrect input';
    }
    else if (arr.length !== 2 || typeof arr[0] !== "number" || typeof arr[1] !== "number") {
        return 'please insert exact value'
    } else if (arr[0] < 0 || arr[1] < 0) {
        return "invalid Input"
    } else {
        if (arr[0] === arr[1]) {
            return 'equal';
        }
        else if(arr[0]>arr[1]){
            return arr=[arr[0],arr[1]]
        }
        else{
            return arr=[arr[1],arr[0]];
        }
    }
}

console.log(sortMaker([12,12]));

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Provide a valid object.' ;
    }
    else {
        const result = (obj.street || "_") +","+(obj.house || "_")+","+(obj.society || "_");

        return result;
    }
  }

  function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return "insert valid value";
    }
    else {
        let totalChangeArray = 0;
        for (var i = 0; i < changeArray.length; i++) {
            totalChangeArray += changeArray[i];
        }
        if (totalChangeArray >= totalDue) {
            return true;
        }
        else{
            return false; 
        }
    }
  }
  
  var changeArray = [0, 4, 5];
  var totalDue = 10;
  var result = canPay(changeArray, totalDue);
  console.log(result);

