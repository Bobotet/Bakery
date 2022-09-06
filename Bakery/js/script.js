'use strict'

let linkArray = document.querySelectorAll('ul');
linkArray.forEach(a => {
    a.addEventListener('click', () => {console.log('l')})
})
console.log(linkArray)