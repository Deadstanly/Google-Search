import{ rendering } from '../companens/rendering.js'

function pagination(data) {
    for(let i = 1; i <= data.length / 10; i++) {
        document.querySelector('.pagination').innerHTML += `<a href="#" class="number-page">${i} </a>`
    }
}

function changePage(data) {
    document.querySelectorAll('.number-page').forEach(item => {
        item.addEventListener('click', () => {
            let pagesObj = data;
            let pageNumber = +item.innerHTML;

            let startPage = pageNumber * 10;
            let endPages = pageNumber * 10 + 10


            let pages = pagesObj.slice(startPage, endPages)
            rendering(pages)
        })
    })
}

changePage()

export { pagination }
export { changePage }