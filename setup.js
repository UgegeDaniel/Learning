/*Client side JavaScript*/
//****************** main.js ****************************
what is prototyping and agile development with node 
one  page precious plastic 
make an querriable api with graphQL and restful version with CRUD Functionality 
Oauth full course 
web scrapper 
cipher 
which code will return a promise. 
my 3 CVs 
statelessness of http 
using %s
end to end transactions 
what is a server 
difference between align items and align content 
what is command line interface 
difference between compilers and transpilers 
process.exit() 
query in mongo db
ORM 
data access object mongo db 
mongoose schema validation 
tweenmax cdn 
Geo-location with project 


fetch api and http Ajax post request 
Deployment netlify, vercel, cpanel, 
Domain namecheap, domain, godaddy, bluehost,
git/ ssh ftp 
wordpress / wordflow 
react / angular - state management, server side routing, core react library, react router, jsx, hooks, context api, redux, 
php / ajax and php 
postgress / mongodb  / ralid api 
http api development 
js  module handlers - webpack / parcel 
design patterns 
Typescript 
react bootstrap 
react tailwind 
angular with bootstrap 
Testing 
next.js 
remix 
SSG vs SPA 
Gastby 
Express 
firebase 
rest api 
GraphQL 
jwt , cookies and sessions, oauth, passport, becrypt, protecting endpoints and routes 
wordpress cms 
aws, heroku, digital ocean, 
Apache, nginx 
docker, kubernetes 
react native / flutter 

1.  Download Apache server for Android     which supports mySQL and PHP
2.  Arcodion with normal css (and js).
3.  How to use map box
4.  Installing bootstrap with npm
5.  get all grid and flex to make custom design system
6.  group git commands
7.  Read on API's
8.  Network tab in chrome dev tools
11. when to use display inline-grid and inline-flex
13. php project and tutorials

Fisher Yates and JS
js validation api 
JS cookies 
json and ajax
development/ production build in react 
class based components in REACT 
url parameters 
emitting events 
creating a server with node js 
set up heroku with the node installation for android if available
what is prototyping and agile development with node 
bash commands in table 
read up on calc() 
one precious plastic 
strict mode un react 
mongo db course 
checkout ladder


//Test program speed 
console.time('labelName'); //put this at the beginning 
console.timeEnd('labelName') //put this at the end 
///////////////////////

//Types of errors 
        ReferenceError //using undeclared variables 
        SyntaxError //using wrong syntax 
        TypeError //using unmatched types and methods 
        URIError //using illegal characters in URI parameters
///////////////////////



//get data from backend and asign it to a variable 
const 🍏 = fetch("url"); //this is not ideal. The ideal way is as follows. Note that fetch has access to the request and response object. Note that with fetch we have to do a .then() like so 
const 🥚 = 🍏.then(🍏.json());


//promise
    //A promise is an object (as it has properties like promiseName.state and promiseName.result) that links producing (basically a code that will take time to finish executing) and consuming code.
//creating a promise 
const 🍏 = new Promise((resolve, reject)=>{
    //write a code that will have to move to the promise portion of the callstack 
    if(condition for fulfilled promise){
        //you can put your setTimeout function here 
        resolve(🍅) //🍅 can be the body of a setTimeout function ie the code that was supposed to be in the {} 
    }
    else{
    reject(🌰);
    }
})



🍏.then(()=>{
    run resolve 🍅 promise was fulfilled;
})
.catch(()=>{
    run reject 🌰 there was an error fulfilling the promise;
})
.finally(()=>{
    run code regardless;
})

//Promise.all 
Promise.all([fxnName1(), fxnName2()]).then((results) => {
    //fxnName1 and fxnName2 are functions that return promises
    //where results is an array of the results from the .all parameters
})

//we use promise on 
//.get(), fetch() returns a promise so there is no need to make it into a promise. We can just put a .then and .catch to it or wrap it in an async await function 
const 🍉 = async () =>{
    try{
        const 🍊 = await //line that returns a promise or 
        console.log(🍊)
        //basically we put async to the function then we await inside the body after an equal to sign.
    }catch (err) {
        console.log(err)
    } finally{
        
    }
}

/*
Ajax : set of web technologies used to send and receive data asynchronously without reloading the page. 
Asynchronous JavaScript and XML 

*/

