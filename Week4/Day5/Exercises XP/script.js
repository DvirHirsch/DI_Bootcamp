console.log(`-----*****----- Exercise 1 : Change the navbar -----*****-----`);
/* 

   1. In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
   2. We are going to add a new <li> to the <ul>.
       1. First, create a new <li> tag (use the createElement method).
       2. Create a new text node with “Logout” as its specified text.
       3. Append the text node to the newly created list node (li).
       4. Finally, append this updated list node to the unordered list above, using the appendChild method.
   3. Bonus
       * Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
*/
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');
const firstUl = document.getElementById('firstUl');
const newLi = document.createElement('li');
newLi.innerText = 'Logout';
firstUl.appendChild(newLi);

console.log(`-----*****----- Exercise 2 : Users -----*****-----`);
