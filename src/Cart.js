import { useContext } from "react"
import { CartContext  } from "./CartContext"

const Cart = () => {

const [cart,setCart]=useContext(CartContext)
const totalPrice=cart.reduce((acc,curr)=>acc + curr.price,0)

console.log("totalPrice=",totalPrice)
    return (
        <div>
            <span>items in cart:{cart.length}</span>
            <br />
            <span>total price:{totalPrice}</span>
            <br />
        </div>

    )
}

export default Cart