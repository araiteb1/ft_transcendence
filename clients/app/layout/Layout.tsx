import Link from "next/link";
import Header from "./Header"
import Board from "../components/Board"
import LandingPage from "../page/LandingPage";
const Layout = () => {
    return(
        <div >
            <Header />
            <LandingPage />
        </div>
    );
}
export default Layout;