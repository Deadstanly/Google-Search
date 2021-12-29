import { getData } from "../services/getData.js";
import { rendering } from "../companens/rendering.js"
import { pagination } from "../companens/pagination.js"
import { changePage } from "../companens/pagination.js"

function search() {
    let inp = document.querySelector('.search_panel').value;

    getData(`https://google-search3.p.rapidapi.com/api/v1/search/q=${inp}&num=100`).then(data => data.results).then(data =>  {rendering(data.slice(0, 11)), pagination(data), changePage(data)});

}


export{search}
