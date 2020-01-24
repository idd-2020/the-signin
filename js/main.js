/* A. Make the 'sign in' form appear

    1. Find #modal id in the document
    2. Apply display attribute to 'block'
    
*/

//const signIn = document.querySelector('.modal')

//signIn.style.display = 'block'

/* B. Make the 'sign in' form disappear

    1. Find #modal id in the document
    2. Apply display attribute to 'block'

*/

    //signIn.style.display = 'none'

/* C. Make 'error state' appear upon wrong input in the 'sign in' form

    1. Find inputs with IDs 'user' and 'pass'
    2. Add class 'error' to these inputs

*/

//const userField = document.querySelector('#user')
//const passField = document.querySelector('#pass')

// userField.classList.add(`error`)
// passField.classList.add(`error`)


/* D. Make 'error state' disappear upon focusing on the 'sign in' form

    1. Find inputs with IDs 'user' and 'pass'
    2. Remove class 'error' to inputs

*/

// userField.classList.remove(`error`)
// passField.classList.remove(`error`)

/* E. Make buttons clickable for A-D 

    1. Add event listeners to 'signin' button, 'close' button, 'submit' button

*/  

const signInBtn = document.querySelector('.signin')
const closeBtn = document.querySelector('.close')
const submitBtn = document.querySelector('.submit')
const userField = document.querySelector('#user')
const passField = document.querySelector('#pass')

signInBtn.addEventListener('click', event => {
    const signIn = document.querySelector('.modal')
    signIn.style.display = 'block'
})

closeBtn.addEventListener('click', event => {
    const signIn = document.querySelector('.modal')
    signIn.style.display = 'none'
})

submitBtn.addEventListener('click', event => {
    userField.classList.add(`error`)
    passField.classList.add(`error`)
})

userField.addEventListener('focus', event => {
    userField.classList.remove(`error`)
})

passField.addEventListener('focus', event => {
    passField.classList.remove(`error`)
})