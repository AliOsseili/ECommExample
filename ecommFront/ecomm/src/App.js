import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="navbar">
                    <a href="/">
                        <img
                            src={window.location.origin + "/img/logo.svg"}
                            alt="logo"
                        />
                    </a>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <Routes>
                        <Route
                            path="/product/:slug"
                            element={<ProductScreen />}
                        />
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
