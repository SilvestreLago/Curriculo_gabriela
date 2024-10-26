const cart = []

function adicionar(name, price) {
    const labelCart = document.getElementById('add')
    const item = cart.find(product => product.name === name)

    if (item) {
        item.quantity++
    } else {
        cart.push({ name, price, quantity: 1 })
    }

    labelCart.innerHTML = `
        <div role="alert" aria-live="assertive" aria-atomic="true" class="toast position-fixed bottom-0 end-0 p-3" style="z-index: 1100; margin:1%;" data-bs-autohide="true">
            <div class="toast-header">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg>
                <strong class="me-auto">Carrinho</strong>
                <small>Agora</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
            </div>
            <div class="toast-body">
                O item <strong>${name}</strong> foi adicionado ao carrinho!
            </div>
        </div>
    `

    const toastElement = new bootstrap.Toast(document.querySelector('.toast'))
    toastElement.show()

    mostrar()
}



function remover(name) {
  const itemIndex = cart.findIndex(product => product.name === name)

  if (itemIndex > -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity--
    } else {
      cart.splice(itemIndex, 1)
    }
  }
  mostrar()
}

function mostrar() {
  const cartContainer = document.getElementById('cart')
  const totalContainer = document.getElementById('total')

  cartContainer.innerHTML = ''
  let total = 0

  cart.forEach(product => {
    const productElement = document.createElement('div')
    productElement.className = 'cart-item'
    productElement.innerHTML = `
      ${product.name} - R$${product.price.toFixed(2)} x ${product.quantity}
      <button onclick="remover('${product.name}')" class='btn btn-outline-danger'>Remover</button>
    `
    cartContainer.appendChild(productElement)
    total += product.price * product.quantity
  })

  totalContainer.innerHTML = `Total: R$${total.toFixed(2)}`
}