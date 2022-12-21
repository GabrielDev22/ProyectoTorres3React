import './App.css';
import {ContenidoPage} from "./pages/contenido/ContenidoPage"
import {TipoLenguajePage} from "./pages/tipoLenguajes/TipoLenguajesPage"
import {RecomendacionPage} from "./pages/recomendacionPage/RecomendacionPage"

import {FooterComponent} from "./components/footer/FooterComponent"



function App() {
  return (
    <div>
        <ContenidoPage></ContenidoPage>
        <TipoLenguajePage></TipoLenguajePage>
        <RecomendacionPage></RecomendacionPage>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
