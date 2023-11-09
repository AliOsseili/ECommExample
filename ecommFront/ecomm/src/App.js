import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropDown from "react-bootstrap/NavDropDown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignUpScreen from "./screens/SignUpScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signOutHandler = () => {
        ctxDispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("shippingAddress");
        localStorage.removeItem("paymentMethod");
    };
    return (
        <BrowserRouter>
            <div className="d-flex flex-column site-container">
                <ToastContainer position="bottom-center" limit={1} />
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>
                                    <img
                                        src={
                                            window.location.origin +
                                            "/img/logo.svg"
                                        }
                                        alt="logo"
                                    />
                                </Navbar.Brand>
                            </LinkContainer>
                            <Nav className="me-auto">
                                <Link to="/cart" className="nav-link">
                                    Cart
                                    {cart.cartItems.length > 0 && (
                                        <Badge pill bg="danger">
                                            {cart.cartItems.reduce(
                                                (a, c) => a + c.quantity,
                                                0
                                            )}
                                        </Badge>
                                    )}
                                </Link>
                                {userInfo ? (
                                    <NavDropDown
                                        title={userInfo.name}
                                        id="basic-nav-dropdown"
                                    >
                                        <LinkContainer to="/profile">
                                            <NavDropDown.Item>
                                                User Profile
                                            </NavDropDown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/orderhistory">
                                            <NavDropDown.Item>
                                                Order History
                                            </NavDropDown.Item>
                                        </LinkContainer>
                                        <NavDropDown.Divider />
                                        <Link
                                            className="dropdown-item"
                                            to="#signout"
                                            onClick={signOutHandler}
                                        >
                                            Sign Out
                                        </Link>
                                    </NavDropDown>
                                ) : (
                                    <Link className="nav-link" to="/signin">
                                        Sign in
                                    </Link>
                                )}
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <main>
                    <Container className="mt-3">
                        <Routes>
                            <Route
                                path="/product/:slug"
                                element={<ProductScreen />}
                            />
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/signin" element={<SignInScreen />} />
                            <Route path="/signup" element={<SignUpScreen />} />
                            <Route
                                path="/shipping"
                                element={<ShippingAddressScreen />}
                            />
                            <Route
                                path="/payment"
                                element={<PaymentMethodScreen />}
                            />
                            <Route
                                path="/placeorder"
                                element={<PlaceOrderScreen />}
                            />
                            <Route
                                path="/order/:id"
                                element={<OrderScreen />}
                            ></Route>
                            <Route
                                path="/orderhistory"
                                element={<OrderHistoryScreen />}
                            ></Route>
                            <Route path="/" element={<HomeScreen />} />
                        </Routes>
                    </Container>
                </main>
                <footer>
                    <div className="text-center"> All rights reserved</div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
