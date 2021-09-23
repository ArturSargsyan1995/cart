const selects = document.querySelectorAll('.bn__app__select');

selects.forEach(select => {
        const options = select.querySelectorAll('.bn__app__option');
        const activeOptionContainer = select.querySelector('.bn__app__select-active');
        const optionsContainer = select.querySelector('.bn__app__options');
        const arrow = select.querySelector('.bn__app__select-active span')
    
        options.forEach((item, i) => {
            item.setAttribute('index', i + 1);
            item.addEventListener('click', (e) => {
                const activeOption = select.querySelector('.bn__app__option');
                let prevActive = activeOption.textContent;
                let prevIndex = activeOption.getAttribute('index');
                activeOption.textContent = e.target.textContent;
                activeOption.setAttribute('index', e.target.getAttribute('index'))
                e.target.setAttribute('index', prevIndex)
                e.target.textContent = prevActive;
        
                sortItem()
            }); 
        })

        const hide = () => {
            const allconstOptionsContainer = document.querySelectorAll('.bn__app__options');
            const allArrows = document.querySelectorAll('.bn__app__select-active span');
            allconstOptionsContainer.forEach((item, i) => {
                allArrows[i].style =  `
                transform: rotate(0deg);
                margin-top: 8px;
            `;
                item.style = `transform: scaleY(0);`
            })
        }
        
        const sortItem = () => {
            let arr = Array.from(optionsContainer.children).sort((a, b) => {
               return a.getAttribute('index') - b.getAttribute('index')
            });
            optionsContainer.innerHTML = ''
            arr.forEach(res => {
                optionsContainer.appendChild(res)
            })
            hide()
        }  
         
        const show = () => {
            arrow.style =  `
                transform: rotate(180deg);
                margin-top: -8px;
            `;
            console.log();
            optionsContainer.style = `transform: scaleY(1);`
        } 
       
        
        activeOptionContainer.addEventListener('click', (e) => {
            hide()      
            show()
        })

})


const swiper = new Swiper({
    el:'.bn__app__popup-slider',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clicabel: true
    }
})


const links = document.querySelectorAll('.bn__app__gift-product-block > a');
const popup = document.querySelector('.bn__app__popup');
const originArray = ['top', 'left', 'right', 'bottom', 'center'];



links.forEach(link => {
    link.addEventListener('click', showPopup)
});

function showPopup(e) {
    e.preventDefault();
    stylePopup()
    const close = popup.querySelector('.bn__app__popup-close');
    const overlay = popup.querySelector('.bn__app__popup-overlay');
    close.addEventListener('click', hidePopup);
    overlay.addEventListener('click', hidePopup);
    popup.classList.add('bn__app__popup-active')

}
function stylePopup(){
    popup.style = `transform-origin: ${originArray[Math.round(Math.random() * 4)]}`
}
console.log();function hidePopup() {
    stylePopup()
    popup.classList.remove('bn__app__popup-active') 
}