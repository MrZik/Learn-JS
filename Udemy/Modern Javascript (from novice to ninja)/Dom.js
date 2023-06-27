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

const content = document.querySelector('p');

console.log(content.classList);