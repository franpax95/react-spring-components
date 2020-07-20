import React, { useRef } from 'react';
import './App.css';

import Card3D from './Card3D';
import Card3DClickable from './Card3DClickable';

import ChainAnimation from './ChainAnimation';

import DraggableListMotion from './DraggableListMotion';

import FlipCard from './FlipCard';
import FlipImageCard from './FlipImageCard';

import GestureSlider from './GestureSlider';

import ImageFade from './ImageFade';
import ImageDragSlider from './ImageDragSlider'

import SimpleSlide from './SimpleSlide';
import SimpleSlideImages from './SimpleSlideImages';

import TextDisappear from './TextDisappear';



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

const imagesDragGallery = [
    '/img/DragGallery/diploma-ecmascript-6.jpg',
    '/img/DragGallery/diploma-asincronismo-js.jpg',
    '/img/DragGallery/diploma-react.jpg',
    '/img/DragGallery/diploma-react-avanzado.jpg',
    '/img/DragGallery/diploma-react-router.jpg',
    '/img/DragGallery/diploma-redux.jpg',
    '/img/DragGallery/diploma-webpack.jpg',
];

const App = () => {
    const ref = useRef();

    return (
        <div className="App">
            {/* <Card3D 
                size = '500px'
                cardSize = '400px'
                backgroundImage = '/img/FlipCard/back.jpg'
            /> */}

            {/* <Card3DClickable
                size = '300px'
                cardSize = '250px'
                onClick={() => alert('freeze!!')}
            >Click me to freeze...</Card3DClickable> */}



            {/* <ChainAnimation /> */}



            {/* <button onClick={() => {
                alert(`newOrder: ${ref.current.state.order}`);
            }}>
                refff
            </button>

            <DraggableListMotion 
                items = {[<>Juan</>, <>Elena</>, <>Dani</>, <><b>Antonio</b></>, <>Raquel</>]}
                width = '400px'
                backgroundColor = 'whitesmoke'
                ref={ref}
            /> */}



            {/* <FlipCard
                front={front()}
                back={back()}
            /> */}

            {/* <FlipImageCard 
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



            {/* <ImageFade 
                timeInterval={5}
                width='600px'
                height='300px'
                backgroundSize='cover'
                backgroundColor='whitesmoke'
                slides={[
                    { id: 1, url: '/img/ImageFade/img1.jpg' },
                    { id: 2, url: '/img/ImageFade/img2.jpg' },
                    { id: 3, url: '/img/ImageFade/img3.jpg' },
                    { id: 4, url: '/img/ImageFade/img4.jpg' }
                ]}
            /> */}


            <ImageDragSlider items={imagesDragGallery} width={700} visible={3}



            {/* <SimpleSlide 
                width='800px'
                height='400px'
            /> */}

            {/* <SimpleSlideImages
                width='400px'
                height='400px'
                imgArr={['/img/SimpleSlideImages/img5.jpeg', '/img/SimpleSlideImages/img6.jpeg', '/img/SimpleSlideImages/img7.jpg']}
            /> */}

            

            {/* <TextDisappear 
                text='Eres un crack, mastodonte, animal, fiera.'
                width='400px'
                height='400px'
                backgroundColor='gray'
                color='black'
                fontSize='3em'
                lineHeight='40px'
            /> */}
        </div>
    );
}

export default App;