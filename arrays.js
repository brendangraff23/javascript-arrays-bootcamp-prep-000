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