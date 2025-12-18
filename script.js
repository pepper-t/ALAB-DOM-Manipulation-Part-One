// Menu data structure
/*var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
*/
var menuLinks = [

  {text: 'about', href: '/about'},

  {text: 'catalog', href: '#', subLinks: [

    {text: 'all', href: '/catalog/all'},

    {text: 'top selling', href: '/catalog/top'},

    {text: 'search', href: '/catalog/search'},

  ]},

  {text: 'orders', href: '#' , subLinks: [

    {text: 'new', href: '/orders/new'},

    {text: 'pending', href: '/orders/pending'},

    {text: 'history', href: '/orders/history'},

  ]},

  {text: 'account', href: '#', subLinks: [

    {text: 'profile', href: '/account/profile'},

    {text: 'sign out', href: '/account/signout'},

  ]},

];
// Part 1 -------------------------------------------------
// 1.   Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

// 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3.   Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4.   Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// Part 2 -------------------------------------------------
// 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// 2.   Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4.   Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
// console.log(topMenuEl);
// Part 3//////////////////////////////////////////////////////////////////////////

// To continue: (lines 1-7 provided for Part 3)

// 1.   Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // 2.   Create an <a> element.
  let anchor = document.createElement("a");

  // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
  anchor.setAttribute("href", link.href);

  // 4.   Set the new element's content to the value of the text property of the "link" object.
  anchor.textContent = link.text;

  // 5.   Append the new element to the topMenuEl element.
  topMenuEl.appendChild(anchor);
}

// ||||||||||||||||||||||||||||||||
// DOM Manipulation Part Two|||||||
// |||||||||||||||||||||||||||||||||

// Part 3 - Creating the Sub Menu//////////////////////////////////////////////


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

// Set the height of the subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";



//Part 4 - Adding Menu Interaction//////////////////////////////////////////////

// 1.   Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// 2. Attach a delegated 'click' event listener to topMenuEl. 

topMenuEl.addEventListener("click", function(evt) {//evt or e are short for event.

// a.The first line of code of the event listener function should call the event object's preventDefault() method.
evt.preventDefault();


// 4.The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (evt.target.tagName !== "a") {
  return;
}

// 5. Log the content of the <a> to verify the handler is working.
console.log(evt.target.textContent);

});


// 6. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

anchor.addEventListener("click", function(evt) {
  evt.preventDefault();
});

if (evt.target.classList.contains("active")) {
  evt.target.classList.remove("active");
} else {
  evt.target.classList.add("active");
} 
// 7. The event listener should remove the active class from all other <a> elements in topMenuEl. 
topMenuEl.querySelectorAll("a").forEach(link => {
  if (link !== evt.target) {
    link.classList.remove("active");
  }
});


// Part 5: Adding Submenu Interaction//////////////////////////////////////////////

// Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:

// 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked): 
if (!evt.target.classList.contains("active")) {

// a. Set the CSS top property of subMenuEl to the value stored in the --sub-menu-top CSS custom property.
  subMenuEl.style.top = "var(--sub-menu-top)";  
 
  // b. Otherwise, set the CSS top property of subMenuEl to 0.

   }else {
  
    subMenuEl.style.top = "0";
  }   


// Hint: Caching the "link" object will come in handy for passing its subLinks array later.




// 2. If the clicked <a> element already has a class of "active" (it was active when clicked), set the CSS top property of subMenuEl to 0.
if (evt.target.classList.contains("active")) {
  subMenuEl.style.top = "0";
} 

// Hint: This will effectively hide the submenu.

// Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.

// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:


// Clear the current contents of subMenuEl.
function buildSubmenu(subLinks) {//helper function
  subMenuEl.innerHTML = ""; 

// Iterate over the subLinks array, passed as an argument, and for each "link" object:
  for (let link of subLinks) {

// Create an <a> element.
    let anchor = document.createElement("a");

// Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    anchor.setAttribute("href", link.href);

// Set the element's content to the value of the text property of the "link" object. 
    anchor.textContent = link.text;

// Append the new element to the subMenuEl.
    subMenuEl.appendChild(anchor);
  } 
}


// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.
  if (link.subLinks) {
    buildSubmenu(link.subLinks);
  } 

/*Progress Check - Here is what the page should look like so far:

The menu is almost complete! Now, we need to add interactions to the submenu items themselves:

Attach a delegated 'click' event listener to subMenuEl.

The first line of code of the event listener function should call the event object's preventDefault() method.

The second line of code within the function should immediately return if the element clicked was not an <a> element.

Log the content of the <a> to verify the handler is working.

Next, the event listener should set the CSS top property of subMenuEl to 0.

Remove the active class from each <a> element in topMenuLinks.

Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.

If the ABOUT link is clicked, an <h1>About</h1> should be displayed.



Part 6: Completion and Code Review

Test your menu! If it works in a way that makes sense, you have likely been successful. Your instructor has been provided with a completed version of this assignment, and time permitting, will do a brief code review so that you can make comparisons with your own approaches.

Remember, functionality is key! There are many ways to arrive at the same solution in development, and often the difference in syntax between two solutions is inconsequential. If it works, good job!

Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.*/