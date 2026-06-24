import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/cart.css'

function Cart() {
  const navigate = useNavigate()

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const updateCart = (updatedCart) => {
    setCart(updatedCart)

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    )

    window.dispatchEvent(
      new Event('cartUpdated')
    )
  }

  const increaseQty = (index) => {
    const updatedCart = [...cart]

    updatedCart[index].qty += 1

    updateCart(updatedCart)
  }

  const decreaseQty = (index) => {
    const updatedCart = [...cart]

    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1
    } else {
      updatedCart.splice(index, 1)
    }

    updateCart(updatedCart)
  }

  const removeItem = (index) => {
    const updatedCart = [...cart]

    updatedCart.splice(index, 1)

    updateCart(updatedCart)
  }

  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  )

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  )

  const sendWhatsapp = () => {
    if (cart.length === 0) {
      alert('Keranjang masih kosong')
      return
    }

    const orderList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Qty : ${item.qty}
Harga : Rp ${item.price.toLocaleString("id-ID")}
Subtotal : Rp ${(item.price * item.qty).toLocaleString("id-ID")}`
      )
      .join('\n\n')

    const message = `Halo Mama Matcha,

Saya ingin memesan:

${orderList}

━━━━━━━━━━━━━━

Total Item : ${totalItems}
Total Harga : Rp ${totalPrice.toLocaleString("id-ID")}

Terima kasih.`

    window.open(
      `https://wa.me/6289508228246?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    updateCart([])
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-page">

        <h1>Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            Keranjang masih kosong
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="cart-product"
              >
                <div className="cart-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-detail">
                    <h3>{item.name}</h3>

                    <p>
                      Harga :
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>

                    <p>
                      Jumlah : {item.qty}
                    </p>

                    <p className="subtotal">
                      Subtotal :
                      Rp {(item.price * item.qty).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <div className="cart-actions">
                  <button
                    onClick={() =>
                      decreaseQty(index)
                    }
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      increaseQty(index)
                    }
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(index)
                    }
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>
                Total Item: {totalItems}
              </h3>

              <h2 className="total-price">
                Rp {totalPrice.toLocaleString("id-ID")}
              </h2>

              <button
                className="checkout-btn"
                onClick={sendWhatsapp}
              >
                Pesan Sekarang via WhatsApp
              </button>
            </div>
          </>
        )}

        <button
          className="back-btn"
          onClick={() => navigate('/')}
        >
          ← Kembali Belanja
        </button>

      </div>
    </div>
  )
}

export default Cart
