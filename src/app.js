import React from 'react';

import Header from './components/header/header';
import HeroBannerComponent from './components/home/hero_banner';
import AboutComponent from './components/home/about';
import SignUpComponent from './components/home/sign_up';


function App() {
    return (
        <>
            <Header />
            <HeroBannerComponent/>
            <AboutComponent />
            <SignUpComponent />
        </>
    )
}

export default App;