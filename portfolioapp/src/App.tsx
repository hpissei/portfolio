import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <Router basename="portfolio">
                <Navbar></Navbar>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio/about" element={<About />} />
                    <Route path="/portfolio/projects" element={<Projects />} />
                    <Route path="/portfolio/contact" element={<Contact />} />
                    <Route path='*' element={<Home />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;