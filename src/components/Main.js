import { Routes, Route } from 'react-router-dom';
import Home from './LandingPage';
import Nav from './Navigation';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Main() {

    return (
        <div>
            <Nav />
            <div className='d-flex main' style={{ width: 'calc(100%-10%' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}/>
                    <Route path='/projects' element={<Portfolio />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </div>
        </div>
    );

}

export default Main;