console.log('Javascript is running');

/*
this is a js block comment

the let statment creates a variable - a chunk of computer memory that 
can hold references to data that you want to save. we're storing a
reference to an element on the page with this line - we're telling
JavaScript to look for the element with the ID we specify inside of the
round brackets (the image tag with the ID of bitmapGraphic)

document refers to the imdex.html page; querySelector

*/

// step 1 - select the elements you want the user to interact with
let bitmapGraphic = document.querySelector("#bitmapGraphic");
let vectorGraphic = document.querySelector("#vectorGraphic");

// step 3 - what happens when events are triggered?
function logID() {
    console.log(this.id);
}

// step #2 - how do you want the user to interact with the element
bitmapGraphic.addEventListener('click', logID);
vectorGraphic.addEventListener('click', logID);


