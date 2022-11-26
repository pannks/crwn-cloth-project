import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index path="/" element={<Home />}></Route>
                <Route index path="/shop" element={<Home />}></Route>
                <Route index path="/sign-in" element={<SignIn />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
