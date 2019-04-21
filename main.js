// FIRST lets grab the nav bar 

const nav = document.querySelector('#main')

// the main id is on the nav not ul. 

// The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
// The returned value includes:
// the top position, and margin of the element
// the top padding, scrollbar and border of the offsetParent element
// Note: The offsetParent element is the nearest ancestor that has a position other than static.

const topOfNav = nav.offsetTop;

// now lets create a function called fixNav that is going to run every single page
function fixNav() {
    // we are going to figure out where the top of the nav bar is. 
    // Lets say its 500px from the top.
    // so when we scroll we are going to figure out how far we have scrolled 
    // as soon as I hit that treshhold of the scroll, the nav bar is going to go 
    // "I am off screen Let me fix myself" in this function
    
    // So what we need to do on page load is grab where ever the top of this nav 
    
    // console.log(topOfNav);
    // always returns the value of the top of whatever u want relative to the parent. for this case it is 411.

// So now since we now the top of nav value we can console log this

// console.log(topOfNav, window.scrollY)
// we see two values consolelogs. The first one is the value of where the top of the nav is located relative to the parent(which is the document in this case) 
// the second one tells us how far we scrolled. this one increases as we scroll down
// so what you see is as it gets closer to the nav hitting the top of the page the two number
// topOfNav, window.scrollY, are going to be equal at a certain point. 

// and at that point we want to make that nav bar fixed. 
if(window.scrollY >= topOfNav){
// what we are going to do is say. If this is true we are going to introduce a class to keep nav fixed
// So when poping in a class, best way to do it is to put it on the body so you can
// attack any of the children of the body. Some people like putting it on the nav itself but if you want to target
// anything else its nice to have it up higher in the hierchy of tags.

// *****Read below for more on this
document.body.style.paddingTop = nav.offsetHeight + 'px';
// camel case it paddingTop
// we style the body with padding top and set it to the off seted height 
// nav.offsetHeight gives us, how ever large the nav is. 
// don't equate it to exact px values becasue what if changes then u will be off for a couple of points
// programtically grab the height of the pxs then add px
// now we have the fixed nav it doesn't jump. 
// we can do this in the css when adding class, but we don't know how high the nav is going to be 
// easier to do this programatically then guess

document.body.classList.add('fixed-nav');
}
else {
    document.body.classList.remove('fixed-nav')
// this is not going to get us all the way there, but if we save and refreseh devtools
// you can see the class being added and removed, but it is not actually fixing itself
// what we need to do now is to go to the style.css page. 

//  now since we added the class on the css go to dev tools and check it out.
// it works but it seems to be jumping the text up once the nav hits fixed
// this is because when u make nav or anyother element fixed in css, it is no longer taking up space 
// it sort of floats on top of the browser. 
// in doing that we cause a reflow on the page. And the class="site-wrap", the content in the page says
// "this nav is no longer taking up space, well don't mind if i do" 
// so it moves up the exact amount of space that the nav bar gave up 
//  we need to offset that amount by adding some padding to our body. 
// so just when we make the nav fixed we need to offset the jump amount as well. So we don't get the jerky jump
// go up to see what was added ********* 

document.body.style.paddingTop = 0;
// here we are just setting the top to zero so the nav-list pxs don't stick and u have space at the top.. 

}
}

window.addEventListener('scroll', fixNav);


// cleaner version of the code above 

// const nav = document.querySelector('#main');
// let topOfNav = nav.offsetTop;
// function fixNav() {
//   if (window.scrollY >= topOfNav) {
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//     document.body.style.paddingTop = 0;
//   }
// }
// window.addEventListener('scroll', fixNav);