const XHR = new XMLHttpRequest();
XHR.open('GET' | 'POST', 'file.ext' | 'url', true)
XHR.setRequestHeader('Content-type', 'application-x-www.form.urlencoded')
XHR.onProgress = ()=>{
    load your preloaders here 
}
XHR.onload = ()=>{
    //use onload formerly onreadystatechange was used 
    //check status 200 is ok 403 is forbidden 404 is not found. check for readyState if you are using onreadystatechange where 0 is not initialized, 1 is server connection established, 2 is request received, 3 is processing request and 4 is request is finished and response is ready. 
    if(this.state == 200 && readyState == 4){
        JSON.parse(this.responseText) // This will return the text format of file.ext. use JSON.parse if the file is in json format 
    }
    else if(this.state == 404){
        console.log("file not found")
    }
    XHR.onerror = ()=>{
        handle your errors 
    }
    //always include this line 
    XHR.send()
}
//The above is called an AJAX call, can be included in an addEventListener function to only get the data on an event then we nest the actual eventListener(using data as the parameter/value) function in the AJAX call. This can be done using libraries like AXIOS, SuperAgent, Fetch API (though has compatibility issues which you can manoeuvre with poly-Fills), Prototype and NODE HTTP

////////////////

//////////////

//////////////

//////


//DOM 
            /*Selectors*/
const 🍓 = document.querySelectorAll(""); // returns a node-list. (return all the nodes which might include comments and text nodes which are generated after carriage return after a closing tag -- not live ie static. Does not include document.createElement)
const 🍓 = document.querySelector(""); 
const 🍓 = document.getElementById("");//html collection (elements only, live ie updates as changes to page are made. Includes document.createElement. Allows array properties like length and indexing )
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


//Dom / selector modifiers
//.onclick 
🍓.onclick = function(e) {
    //use this for elements that do not exist yet
    if (e.target == modal) {
        e.target.value //
        e.clientX // | Y
        e.offsetLeft // | tlbr
    }
}
        
        
//.addEventListener
🍓.addEventListener('click' | 'input' | 'hover' | 'submit', e => {
    //if you are listening for a submit event, add this of which the selector will have the id of the form not the submit button
    e.preventDefault;
    if (sltrs.value) {
    //if this has a value of "", 0,  it will evaluate to false == //equalin type === //equal in value and type && //and || //or
                ! //not
    }
    if else () {}
})


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
🍓.textContent = ``; 🍓.innerHTML = ``; 🍓.value = ``; //🍓 has to be an input element where all values of inputs are strings. 
🍓.appendChild(🍒); | 🍓.removeChild(🍒)

//creating new Element
    let newDiv = document.createElement('div');
    newDiv.classList.add('class');
    newDiv.innerText('xxxxx');
    container.appendChild(newDiv) | .insertBefore(newDiv, child) | ;//appendChild puts the div at the end of the container. insertBefore puts it before an existing child
            
    container.removeChild(child); //to remove a child from its container 
    container.replace(newDiv, child)//replaces an existing child with newDiv 
    setTimeout(newDiv.remove(),x); //remove the div after x milliseconds
 
            
//css in js (js styling are on the same cascading level as in line styles )
🍓.classList | 🍓.classList.contains('') | 🍓.classList.toggle("") | 🍓.classList.remove('') | 🍓.classList.add('') |
🍓
🍓.style.cssStyleProperty = ``;

//traversing the dom
🍓.parentElement | 🍓.parentElement.parentElement | 🍓.children | 🍓.childNode | 🍓.firstChild | 🍓.firstElemntChild | 🍓.focus() | 🍓.value //for input elements 
🍓.dataset //To use this, you have to have a data-dataVariable = "dataValue" in the html attribute. This will return an object where the key is dataVariable and the value is dataValue
🍓.getBoundingClientRect(); //gives properties of the element w.r.t. to the client window like height, width etc of the element
🍓.pageYOffset //the length to which the user has scroll. onload it is zero
🍓.offsetTop //the top the element with respect to the client window
🍓.getAttribute("🍑")//returns the value of the attribute 🍑
//multimedia
🍓.pause() | .play()





/*Data types*/
//BOM 
window .alert("") | .confirm("") | .prompt("") | .innerHeight | .innerWidth | .open() | .close() | .moveTo() | .resizeTo() | .screen.height | .screen.width | .screen.availHeight | .screen.availWidth | .screen.colorDepth | .screen.pixelDepth  | .location.href | .location.hostname | .location.pathname | .location.protocol | .location.port | .location.assign() | .history.back() | .history.forward() | .navigator.appName | .navigator.appCodeName | .navigator.platform | .navigator.cookieEnabled | //innerHeight returns the viewport height(same as .documentElement.clientHeight or .body.clientHeight) while innerWidth the width. open opens a new browser window. location gives url info, screen gives browser screen details, navigator gives "unreliable" browser info. alert for alert box. confirm for interactive alert box. prompt for alert box with input
//String
🙄.slice("🍉") |.parseInt() | `${}` |//start slicing the string from index 🍉 without modifying the original string. parseInt converts a string to a number
//regExp 
let matches = stringName.match(regularExpressionName) //returns an array of matches for the reg exp search
if(!matches) matches =[] //do this if not it will return null for 0 matches 

