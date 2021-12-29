
import Tshirts from "./Tshirts"
const TshirtsList = () => {
    const database = [
        { name: "calvin-Klein", price: 50, id: 1 },
        { name: "TommyHilfiger", price: 30, id: 2 },
        { name: "sprit", price: 10, id: 3 }
    ]
    return (
        <div>
            {database.map(item => (
                <Tshirts key={item.id} name={item.name} price={item.price} />
            ))}
        </div>
    )
}

export default TshirtsList