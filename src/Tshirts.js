import { CartContext } from "./CartContext"
import { useContext } from "react"
const Tshirts = (props) => {
    const [cart, setCart] = useContext(CartContext)
    const addtoCart = () => {
        const tshirt={name:props.name,price:props.price}
        setCart(currenState=>[...currenState,tshirt])
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <br />
            <h2>{props.price}</h2>
            <br />
            <button onClick={addtoCart}>Add to cart</button>
            <hr />
        </div>
    )
}

export default Tshirts