//Numbers
🎃++|🎃--| NaN | Infinity |.toString(b) | .toFixed(b) | .toPrecision(b) | .valueOf() | Number(v) | parseInt(v) | parseFloat(v) | //number appending an empty string to a number will convert it to a string NaN and infinity are numbers. toString converts a number to another number base where b is the new base, without b it will change it to a string. toFixed returns a string of number with b number of decimal places. toPrecision returns a string of numbers with b number of length. toValue returns the value of the number. Number converts v to a number where v is a boolean, number, string with space, commas and letters. parseInt returns the first interger it finds in the v string parseFloat returns the first decimal where letters, commas and spaces stops  the search. 
//Array
🤩 |.join("🐽") | .push() | .includes("") | .slice(a, b) |.slice(s, e) |.substring(s, e) | .substr(s, l) | .replace(a, b) | .concat(a, b) | .toUpperCase() | .toLowerCase() |.trim() |.padstart(x, y) | .padend(x, y) |.split(",")  //negative values starts counting from the end slice does not accept negative values with no e, it slice to the end. replace a with b where a can be a reg exp. concats to strings into one string. trim removes whitespace from between the quotes and characters while pad adds x times of y character to the start or the end. split converts a string to an array.join converts an array to a string with 🐽 separating each item. slice returns a portion of the array from index a to index b-1 as a new array.
//object 
//class (object template)
class ClassName {
    constructor(keys){
    super(objectName2) //inheritance of property from another object 
        this.key = key;
    }
    methodName(){
        return this.key operations
    }
    get () {
                    
    }
    set (x) {
        this.key = x ; //since getters and setters are accessed the same way as properties you might want to name your properties with _key to differentiate them
    }
    strict methodName() {
                    
    }//this can only be accessible to the class but not objects gotten from it 
} //after this you can now use ObjectName = new ClassName(values)

//object constructor function 
function ObjectName (value parameters){
    this.key = value parameter;
    this.methodName = function(){};
    }, Object.defineProperty(objectName,"propertyName", {value:"newValue"}) | //you cannot add a new key with ObjectName.key = value. instead u add it in the constructor function or you use ObjectName.prototype.key = new value. if propertyName does not exist, it will add it.
    {
        key1: value1,
        key2: value2,
        get property() => this.key2//
        set property(property) => this.key2 = property //though defined by a fxn it is not a method it is a property
    },
    {
        keya: valuea;
        keyb: valueb;
        //this points to the object calling it
        //in a function it is the window object
        //in an arrow function it is the object that contains the arrow function
    }];


this //refers to the object thst calls it if it is a normal function
this //refers the object that owns it if it is an arrow function

🍓.play() | .pause() | .currentTime | // equating currentTime to 0 will restart a multimedia
    if (i > sltrs.length) {
    //if the iterator becomes too big
        i = 0; // re-initialize i
    }



//array of objects
🤔[arrayIndex].key
//Boolean
IsNaN(😀) true | false | Boolean(x)//returns true as long as x has a value that is not -0, 0 , an empty string. null, undefined, false, NaN, //returns a boolean if 😀 is not a number
//Math
😎 |.floor()|.random() | .PI | .E | .SQRT1_2 | .SQRT2 | .LN2 | .LN10 | .LOG2E | .LOG10E |.random() | .apply() | .round(x) | .ceil(x) | .floor(x) | .trunc(x) | .sign(x) | .sqrt(x) | .pow(x, y) | .abs() | .sin() | .cos() | .log(x) | .log2(x) | .log10(x) | .max() | .min() | .random()  //round rounds to nearest interger while ceil and floor rounds down and up respectively. trunc returns the integer part. Returns -1, 0 or 1 depending on the sign of the number negative zero or positive. random returns a random between 0 and 1 multiply it by another changes the limit from 1 to that number//random will return a random number between 0 and 0.999999999. You can multiply this by what you want tge limit to be. floor will round down to the nearest integer
//Date()
😘 |.getFullYear() | .getTime() //getFullYear returns a string of the full year. getTime returns the milliseconds from 1/1/1970
//promise
//JSON
JSON.stringify(🍲) //converts 🍲 to a JSON string. We use this when we want to save to localStorage or send data to a server.
JSON.parse(🍋) // converts data from being a string to whatever was in the string. eg. say an array was stringified , parse will convert it back to a string.


//Data tests 
typeof(x) | .constructor//typeof returns one of the following; number, object, string, boolean, function, undefined. constructor returns the constructor function for that variable eg. function Object (){}. A reg exp is an object


//conditionals
condition ? x : y  //do x if true do y if false 

switch(g){
    //where g is an expression that returns different result
    case result1 : //code to execute
    break
    default : //code to execute for any other case aside the ones written above
}




/*Loops*/
//you can use if(condition){break} to stop a loop  if this iteration/ condition is met. Or use continue to skip this iteration
for (i = 0; i < sltrs.length; i++) {} //where sltrs is an array
for (key in objectName){} //
for (x of Zz){ // where Zz is either an array, object (whoose properties are strings, map, arrays or node lists), string or map lr node list
}
while(condition){code; i++} //will keep running block of code as long as condition is true
do{code}while(condition) //will run code as long as condition is true might return one false result
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





