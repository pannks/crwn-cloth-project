import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />}></Route>
                <Route index path="shop/*" element={<Shop />}></Route>
                <Route index path="auth" element={<Authentication />}></Route>
                <Route index path="checkout" element={<Checkout />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
