
let numPeopleDiv = document.getElementById('numberOfPeople');

const calculateBill = () => {
  // // get bill from user input & convert it into a number
  let billTotal = parseInt(document.getElementById('billTotalInput').value)
  // // get the tip from user &  get the total tip amount
  let tip = parseInt(document.getElementById('tipInput').value);
  tip /= 100;
  tip = tip * billTotal;
  // // calculate the total (tip amount + bill)
  billTotal += tip;
  // // calculate the per person total (total divided by number of people)
  let numPeople = parseInt(numPeopleDiv.innerText);
  perPerson = billTotal/numPeople;
  perPerson = Math.round((perPerson + Number.EPSILON) * 100) / 100;
  // // update the perPersonTotal on DOM & show it to user
  document.getElementById('perPersonTotal').innerText = perPerson.toString();
}

// increases number of people
const increasePeople = () => {
  // num populated with number of people incremented by one
  temp = parseInt(numPeopleDiv.innerText)+1;
  //modification of inner text to reflect changed num
  numPeopleDiv.innerText = temp.toString();
  // call calculate function to reflect new total per person
  calculateBill();
}

// decreases number of people
const decreasePeople = () => {
  //perform decrement of numPeople if num is greater than one
  if(parseInt(numPeopleDiv.innerText)>1){
   temp = parseInt(numPeopleDiv.innerText)-1;
    numPeopleDiv.innerText = temp.toString();
  }
  // call calculate function to reflect new total per person
  calculateBill();
}

