var chocoloateBars = ['snickers, hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arrIn, newItem)
{
    arrIn.push(newItem);
    return arrIn;
}

function addElementToBeginningofArray(arrIn, newItem)
{
  var newArray = arrIn.push(newItem);
  return newArray;
}

function accessElementInArray(arr, index)
{
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr)
{
  return arr.slice(1);
}

function removeElementFromBeginningOfArray(arr)
{
  arr.pop();
  return arr;
}