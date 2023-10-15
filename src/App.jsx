{
  /*
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetail } from "./components/pages/itemDetailContainer/ItemDetail";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
*/
}
import { Login } from "./components/pages/login/login";
import { NavBar } from "./components/layout/navBar/NavBar";
import Itemlistcontainer from "./components/pages/itemListContainer/ItemListContainer";
import { Home } from "./components/layout/home/home";
import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/Header";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import CounterPresentacional from "./components/common/cartWidget/counter/CounterContainer";

function App() {
  {
    let bienvenida = "Hola! Bienvenido a nuestra tienda.";
  }

  {
    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<h1>estoy en el carrito</h1>} />
        <Route path="/ItemDetail" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Pages not found</h1>} />
      </Routes>
    </BrowserRouter>
       */
  }
  return (
    <div>
      <Header />
      <NavBar />

      <Home />
      <Itemlistcontainer />

      <ItemDetailContainer />
      {/*<CounterPresentacional stock={5} />*/}
      <Footer />
    </div>
  );
}

export default App;