/*function*/
function functionName(🍎) {
    //🍎 will be getting its value when this function is called. it acts as a variable and only gets it value when the function is called
    //this function has access to all global variables
}
if (condition to stop setInterval) {
    clearInterval(setIntervalVariable)
} else {
    const setIntervalVariable = setInterval(functionName, t)
}
functionName(🍊)

setInterval(()=>{
    if(){
        clearInterval
    }
}, x)

setTimeout(()=>{
    if(){
        clearTimeout
    }
}, x)



//validation of user input characters
if(regularExpressionName.test(user.input)){
                
}else{
    
}
            
let i //declare i
if (i < sltrs.length) {
                //start the iterator
    i++; //initialize i

}






/*Local storage*/

//to save data (localStorage only saves data in strings as values of any chosen key of your choice)
localStorage.setItem('🥕', JSON.stringify(🍲)) //where 🥕 is the key you would use to access the saved data. You have to use JSON.stringify on the data you want to save to change it to a JSON string. NOTE THAT SETITEM IN LOCALSTORAGE OVERIDES EXISTING DATA TO SAVE A NEW ONE. A FIX FOR THIS IS TO MAKE 🍲 AN ARRAY AND USE ARRAY.PUSH TO ADD NEW DATA.
localStorage.getItem('🥕') | localStorage.removeItem('🥕')

/*Projects*/
/*

*/









/******************ANGULAR JAVASCRIPT 11 *********************/
//to run angular, in your project directory, run ng --open serve which opens the boiler page on port 4200
//Angular project contains 3 main files : html, css and ts

//main.ts file 
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//app.module.ts 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //so that we can interact with the DOM 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //modules go in here 
    AppRoutingModule
  ],
  providers: [], //global services go here 
  bootstrap: [AppComponent]
})
export class AppModule { }



🍟🍟🍟 //MAKING 
//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //name of tag in main.html where all other components will be embeded in. 
  templateUrl: './app.component.html', // html code goes in here 
  styleUrls: ['./app.component.css'] //stylesheets 
})

export class AppComponent {
  🍓: string = 'angular_project';
}

🐬🐬🐬 //USEAGE 
//app.component.html 
<h2> {{ 🍓 }} </h2> 
//This will output angular_project
{{ 🍑 }} 
//🍑 could be JavaScript expression 
<div>
    <app-SubParent> </app-SubParent> //bringing in a component. The name of this tag is gotten from selector in the building of the component. This component can have its own sub-components and tags in its html file.
</div>



ng generate component components/Sub-Parent 

//############## Sub-Parent Component 
🍟🍟🍟Building Component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SubParent',
  templateUrl: './Parent-Component.component.html',
  styleUrls: ['./Parent-Component.component.css']
})
export class Sub-Parent Implements OnInit {
    🦊: string = 'Sub parent Header'
    constructor(){ }//a constructor runs anytime our component is initialized 
        NgOnInit(): void { //this is a lifecycle method and will run when the component loads 
            doSomething(){
                console.log("Philippians 4:13")
            }
        }
}

//Sub-Parent.html 
<h2> {{ 🦊 }} </h2>
<app-ChildComponent x=🐔 y=🐰 (btnClick) ='doSomething()' > </app-ChildComponent> //you can reuse ChildComponent as much as you want just give different values for x and y. btnClick has been defined when we were making the component as an EventEmitter to emit an event 

//############## Usage 
//after creating the component, use it in a parent component 



//############## Child Component
//############## Building the component 
🍟🍟🍟//Child-component.component.ts 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ChildComponent',
  templateUrl: './Child-Component.component.html',
  styleUrls: ['./Child-Component.component.css']
})
export class ChildComponent Implements OnInit {
    @Input() x :string;
    @Input() y :string; 
    @Output() btnClick = new EventEmitter();

    constructor(){ }//a constructor runs anytime our component is initialized 
        NgOnInit(): void { //this is a lifecycle method and will run when the component loads 
            
        }
    onClick(){
        this.btnClick.emit();
    }
}
//Child-component.html 
<button [NgStyle] = "{"": y }" (click)="onClick()"> {{ x }} </button> 
//NgStyle for inline styling of the components 
//x and y will get their values when we use the component in a parent component 
//click event set to OnClick method which returns an EventEmitter which in turn will be set to a function in the parent component 
//############## Usage 
//after creating the component, use it in a parent component 



















/****************** REACT JAVASCRIPT **********************/
//React is a JavaScript library used for building single page applications user interfaces. React is a declarative component based javascript library for building user interfaces

/*########################################################*/

//index.html 
//this contains the bootstrap cdn if needed 

/*########################################################*/

