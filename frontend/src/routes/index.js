import {Route, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" element={Home} exact />
        </BrowserRouter>
    );
}
export default Routes;