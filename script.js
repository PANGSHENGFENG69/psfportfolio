/*let $click = document.querySelector("#click").onclick = function() {
    console.log("u clicked me!")
};
document.querySelector("#click").onmouseenter = function() {
    console.log("DONT POINT IT!")
}

document.querySelector("#backgroundColor").addEventListener('click', () => {
    document.body.style.backgroundColor = "blue";
    document.querySelector("#backgroundColor").addEventListener('dblclick', () => {
        document.body.style.backgroundColor = "white";
    })

})

document.querySelector("#up").addEventListener('keyup', (element) => {
    console.log(element.code)

})

document.querySelector("#submit").addEventListener('submit', (sub) => {
    console.log("enter");
})

document.querySelector("#grocery");
*/


//Get JSON method (Using fetch)
/*const res = async() => {
    try {
        const link = await fetch("https://swapi.dev/api/people/1")
        const data = await link.json()
        console.log(data);
    } catch (e) {
        console.log("error", e);
    }
}
res() */

//GET JSON with axios, better than fetch method(Using Axios)
const res = async(id) => {
    try {
        const link = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(link.data);
    } catch (e) {
        console.log("error", e);
    }
}
res(3)