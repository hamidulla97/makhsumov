let cont = document.querySelector(".container")

function fun() {
    fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset='UTF-8'"
        }
    }).then(element => element.json()).then(data => product(data))

    function product(params) {
        params.forEach(element => {
            let imageEl = document.createElement("img")
            let textFirstEl = document.createElement("h4")
            let textSeconfEl = document.createElement("p")
            let textThirdEl = document.createElement("p")
            let cardEl = document.createElement("div")
            let textFoursEl = document.createElement("p")
            let deleteBtnEl = document.createElement("button")
            let deleticonEl = document.createElement("i")

            deleticonEl.className = "fa-solid fa-trash";

            deleticonEl.addEventListener("click", () => {
                fetch(`https://fakestoreapi.com/products/${element.id}`, {
                        method: "DELETE"
                    })
                    .then(men => men.json())
                    .then(css => console.log(css))
            })

            cardEl.appendChild(imageEl)
            imageEl.classList.add("img-el")
            cardEl.appendChild(textFirstEl)
            cardEl.appendChild(textSeconfEl)
            cardEl.appendChild(textThirdEl)
            cardEl.appendChild(textFoursEl)
            cardEl.appendChild(deleteBtnEl)
            cardEl.appendChild(deleticonEl);
            cont.appendChild(cardEl)
            cardEl.classList.add("item")
            imageEl.src = element.image
            textFirstEl.innerHTML = "Price:" + element.price;
            textSeconfEl.innerHTML = "Discount:" + element.rating["1"];
            textThirdEl.innerHTML = "Des:" + element.description;
            textFoursEl.innerHTML = "Name:" + element.title;
        });
    }
}

fun()