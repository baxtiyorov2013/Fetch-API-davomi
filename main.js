let cards = document.querySelector("#cards")

fetch('https://fakestoreapi.com/products?limit=10')
.then(response => response.json())
.then(products => createCards(products))
.catch(error => console.error('fetching errore:', error))

function createCards(products) {
    const contenir = document.getElementById("user-cards-contenir")

    products.forEach(product => {
        const card = document.createElement("div")
        card.classList.add("card")
        const id = document.createElement("h2")
        id.classList.add("idNumber")
        id.textContent = `id: ${product.id}`

        const titleProduct = document.createElement("h2")
        titleProduct.classList.add("title")
        titleProduct.textContent = `title: ${product.title}`

        const descritionProduct = document.createElement("p")
        descritionProduct.classList.add("descrition")
        descritionProduct.textContent = `${product.description}`

        let price = document.createElement("p")
        price.classList.add("price")
        price.textContent =`${product.price}$`

        card.append(id, titleProduct,descritionProduct,price)

        cards.append(card)
    });
}