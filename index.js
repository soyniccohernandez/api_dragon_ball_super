
let page = 1

const btn_prev = document.querySelector('.btn_prev')
const btn_next = document.querySelector('.btn_next')


btn_prev.addEventListener('click', () => {
    if (page > 1) {
        page = page - 1
        getData()
    }
    console.log(page)

})

btn_next.addEventListener('click', () => {
    if (page < 6) {
        page = page + 1
        getData()
    }

    console.log(page)
})

const getData = async () => {
    try {
        const respuesta = await fetch(`https://dragonball-api.com/api/characters?page=${page}`)

        if (respuesta.status === 200) {
            const datos = await respuesta.json();


            let template = ''
            datos.items.forEach(personaje => {

                template += `
                
                    <div class="card">
                        <div class="card-header">
                            <img src=${personaje.image} alt="${personaje.name}">
                        </div>
                        <div class="card-body">
                            <div class="name">${personaje.name}</div>
                            <div class="race">${personaje.race}</div>
                            <span class="icon-start"></span>
                            <div class="maxKi">${personaje.ki}</div>
                        </div>
                    </div>
                `
            });

            document.getElementById('app').innerHTML = template
        }

    } catch (error) {
        console.log(error)
    }
}
getData()