// получаем доступ к кнопкам
const upBut = document.querySelector('.up-button')
const downBut = document.querySelector('.down-button')
// это обертки с дивами изображений
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
// теперь получим все картинки и узнаем их количество
const backgrounds = sidebar.querySelectorAll('div')
// отнимеи еденицу так как будем считать не с первой а с нулевой
const lenght = backgrounds.length - 1
// теперь мы хотим узнать какой длинны содержимое экрана у конкретного пользователя - сделаем это через общий блок
const container = document.querySelector('.container')

sidebar.style.top = `-${lenght * 100}vh`

let active = 0
upBut.addEventListener('click', ()=>{
    selecter ('up')
})
downBut.addEventListener('click', ()=>{
    selecter ('down')
})

function selecter (direction){
    if(direction ==='up'){
        active ++
        if(active > lenght){
            active = 0
        }
    }
    else if(direction ==='down'){
        active --
        if(active < 0){
            active = lenght
        }
    }
    console.log(active)
    // мы получаем высоту всех блоков(не экрана) у конкретного пользователя
    const jamp = container.clientHeight
    console.log(jamp)
    mainSlide.style.transform = `translateY(-${active*jamp}px)`
    sidebar.style.transform = `translateY(${active*jamp}px)`
}
