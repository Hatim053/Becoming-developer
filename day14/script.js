// Accesing element in DOM

const myContainer = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const box1 = document.getElementById('box1');
const box = document.getElementsByTagName('div');
const box2 = document.getElementsByClassName('box2');

// modifying html elements in DOM
// Adding css properties 
myContainer.style.backgroundColor = "red";
// boxes.style.src = "https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35";

// Manuplating classes in Dom
boxes.forEach((item) => {
    item.classList.add("yellow");
})
box1.classList.remove('green');
// box2.classList.toggle('blue');

// Creating An Element and appending it into Dom
const myBox = document.createElement('div');
myBox.append(document.createTextNode("Box6"));
console.log(myBox);
myBox.classList.add('box');
myContainer.append(myBox);
const box7 = document.createElement('div');
box7.append(document.createTextNode('box7'));


// Commonly Used Nodes methods                            
children // - it only includes element child
childNode //- return all the child including text node , comment node , element
childElementCount // - number of child's only element child
firstChild // - returns first child (textnode , comment node , element);
lastChild // - return last Child (textnode , comment node , element);
firstElementChild // - returns first child that is element
lastElementChild // - returns last child that is element
nodeName // - return name of the selected node (text , comment , element)
tagName // - return name of the selected node (only for elements)
parentElement // - returns the parent element of the selected element


// Atributes Method 
myContainer.hasAttribute('class'); // to check whether selected contains the given attribute , return boolean value 
myContainer.getAttribute('class') // return value of the given attribute
myContainer.setAttribute('id' , "gridBox"); // it set the attribute
myContainer.attributes // return all the attributes of the element

// Appending Methods
myContainer.append(box7); // insert's at the last of the element
myContainer.prepend(box7); // insert's at the start of element
myContainer.before(box7); // add's  before the element start's
myContainer.after(box7); // add's after element end's

// Removing Nodes In DOM
box7.remove(); // remove's the node 

//Insert Adjacent Html / Text / Elements
myBox.insertAdjacentElement('beforebegin' , box7); // before the element starts

myBox.insertAdjacentText('afterbegin' , "Hello"); // at the start inside element 
box7.insertAdjacentText('afterend' , "Hellow"); // after element end's (outside the element)
box7.insertAdjacentText('beforeend' , "world"); // at last inside element before the element end's








