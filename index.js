//UI ELEMENTS

const homeEl = document.getElementById('home')
const aboutMeEl = document.getElementById('aboutMe')
const servicesEl = document.getElementById('services')
const locationEl = document.getElementById('location')
const trainerEl = document.getElementById('trainer')

let click = true

document.getElementById('hamburger').addEventListener('click', (e) => {
    if(click){
        renderHamburger()
        click = false
    }else {
        notRenderHamburger()
        click = true
    }
    
})


function renderHamburger(){
    document.getElementById('list').style.display = `flex`
}

function notRenderHamburger(){
    document.getElementById('list').style.display = `none`
}

function scrollFunctionOne(){
    homeEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionTwo(){
    aboutMeEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionThree(){
    servicesEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionFour(){
    locationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}


function scrollFunctionStaff(){
    trainerEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}
