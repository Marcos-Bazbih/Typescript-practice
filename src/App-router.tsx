import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import Student from "./components/pages/Student";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
export default AppRouter;