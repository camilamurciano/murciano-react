import { Login } from "./components/pages/login/login";
import { NavBar } from "./components/layout/navBar/NavBar";
import ItemListcontainer from "./components/pages/itemListContainer/ItemListContainer";
import { Main } from "./components/layout/main/Main";
import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/Header";

function App() {
  let bienvenida = "Hola! Bienvenido a nuestra tienda.";
  return (
    <div>
      <Header />
      <NavBar />
      <ItemListcontainer bienvenida={bienvenida} />
      <Login />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
