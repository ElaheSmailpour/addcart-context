import Cart from "./Cart";
import TshirtsList from "./TshirtsList";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Cart />
      <TshirtsList />
    </div>
    </CartProvider>
  );
}

export default App;
