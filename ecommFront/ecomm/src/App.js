import logo from "./img/logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div class="navbar">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
