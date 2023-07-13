//* Task 1
const mainEl = document.querySelector('main')
console.log(mainEl)// checking if it's there
// retrieving the css var() from the root to the js 
const mainBgValue = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg')
const mainBg = mainBgValue // reassigning it so that JS understands it
mainEl.style.background = mainBg // applying the css rule to the dom element

// parsing the mainEl content dynamically.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// applying the css class through classList
mainEl.classList.add('flex-ctr')

//* Task 2 
const topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl)
topMenuEl.style.height = '100%'
