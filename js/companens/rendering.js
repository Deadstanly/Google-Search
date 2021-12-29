function rendering(data) {
    let div = document.querySelector('.search_list')
    let result  = document.querySelector('.results')
    let main = document.querySelector('.main')

    main.style.marginTop = '40px'
    result.innerHTML = `Результатов: примерно 3 490 000 000 (0,54 сек.)`

    data.forEach(element => {
        div.innerHTML += `
        <p class ="title_link">${element.link}</p>
        <h3 class ="title_name">${element.description}</h3>
        <p class ="title_text">${element.title}</p>`
    });
}


export{ rendering }
