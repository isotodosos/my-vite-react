import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Contenedor principal encargado de manejar el enrutamiento.*/}
      <Router>
        {/* Contenido estático.*/}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {/* Contenedor para definir las diferentes rutas de la aplicación.*/}
        <Routes>
          {/* Componente que define qué componente se renderiza para cada ruta.*/}
          <Route path="/" element={<h1>I'm main page</h1>} />
          <Route path="/about" element={<h1>I'm main about</h1>} />
          <Route path="/products" element={<h1>I'm main products</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
