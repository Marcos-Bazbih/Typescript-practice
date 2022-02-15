import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import Lotto from "./components/pages/Lotto";
import Apartment from "./components/pages/Apartment";
import Student from "./components/pages/Student";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

import StyledContainer from "./components/styles/Container.style";
import { ModeContext } from "./contexts/ThemeContext";

const AppRouter = () => {
    const { mode } = useContext(ModeContext);

    return (
        <>
            <Header />
            <BrowserRouter>
                <Sidebar />
                <StyledContainer <any> mode={mode}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/lotto" element={<Lotto />} />
                        <Route path="/apartment" element={<Apartment />} />
                    </Routes>
                </StyledContainer>
            </BrowserRouter>
            <Footer />
        </>
    )
}
export default AppRouter;