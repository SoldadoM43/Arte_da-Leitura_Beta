import {BrowserRouter, Route} from "react-router-dom";

import Inicio from "../pages/Telas/Inicio/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Inicio} />
        </BrowserRouter>
    );
}
export default Routes;