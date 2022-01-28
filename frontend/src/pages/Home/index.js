import "./styles.css";
import {Container} from "../../styles/global";
import { Main } from "./styles";

import Menu from "../../components/Menu/index";
import Footer from "../../components/Footer/index";

const Home = () => {
    return (
        <>
            <Menu />
            <Container>
                <Main></Main>
            </Container>
            <Footer />
        </>
    );
}
export default Home;