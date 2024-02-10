window.addEventListener('scroll', onScroll)
let btnMenu = document.getElementById('btn-open-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

onScroll()
function onScroll(){
    activateMenuAtCurrentSection(topofsite)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(skills)
    activateMenuAtCurrentSection(portfolio)
}

function activateMenuAtCurrentSection(section){

    const targetLine = scrollY + innerHeight / 2
    
    // O topo da seção
    const sectionTop = section.offsetTop
    // A altura da seção
    const sectionHeight = section.offsetHeight
    // O topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 
    // Verifica onde a seção termina
    const sectionEndsAt = sectionTop + sectionHeight
    // Verifica se a base está passando da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


    // Limites da seção

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu-desktop a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
    
}