//index.js 
import React from 'react'
import ReactDOM from 'react'
import './index.css' //style sheet 
import App from './App' //app component
import reportWebVitals from './reportWebVitals'

//all components go in here 
ReactDOM.render(
    <React.StrictMode>
    <App /> 
    </React.StrictMode>
    document.getElementById('root')
    )
    
/*########################################################*/

//app.js
import logo from './logo' //images etc 
import './index.css' //stylesheet 
import ComponentName from './components/ComponentName' //component

function App (){
    const variableName = '';
    const onClick = ()=>{
        
    }
    return (
        <>
        // 🍁
        //only one parent element
        <ComponentName 🐷 = {''} />
        //with different values for 🐷 we can re-use this components 
        //using components
        </>
        )
}
export default App 

//To use class-based components 
class App extends React.component {
    Render (){
        return // 🍁
    }
}

/*########################################################*/

//components/ComponentName.js 
//making a component
🐶 import { useState } from 'react'; //put this in app.js instead
import { FaTimes } from 'react-icons/fa'; //after install the react icon with npm and fa is a library in it for font awesome. Then use FaTimes as a component.
import ChildComponent from './ChildComponent'
import PropTypes from 'prop-types' //choose the data type that can be passed to your props value 

function ComponentName (props | {🐷, onClick, arrayName}){
    const variableName = '';
    
    //use this if you are not including the event as a prop
    const onClick = e =>{
        //event function 
    }
    🐶 const [arrayName, fxn2UpdateArray] = useState([
        //array of objects 
        ]); //put this in app.js instead 
        
    return (
        <>
        //🍁
        //only one parent element
        //parent tag name is ComponentName 
        //use this to tag name to add styling: style ={{color:"", backgroundColor: ""}} | style = {styleVariable} //The values here could be 🐷
        //use {🐷} for text value of the component 
        //include ChildComponent
        //onClick = {onClick} or you put this as a prop in the usage then include onClick as part of your props.
        /*{arrayName.map((member)=>{
            <h1 key = {member.id}> {member.text} </h1>
        })} //arrayName.map(()=>{}) creates a list. This particular one outputs the members of the arrayName (which in this case has objects as its members) as h1 elements. THE parent of the members which is the h1 tag (could be another component) should have an attribute of key whoose value is unique 
        This is part of a state 
        we cannot do arrayName.push(newMember) instead we use:
        fxn2UpdatedArray ([...arrayName, newMember])
        A better way to use states is to put it in the app component so you can use it as global state. Then in the usage of the component pass arrayName = {arrayName} as a prop
        */
        //icon component
        </>
        )
}

ComponentName.defaultProps = {
    🐷 : xx //be the value of 🐷 if no value was given to it in the usage 
}

ComponentName.propTypes = {
    🐷 : PropTypes.string.isRequired, //the value of this prop can only be a string and must have a value
    onClick : PropTypes.func
}
styleVariable = {
    color : "",
    backgroundColor: ""
}
export default ComponentName 

/*########################################################*/
                        //React hooks 
//useState 
const [xyz, setXyz] = useState(🔔)
//🔔 will be the initial value of xyz which we can use setXyz to update the value to a new one 
setXyz(abc) //now the new value for xyz is abc. It is advisable to set the value of abc in another line then use the setXyz to put it in. When the value of xyz changes, the page reloads to show the new value. 

//useReducer 
const Reducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT" : 
            return {
                state1 : state.state1 //use this as the variable to update the value of the state
            }
    }
}
const [state, dispatch] = useReducer(Reducer, {🔔})
//We use this hook when we have multiple states changing at once. Where state is an object that holds the states, dispatch will be called anytime we want to change a state and 🔔 is the initial value of the states where the state is the key. 

//use 
//use 
//use 
//use 
//use 
//use 


/*########################################################*/
//Map Box Component

import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

function App() {
    const [viewport, setViewport] = useState ({
        width: 400,
        height: 400, //style these valhes as you wish 
        latitude: 37.7577, //these are the coordinates where the map will initially centre at. 
        longitude: 122.42,
        zoom: 8,
    })
    
    useEffect(()=>{
        (async()=>{
            const logEntries = await listOfEntries();
        })() //this is an IIFE immediately invoked function expression 
    }, []) //you cannot use async await with states. These array will contain the from the post request to the backend 
    
    const apiUrl = 'localhost://1337' //backend is running on port 1337 
    
    async function listOfEntries (){
        response = await fetch(`${apiUrl}/api/logs`) //when a post request is made to this endpoint in the backend, get the data 
        return res.json(response)
    }
    
  return (
    <ReactMapGl {viewport}
    mapStyle = 'url from map box website '
    mapboxAccessToken = {process.env.MAP_BOX_ACCESS_TOKEN} //create a dotenv file and put the value 
    onViewportChange = {setViewport}
    />
  );
}

/*########################################################*/

