/*Client side JavaScript*/
//****************** main.js ****************************
            /*Selectors*/
const 🍓 = document.querySelectorAll(""); // returns a node-list
const 🍓 = document.querySelector(""); 
const 🍓 = document.getElementById("");
const 🍓 = document.getElementsByClassName("");
const 🍓 = document.getElementsByTagName("");





            //with JQuery 
//wrap all JQuery code in the following line 
$(document).ready(function (){
    //JQuery code goes here 
}) //JQuery code will only run after document has loaded 
$(function (){
    //alternative to the above function 
})
const 🍓 = $('css selector'); //returns a nodelist if there are more than one and all methods are executed on each item automatically without looping 
🍓.hide(); 🍓.show(); 🍓.toggle(); .fadeOut() .fadeIn() .slideUp(); .slideDown(); .slideToggle(); .draggable(); .droppable(); //these methods can have speed ('fast' | 'slow' | x in ms) and callback parameters. we put droppable on an element we want to house a draggable element 
🍓.datpicker();
🍓.css('css property', 'property value'); //you can replace the content of the bracket with an object of the key value pairs 
🍓.attr('attribute name', 'attribute value'); //if it wasn't there we will be adding it else we create a new one 
🍓.addClass('className'); 
.removeClass('className');
.toggleClass('className'); 
🍓.before('html code'); //to add html before or after the selected element 
🍓.text('text content'); //for innerText 
🍓.html('html code'); //for innerHTML 
🍓.val() //value of html element 
🍓.click(function(){
    ${this} //this here refers to the element 
}) //for events 
🍓.on('click', function(){
    either click | keyup | keydown | keypress | 
})




//note that all 🍓 become like the document object as you can use 🍓.querySelector etc. to get it's children / nodes .
//if you are creating an element dynamically, you should select the element after it has been created.
//initialize text content, style value
let
//re-initialize
if (🍟 > 🍋.length - 1) {
    //initialize
}

//selector modifiers
🍓.addEventListener('🐘', e => {
    🐘 | click | change | keyup | keydown |
    e.target | e.currentTarget //these could selectors on their own so we have a new 🍓. currentTarget returns the element that was clicked on target returns the part of the element that was clicked on
})
window.addEventListener('🤡', e=> {
    🤡 | DOMContentLoaded | load | scroll // DOMContentLoaded says this when all HTML of the page have finished loading minus stylesheets, images and subframes(dependent resources) while load waits for dependent resources and fires at slow 3G in network tab (typically used for preloaders). scroll says as the user scroll the page, run this function.
    window.scrollTo({
        //scroll the page to theae coordinates
        left:,
        right:,
        top:,
        bottom:,
    })
})

//html in js
🍓.textContent = ``;
🍓.innerHTML = ``;
🍓.value = ``; //🍓 has to be an input element where all values of inputs are strings
🍓.appendChild(🍒); | 🍓.removeChild(🍒)

//css in js (js styling are on the same cascading level as in line styles )
🍓.classList | 🍓.classList.contains('') | 🍓.classList.toggle("") | 🍓.classList.remove('') | 🍓.classList.add('') |
🍓
🍓.style.cssStyleProperty = ``;

//traversing the dom
🍓.parentElement | 🍓.parentElement.parentElement
🍓.dataset //To use this, you have to have a data-dataVariable = "dataValue" in the html attribute. This will return an object where the key is dataVariable and the value is dataValue
🍓.getBoundingClientRect(); //gives properties of the element w.r.t. to the client window like height, width etc of the element
🍓.pageYOffset //the length to which the user has scroll. onload it is zero
🍓.offsetTop //the top the element with respect to the client window
🍓.getAttribute("🍑")//returns the value of the attribute 🍑
//multimedia
🍓.pause() | .play()





/*Data types*/
//String
🙄.slice("🍉") |.parseInt() | //start slicing the string from index 🍉 without modifying the original string. parseInt converts a string to a number
//Numbers
🎃++|🎃--| ||||
//Array
🤩 |.join("🐽") | .push() | .includes("") | .slice(a, b) //join converts an array to a string with 🐽 separating each item. slice returns a portion of the array from index a to index b-1 as a new array.
//object
//array of objects
🤔[arrayIndex].key
//Boolean
IsNaN(😀) //returns a boolean if 😀 is not a number
//Math
😎 |.floor()|.random() //random will return a random number between 0 and 0.999999999. You can multiply this by what you want tge limit to be. floor will round down to the nearest integer
//Date()
😘 |.getFullYear() | .getTime() //getFullYear returns a string of the full year. getTime returns the milliseconds from 1/1/1970
//promise
//JSON
JSON.stringify(🍲) //converts 🍲 to a JSON string. We use this when we want to save to localStorage or send data to a server.
JSON.parse(🍋) // converts data from being a string to whatever was in the string. eg. say an array was stringified , parse will convert it back to a string.





/*Loops*/
for (let i = 0; i < 🐮.length; i++) {
    //🐮 can be an array, html collection, node-list etc
}
🐔.forEach((🐥)=> {
    //🐥refers to the "children" of 🐔
    //🐔 can be a selector from querySelectorAll, array
    //for each of the children of 🐔 run this function but don't change 🐔
})
🐔.map((🐥)=> {
    //creates a new array by performing a function on each item
})
🐔.filter((🐥)=> {
    if (🐥condition) {
        //if 🐥condition returns true run this function
        //do something with 🐥
    }
})
🐔.reduce((🐓, 🐥)=> {
    //reduce returns a single value by performing a function on it's second parameter in a pancake style
    if (!) {} //you can use this if statement to get unique members
    return 🐓; //where 🐓 is the new value that will be returned. This new value could be an array, a single number etc. This line is a must to avoid errors.
}, 🐣)
