let stringa=localStorage.getItem("carrello")

let objParsato=null
objParsato=JSON.parse(stringa)
let targetCart=document.querySelector(".target-cart")
let cartVuoto=document.querySelector(".cart-vuoto")

let contenutoCarrello=(array)=>{
    
    cartVuoto.classList.add("d-none")

    array.forEach(element => {
    
        

        let coll = document.createElement('div')
        coll.classList.add("col")

        let card = document.createElement('div')
        card.classList.add("card")

        coll.appendChild(card)

        let img =document.createElement('img')
        img.setAttribute("src",element.img)
        img.classList.add("card-img-top", "img-fluid" ,"rounded-top-2")

        card.appendChild(img)

        let cardBody=document.createElement('div')
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between")
        card.appendChild(cardBody)

        let h5=document.createElement('h5')
        h5.classList.add("card-title")
        h5.textContent=element.title

        cardBody.appendChild(h5)

        let divGenerico=document.createElement('div')
        cardBody.appendChild(divGenerico)

        let p=document.createElement('p')
        p.classList.add("card-text")
        p.textContent=`costo: ${element.price} $`

        divGenerico.appendChild(p)
        
        let btnDiv=document.createElement("div")
        btnDiv.classList.add("row","row-cols-2")

        divGenerico.appendChild(btnDiv)

        let divAcquista=document.createElement("div")
        divAcquista.classList.add("col" ,"ps-0")
        let divRimuovi=document.createElement("div")
        divRimuovi.classList.add("col" ,"ps-0")

        btnDiv.appendChild(divRimuovi)

        btnDiv.appendChild(divAcquista)

        let acquista=document.createElement("button")
        acquista.classList.add("btn", "btn-success", "acquista")
        acquista.textContent="Acquista"

        divAcquista.appendChild(acquista)

        let rimuovi=document.createElement("button")
        rimuovi.classList.add("btn", "btn-danger")
        rimuovi.textContent="Elimina"

        divRimuovi.appendChild(rimuovi)

             targetCart.appendChild(coll)
        
            rimuovi.onclick= ()=>{
                coll.classList.add('d-none')
            }
    })
}


let svuota=document.querySelector('.svuota')
svuota.addEventListener("click",()=>{
    localStorage.removeItem("carrello")
    cartVuoto.classList.remove('d-none')
    targetCart.classList.add('d-none')
})


if(objParsato){
    contenutoCarrello(objParsato)
}