//JavaScript Extension  JSX aka 🍁
/*
Write html normally 
class ===> className 
for ===> htmlFor 
attributes  ===> props 
{variableName | 🐷} to get value or JS expression 
use props.🐷 (or just 🐷 if you are destructuring ) where you want the value of 🐷 to activate. knowing that the value for 🐷 will be given in the usage. if there isnt it will used the defaultProps value. 
*/

/*########################################################*/








/***************** VUE JAVASCRIPT **************************/










// ************ serverside.js *********************
🐬 //require
const express | path | moment | uuid | exphbs | expressLayouts | mongoose | bcrypt | flash | session | passport | dotenv | morgan | cheerio | axios  = require('express' | 'path' | './filepath' | 'moment' | 'uuid' | 'express-handlebars' | 'express-ejs-layouts' | 'mongoose' | 'bcryptjs' | 'connect-flash' | 'express-session'| 'passport' |'dotenv'| 'morgan' | 'cheerio' | 'axios');//filepath here is a file whoose last line is module.exports
const LocalStrategy | GoogleStrategy= require('passport-local'| 'passport-google-oauth20').strategy //passport.js

const { Router } = require ('express'); //requiring by destructuring 

/*########################################################*/


🐬 //environment variables 
const PORT = process.env.PORT || 5000;
const connectionString = process.env.MONGO_DB_CONNECTION_STRING

/*########################################################*/

🐬 //module specific lines
const app = express(); //🐔 becomes app
const router = express.Router(); | Router() //destructure style
//🐔 becomes Router in routes file where all routes are in a that routes file
dotenv.config({path: 'path to config.env file in config folder'})
//connect to database 
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log('Successfully Connected to MongoDB')).catch(err => {
    console.log('There was an error connecting to the database', err)
    process.exit(1);
}) //MongoDB (you can either connect this way or use async await with a try catch block)

////////////////////////////// 

//mongoose Schema 
const UserSchema = new mongoose.Schema (field{
    type:, required:, min: , max: ,
    //where the value of type is the expected data tpye for this feild 
    //MongoDB automatically adds an id for each user that is created
    //MongoDB accepts dates in ISO formats therefore you need to perform .toISOString() on the date from the frontend 
    //Mongoose automatically adds createdAt and updatedAt entry if you do this: 
    timestamps : true,
    //if you are using Google-oauth you get googleId, displayName, firstName, lastName and image which you set to requiredStrings. You can also add createdAt type Date and default Date.now 
}) 
const User = mongoose.model('User', UserSchema)//mongoose this shoould be a in a model folder in User.js file and exported

require('./config/passport')(passport); //passport.js is in a config folder 

/*########################################################*/



let dataContainer = []; //for when you want to store data in the client storage





🐬 //custom middlewares
const Logger = (req, res, next) => {
    next()//executes the next middleware in the app
}

//in router.js 
app.use('/afterRoute/something', router) //reqUrl here is relative to the one in routes file. where router is the name of the file that contains the 

//error handling middleware function 
//404 error 
🐔.use((req, res, next)=>{
    const error = new Error(`Not found : ${req.originalUrl}`)
    res.status(404)
    next(error)
})
//general error handler. The following comment should be included to avoid ertor from eslint 
//eslint-disable-next-line no-unused-vars 
🐔.use((error, req, res, next)=>{
    res.statusCode = res.statusCode === 200 ?  500 : res.statusCode
    res.status(statusCode);
    res.json({
        message : error.message, 
        stack : process.env.NODE_ENV === "production" ? 😤😤😤 : error.stack
    })
})


🐬 //middlewares
🐔.use(express.static('🦄')) // 🦄 is a folder containing static files or use the the path module to point to the filepath with path.join. This helps you to just load stylesheet and images from their folders with /folder/file.ext
🐔.use(express.json())//to be able to handle json data
🐔.use(express.urlencoded({
    encoded: false
})) //to be able to handle urlencoded data and get data from the frontend
🐔.use(cors({
    origin: process.env.CORS_ORIGIN //when making requests to the backend, this port has to match the one the frontend is running on 
}))
🐔.engine('handlebars', exphbs({
    //instead of handlebars above use can put .hbs for extname
    defaultLayout: main,
    extname: .hbs
})) //handlebars
🐔.use(expressLayouts)
🐔.set('view engine', 'handlebars' | 'ejs') //handlebars NOTE THAT WITH THIS DEFAULT SET UP main.handlebars will be created in layouts which is in views. While for ejs we use layouts.ejs in views folder
🐔.use(session({
    secret: 'secret', 
    reuse: true, 
    saveUnitiallised: true, 
})) //express session module 

🐔.use(passport.initialize()) //passport.js 
🐔.use(passport.session()) //passport.js 

//dev modules 
if(process.env.NODE_ENV = 'development'){
    🐔.use(morgan('dev'));
}



