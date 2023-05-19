const lists = document.querySelectorAll('.list li')
const image = document.querySelector('.image img')
const price = document.querySelector('.price')
lists.forEach((list)=>{
    list.addEventListener('click', (e)=>{
        lists.forEach((list)=>{
            list.classList.remove('check')
        })
        e.currentTarget.classList.add('check')
        image.src = e.currentTarget.firstElementChild.src
        price.innerHTML = e.currentTarget.dataset.price
    })
})