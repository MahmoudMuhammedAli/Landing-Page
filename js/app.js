 /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/
let x = performance.now();
const sections = document.querySelectorAll('section');
const ul = document.getElementById("navbar__list");
const addSection = document.getElementById('btn');
const main = document.querySelector('main');
const fragment = document.createDocumentFragment();
let NumberOfSections = sections.length ;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 


let  updateNav=(i)=>{
    let listItem = document.createElement('li');
    listItem.innerHTML=`<a href="#section${i+1}">section${i+1}</a>`
    fragment.appendChild(listItem);
}

let removeActiveClasses=()=>{
    sections.forEach(section=>{section.classList.remove("your-active-class")})
}
let addActiveClass =(id)=>{document.getElementById(id).classList.add("your-active-class")}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0 ; i<NumberOfSections ; i++){
    updateNav(i);
 }
 ul.appendChild(fragment);

// Add class 'active' to section when near top of viewport
onscroll=()=>{
    let scrollPosition = document.documentElement.scrollTop;
    for(section of sections){
        if(scrollPosition>=section.offsetTop && scrollPosition<section.offsetTop+section.offsetHeight){
            let currentId=section.attributes.id.value;
            removeActiveClasses();
            addActiveClass(currentId);
        }
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
addSection.addEventListener('click', ()=>{
    NumberOfSections++;
    let newSection = document.createElement('section');
    main.appendChild(newSection);
    newSection.outerHTML=` 
    <section id="section${NumberOfSections}"  data-nav="Section ${NumberOfSections}" class="your-active-class">
    <div class="landing__container">
      <h2>Section ${NumberOfSections}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`
  updateNav(NumberOfSections-1);
  ul.appendChild(fragment);
})
let y = performance.now();
console.log(y-x);

// Build menu 

// Scroll to section on link click

// Set sections as active


/*for(let i=0 ; i<NumberOfSections ; i++){
                sections[i].classList.remove("your-active-class");
            }
            section.classList.add("your-active-class");*/