🐔.use(flash()) //flash module 
🐔.use(Logger) //custom middleware useage
🐔.use(object.middlewareVariable) //where object is the name of the variable holding the object of middlewareVariables 

//global variable 
🐔.use((req, res, next) => {
    res.locales.success.msg = req.flash('success_msg');
    res.locales.error.msg = req.flash('error_msg');
    res.locales.error = req.flash('error');
    next();
})
🐔.use('reqUrl', require('filepath to routes')) //NOTE THAT THE reqUrl here is relative to the one in the routes.js

/*########################################################*/

🐬 //end points
//READ
🐔.get('/:🤑🤑', async (req, res, next) => {
    
    //web scrapping 
    let apiData = [];
    axios.get('url').then(response =>{
        //axios.get returns a promise with a response object whoose data property. Essentially, when we visit this endpoint, axios will go to this url and get the data
        const $ = cheerio.load(response.data) //we use cheerio to navigate the website we are visiting the way JQuery would. 
        $('a:contains("climate")', response.data).each(()=>{
            const title = $(this).text() 
            const url = $(this).attr(href)
            apiData.push({
                title,
                url
            })
        }) //go to the response data and check for a tags that contain climate in their innerText then save it as title for each find; do the same for the href. 
    }).catch((err)=>{
        console.log(err)
    })
    
    ////////////
    
    if () {
        return //if you use this to send outputs to the client, you don't need an else statement.
    }
    
    ////////////
    //display entries in database 
    
    try{
        const entries = await User.find()
        res.json(entries)
    }catch(error){
        next(error)
    }
    
    //////////////
    
    req.🐶 |.body.🍞 | .url | .method |.headers |.query | .protocol() | .get('🐷') | .originalUrl() |.params.🐇 |.loggout  //url returns the requested route by the user. method will return the get or post request. headers returns information about the headers like cookies etc. query returns everything after the ? in the url bar. protocol will return http. 🐷 could be host which will return the hostname. originalUrl will return the req url. params will return anything after : in the req url in this case 🤑🤑. params.🐇 will return the value of 🐇 in the params object. 🍞 can be email which will be the value of the name attribute in the html input tag.
    moment().format() // this will return the date and time of a request to the last second
    res .status(🐽) | .setHeader('content-type', '🐘')| .send('🦊') | .write('🦊') | .sendFile('🐱') | .json(🦁) | .end() | .render(🐏, 🍋) | .redirect('/') |//send and write sends 🦊 to the client could be html, or a string 🐱 is a path to a file (you can decide to use the path module). .json will do JSON.stringify on 🦁 which can be an object with key of msg and value of whatever you chose to use. end ends the response and there should be no more responses to the client. staus returns the statusCode where 🐽 is number representing different http status codes. 🐘 could be text/html ,. render will send a page to the client created with a template engine. where 🐏 is the name of the template file and 🍋 is an object containing key value pairs of variableName and their corresponding values
    //NOTE THAT YOU CAN TACK THE PROPERTIES AND METHODS ON EACH OTHER.
})

/*########################################################*/

//CREATE
🐔.post('/', async (req, res, next)=> {
    //use this method to send data to a database.
    //the reqUrl should be put in the href of a submit button of a form with method of POST
    const newData = {
        uuid.v4() //this will generate a random number that can be used for ids
        key: value pair where value is gotten from req.body.key
    }

    let errors = [];
    //validate user input (feilds are not filled (!password), passwords match)
    if () {
        errors.push({
            msg: 'There was an error with the validation'
        })
    }
    if (errors.length > 0) {
        res.render(🐏, {}) //add error key
    } else {
        User.findOne({
            email: email
        }).then(user => {
            if (user) {
                errors.push({
                    msg: 'Email is already registered'
                })
                res.render(🐏, {}) //add error key
            }
            else{
                const newUser = new User ({schema keys excluding error key})
            }
        })//mongoose to check if this user exists
        //encrypting the user password 
        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(newUser.password, salt, (err, hash)=>{
                if(err) throw err
                newUser.password = hash;
                newUser.save().then(user => {
                    req.flash('sussess_msg', 'You are now Successfully registered and can now Log in ')
                    res.redirect('/')
                }).catch()
                
            })
        })
    }
    dataContainer.push(newData);
    res.send('🦊') | res.json(dataContainer);
    
    //getting data from fronted using schema and storing on the database 
    try{
    const newuser = new User(req.body);
    const createdNew = await newUser.save();
    rea.json(createdUser)
    }catch(error){
        if(error.name == 'ValidationError'){
            error.status(422); 
        }
        next(error); //there is an error handling middleware function where the error will be handled 
    }
})

/*########################################################*/

//UPDATE
🐔.put('/', (req, res)=> {
    //use patch method to update some part of an existing data. use put to change everything
    if (data.id) {}
    res.send()
})

