import React, { useRef, useEffect } from 'react';
import './App.css';

import FlipCard from './FlipCard';
import FlipImageCard from './FlipImageCard';
import GestureSlider from './GestureSlider';
import TextDisappear from './TextDisappear';
import ImageFade from './ImageFade';
import SimpleSlide from './SimpleSlide';
import SimpleSlideImages from './SimpleSlideImages';
import ChainAnimation from './ChainAnimation';
import Card3D from './Card3D';
import Card3DClickable from './Card3DClickable';
import DraggableList from './DraggableList';
import DraggableListMotion from './DraggableListMotion';

const front = () => (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            color: 'white'
        }}
    >Front</div>
);

const back = () => (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            color: 'white'
        }}
    >Back</div>
);

const App = () => {
    const ref = useRef();

    return (
        <div className="App">
            <FlipCard
                front={front()}
                back={back()}
            />
            {/* <Card3DClickable
                size = '300px'
                cardSize = '250px'
                onClick={() => console.log('click!')}
            >Juanillo. Juanillo</Card3DClickable>
            <SimpleSlideImages
                width='400px'
                height='400px'
                imgArr={['/img/SimpleSlideImages/img5.jpeg', '/img/SimpleSlideImages/img6.jpeg', '/img/SimpleSlideImages/img7.jpg']}
            />
            <Card3D 
                size = '900px'
                cardSize = '650px'
                backgroundImage = '/img/FlipCard/back.jpg'
            /> */}

            
            {/* <button onClick={() => {
                console.log(ref.current.state.order);
            }}>
                refff
            </button>

            <DraggableListMotion 
                items = {[<>Juan</>, <>Elena</>, <>Dani</>, <><b>Antonio</b></>, <>Raquel</>]}
                width = '400px'
                backgroundColor = 'whitesmoke'
                ref={ref}
            /> */}
            {/* <DraggableList items={'Lorem ipsum amigo  tu sabes dolor sit'.split(' ')} /> */}
            
            {/* <ChainAnimation /> */}
            {/* <FlipCard 
                width='400px'
                height='400px'
                backgroundImageFront='/img/FlipCard/front.jpg'
                backgroundImageBack='/img/FlipCard/back.jpg'
            />

            <GestureSlider 
                width='800px'
                height='400px'
                backgroundColor='lightgreen'
                border='solid 1px black'
            >Slide.</GestureSlider>

            <TextDisappear 
                text='Eres un crack, mastodonte, animal, fiera.'
                width='400px'
                height='400px'
                backgroundColor='gray'
                color='black'
                fontSize='3em'
                lineHeight='40px'
            />

            <ImageFade 
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
            />

            <SimpleSlide 
                width='800px'
                height='400px'
            />

            <SimpleSlideImages
                width='400px'
                height='400px'
                imgArr={['/img/SimpleSlideImages/img5.jpeg', '/img/SimpleSlideImages/img6.jpeg', '/img/SimpleSlideImages/img7.jpg']}
            /> */}
        </div>
    );
}

export default App;