'use strict'
const body      = document.body
const nav       = document.querySelector('.header__side')
const navBtn    = document.querySelector('.mobile__menu')
const navClose  = document.querySelector('.mobile__close')
const headerBtn = document.querySelector('.header__btn')

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('activo')
    body.classList.add('no-scroll')

})
navClose.addEventListener('click', ()=>{
    nav.classList.toggle('activo')
    body.classList.remove('no-scroll')
})

const rest       = document.querySelector('.rest')
const widget     = document.querySelector('.widget')
let restActivo   = false
let widgetActivo = false

window.addEventListener('scroll', ()=>{

    // Fixed header
    let pixel = window.scrollY 
    
    pixel > 1 ? body.classList.add('fixed') : body.classList.remove('fixed')

    // HIW section
    let altoV = window.innerHeight
    let topR  = rest.offsetTop
    let topW  = widget.offsetTop

    let limite = (altoV / 1.5)

    if(pixel >= topR - limite && restActivo == false){
        rest.classList.add('activo')
        restActivo = true
    }

    if(pixel >= topW - limite && widgetActivo == false){
        widget.classList.add('activo')
        widgetActivo = true
    }
})

// Animaciones HIW section
const label = document.querySelector('.rest__label')
const input = document.querySelector('.rest__check')

label.addEventListener('click', ()=>{
    if(input.checked){
        rest.classList.toggle('activo')
    }
})

const widgetBtn = document.querySelector('.widget__btn')

widgetBtn.addEventListener('click', ()=>{
    widget.classList.toggle('activo')
})