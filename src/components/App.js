import React from 'react';
import './App.css';

import FlipCard from './FlipCard';
import GestureSlider from './GestureSlider';
import TextDisappear from './TextDisappear';
import ImageFade from './ImageFade';
import SimpleSlide from './SimpleSlide';
import ChainAnimation from './ChainAnimation';



const App = () => {
    return (
        <div className="App">
            <ChainAnimation />
            {/* <FlipCard 
                width='400px'
                height='400px'
                backgroundImageFront='/img/FlipCard/front.jpg'
                backgroundImageBack='/img/FlipCard/back.jpg'
            /> */}

            {/* <GestureSlider 
                width='800px'
                height='400px'
                backgroundColor='lightgreen'
                border='solid 1px black'
            >Slide.</GestureSlider> */}

            {/* <TextDisappear 
                text='Eres un crack, mastodonte, animal, fiera'
                width='400px'
                height='400px'
                backgroundColor='gray'
                color='black'
                fontSize='3em'
                lineHeight='40px'
            /> */}

            {/* <ImageFade 
                timeInterval={5}
                width='600px'
                height='300px'
                backgroundSize='cover'
                backgroundColor='gray'
                slides={[
                    { id: 1, url: '/img/ImageFade/img1.jpg' },
                    { id: 2, url: '/img/ImageFade/img2.jpg' },
                    { id: 3, url: '/img/ImageFade/img3.jpg' },
                    { id: 4, url: '/img/ImageFade/img4.jpg' }
                ]}
            /> */}

            {/* <SimpleSlide 
                width='800px'
                height='400px'
            /> */}
        </div>
    );
}

export default App;