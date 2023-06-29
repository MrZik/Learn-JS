// store a reference to a variable
// the document.querySelector goes to the index.html
// starts from the top then gets the first <p> tag it finds and returns it
//const para = document.querySelector('p');

// . means class then the class name error
//const classError = document.querySelector('.error');

// add div means div with a class name error
//const classError = document.querySelector('body > div.error');

//console.log(para);
//console.log(classError);

// go into the document then store all the p tag as a collection
// nodelist
//const paras = document.querySelectorAll('p');
// const error = document.querySelectorAll('.error');

// you can still use brackets index
//console.log(paras[2]);

// paras.forEach(para => {
//     console.log(para);
// });

// paras.entries()
// paras.item()
// paras.keys()
// paras.values()

// console.log(error);

// ***************************************************************************************
// ***************************************************************************************

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);


// get elements by their class name
// html collections
// const error = document.getElementsByClassName('error');
// console.log(error);

// We cannot use the forEach for a html collection
// error.array.forEach(element => {
//     console.log(element);
// });

// two ways to access them other than the bracket notation
// console.log(error.item(0));
// error.namedItem();


// get elements by their tag name
// html collection
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);


// ***************************************************************************************
// ***************************************************************************************

// const para = document.querySelector('p');
// console.log(para.innerText = 'ninjas are awesome');
// const paras = document.querySelectorAll('p');
// paras.forEach(para => console.log(para.innerText = 'I changed all p tags!'));

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);

// // adds the <h2> tag after the last tag
// content.innerHTML += '<h2>This is a new H2</h2>'

// const people = ['mario','luigi','yoshi'];

// // this does the same as the h2 above
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });


// ***************************************************************************************
// ***************************************************************************************


// Getting and setting attributes

//const link = document.querySelector('a');

//console.log(link.getAttribute('href'));
// this changes the string inside the href = ''
//link.setAttribute('href','https://www.thenetninja.co.uk');
// this changes the display text inside the tag. <a> .... </a>
//link.innerText = 'The net ninja website.';

// const msg = document.querySelector('p');

// this will return what the attribute name is?? ex. class = "error"
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');

// Add a new attribute after the class tag
// msg.setAttribute('style','color: green');

// const title = document.querySelector('h1');
// title.setAttribute('style','margin: 50px;');

// go to the property instead and modify it as string
// this will add a new property in the html tag, keep the previous values
// title.style.margin = '50px';

// this will override the property of it already exist in the html
// title.style.color = 'crimson';

// title.style.fontSize = '60px';

// this removes the margin property in the html
// title.style.margin = '';


// ***************************************************************************************
// ***************************************************************************************

// ADDING & REMOVING CLASSES

//const content = document.querySelector('p');

// This gets all the classes in the p tag
//console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     // gets all the text that is VISIBLE
//     // p.innerText
//     // gets all the text regardless if they are hiddne.
//     p.textContent.includes('error') && p.classList.add('error');
//     p.textContent.includes('success') && p.classList.add('success');
// });

//const title = document.querySelector('.title');
// toggle adds a class if there is no class with that name
// then removes it if it finds a similar class name
// title.classList.toggle('test');
// title.classList.toggle('test');


// ***************************************************************************************
// ***************************************************************************************

// Node relations
// parents children & siblings

// const article = document.querySelector('article');
// this is not destructive
// this creates a new array
// Array.from(article.children).forEach(child => child.classList.add('article-element'));

//const title = document.querySelector('h2');

// find the parent
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// get the next element / tag sibling
// console.log(title.nextElementSibling);

// console.log(title.previousElementSibling);

// console.log(title.nextElementSibling.parentElement.children);



// ***************************************************************************************
// ***************************************************************************************

//const button = document.querySelector('button');

// first param is what event we want to listen to
// second param is the callback
// button.addEventListener('click', () => { 
//     console.log('You clicked me.');
// });


// const ul = document.querySelector('ul');
// //ul.remove();

// ul.addEventListener('click', e => {
//     //console.log('event in ul');

//     // this will show the child that was clicked because of the event bubbling  
//     //console.log(e.target.tagName);
//     e.target.tagName === 'LI' && e.target.remove();
// });

// returns a node list
//const items = document.querySelectorAll('li');

// when an event occurs in the browser, it automatically gives us a parameter called 'e' or event
// e.target return the <li></li> tag
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log(e.target);
//         // console.log(item);
//         //e.target.style.textDecoration = 'line-through';

//         // This stops the event bubbing
//         e.stopPropagation();

//         e.target.remove();
//         console.log('event in li');
        
//     });
// });

// const button = document.querySelector('button');

// button.addEventListener('click',() => {
//     //ul.innerHTML += `<li>something new</li>`;
//     // create a new empty <li></li>
//     const li = document.createElement('li');
//     li.textContent = `something new to do`;
//     // takes the li and put it at the end of the tag
//     //ul.append(li);
//     // this puts it on the top of the parent
//     ul.prepend(li);
// });

// Event bubbling

// chid noeds will fire off the events of the parent node as well when triggered
// ex. console.log('event in li'); then console.log('event in ul');


// ***************************************************************************************
// ***************************************************************************************

// DOM

const copy = document.querySelector('.copy-me');

console.log(copy);

copy.addEventListener('copy',() => {
    console.log('copied');
});