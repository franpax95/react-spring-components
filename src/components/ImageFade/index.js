import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import './styles.css';

const default_slides = [
    { id: 0, url: 'https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop)' },
    { id: 1, url: 'https://images.unsplash.com/photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80&auto=format&fit=crop)' },
    { id: 2, url: 'https://images.unsplash.com/reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80&auto=format&fit=crop)' },
    { id: 3, url: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop)' },
];

const ImageFade = ({
    timeInterval = 4,
    slides = default_slides,
    width = '500px',
    height = '500px',
    backgroundColor = 'none',
    backgroundSize = 'cover'
}) => {

    const [index, set] = useState(0);
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), (timeInterval * 1000)), []);

    return (
        <div 
            className="ImageFade"
            style={{
                width,
                height,
                backgroundColor
            }}
        >
            {transitions.map(({ item, props, key }) => (
                <animated.div
                    key={key}
                    className="bg"
                    style={{ 
                        ...props, 
                        backgroundImage: `url(${item.url})`,
                        backgroundSize 
                    }}
                />
            ))}
        </div>
    )
}

export default ImageFade;