🐔.patch('/', (req, res) => {
    const {
        properties you want to change
    } = req.body //either you destructure it like that or
    const updateData = req.body

    dataContainer.forEach((data)=> {
        if (data.id == parseInt(data.params.id)) {
            //for all the properties
            if (property) {
                req.body.property = property
            }
            res.json({})
        } else {
            res.status(400).json()
        }
    })
})

/*########################################################*/

//DELETE
🐔.delete('/', (req, res)=> {
    dataContainer = dataContainer.filter((dataItem)=> {
        dataItem.id != req.params.id
    })
    res.send()
})

/*########################################################*/

🐬 //listen
🐔.listen(PORT, ()=> {
    `Server running on Port : ${PORT} in ${process.env.NODE_ENV} mode`
})

/*########################################################*/

//implementing passport local strategy in routes 
🐔.post('/', (req, res, next)=>{
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next)
})

/*########################################################*/

🐬//exporting
module.exports = variable (could be a data variable or a functionName or router or an object /w only keys which are the names of the variables which may container even middlewares you want to export) from the file we want to acess elsewhere

/*########################################################*/

//password / user authentication with passport.js 
module.exports = passport => {
    passport.use(
        new LocalStrategy({usernameField: email}, (email, password, done) =>{

/////////////////////////////////////////////////////////////
    //if you are using Google-oauth you should use GoogleStrategy. Then put this in the bracket 
            {
                clientId : process.env.GOOGLE_CLIENT_ID //Google-oauth 
                clientSecret : process.env.GOOGLE_CLIENT_SECRET //Google-oauth 
                callbackUrl : "/auth/google/callback"//Google-oauth
            }, async(accessToken, refreshTime, profile, done)=>{
                await 
            }
/*************************************************************/

            User.findOne({email: email}).then(user =>{
                if(!user){
                    return done(null, false, {msg: 'This email is not registered'})
                }
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if (err) throw err;
                    if (user){
                        return done(null, user)
                    }else{
                        return done(null, false, {msg: 'Incorrect password'})
                    }
                })
            }).catch(err => console.log(err))
        } )
/////////////////////////////
    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })
    passport.deserializedUser(()=>{
        User.findById((err, user) =>{
            done(err, user)
        })
    })
}





//steps 
/*
1. Server skeleton [require, app, listen,] -- basic express app 
2. Connect to database 
3. run development middlewares like morgan
4. bring in template engine 
5. render templates in routes and endpoints 
6. bring in static folder 
7. expess session and passport with google or local strategy for user auth
8. User model with mongoose schema 
9. authenticator (Google-oauth)
*/




//template engines
//handlebars
/*handleBars is written exactly like html only that:
1. in the body tag of the main.hbs file we put in {{{body}}} only aa
2. to use variables from the app.js we use {{variableName}}
3.
{{#each dataContainer}}
{{this.property}} this here refers to each member of the dataContainer
{{/each}}
*/



//EJS
/*ejs is written exactly like html only that :
1.
<% include 'filepath' %>       //include the ejs code from this filepath
<%if(erros != 'undefined'){%>
    <%errors.forEach((error){%>
        <%=error.msg %>         //output (style it however you please)
    <%})>
<%}%>
2.
*/









//  Projects 
/*

*/

/*
//How to create a fake REST API 
1. Go to typeicode ?????
2.  npm init 
in script 
"json:server" : "json-server --watch jsonFile.json"
"json:server:remote":"json-server url for remote json file"
3. npm install --save json-server 
4. create new json file 
put in json data {"x":[{},{}], } for backend use. you have to put an id key for each x (aka resource). 
5. npm run json-server //runs the server (on localhost port 3000) which we can now mavk request to 
*/


//FULL STACK MERN APPLICATION 
/*
1.make and enter into server directory 
2. npm init 
3. install dependencies 
4. create src folder 
5. create index.js (where we will write express application)
5a. setup express basic express app Require App Listen 
5b. add middlewares {helmet, morgan, cors(with orgin)}
5c. set up error hanndling middlewares {not found, } (which you could exports/require it from another file)
5d. connect to the database 
5e. create routes in router file and use before error handler middleware and after all other middlewares 
5f. create a route collect data from frontend using schema 
5g. create route to get all data from database 
6. Setup ESLINT <check commands.html>
7. make model directory and put in your schema file 
8. Test api with postman by making a gpppd request to your endpoints 
9. open a new client folder and cd into it 
10. npm int and npx create-react-app 
11. npm i --save react-map-gl 
*/



//WEBSITES
/*
mongodb.com
username
U_Danny
password
zveNGDYSckK4EE9v
connection string
mongodb+srv://U_Danny:zveNGDYSckK4EE9v@cluster0.cd0vk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


google cloud console 
sign up 
create new project 
enable apis and services 
enable and manage google + api credentials create credentials oauthId webapp callbackUrl which is /auth//callback  
copy clientId and clientSecret 


mapbox website 
1. sign up and sign in 
2. go to marker and get marker control
*/