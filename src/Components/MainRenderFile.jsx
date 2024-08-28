import React from 'react';
import Landing from './Landing';
import Hero from './Hero';
import ArticlesSection from './ArticlesSection';
import Footer from './Footer';
const MainRenderFile = () => {
    return (
        <div>
            <Landing />
            <Hero/>
            <ArticlesSection/>
            <Footer/>
        </div>
    );
};

export default MainRenderFile;