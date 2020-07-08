import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import './styles.css';

const SimpleSlideImages = ({
    width = '500px',
    height = '500px',
    imgArr = ['/img/SimpleSlideImages/img1.jpg', '/img/SimpleSlideImages/img2.jpg', '/img/SimpleSlideImages/img3.jpg'],
    backgroundSize = 'cover'
}) => {
    const [index, set] = useState(0);

    const pages = [];
    for(var i=0; i<imgArr.length; i++){
        pages.push(i);
        pages[i] = ({ style }) => <animated.div style={{ ...style }}></animated.div>
    }

    const onClick = useCallback((e) => {
        e.stopPropagation();
        set(state => (state + 1) % imgArr.length)
    }, []);

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    return (
        <div 
            className="SimpleSlideImages"
            onClick={onClick}
            style={{ height, width }}
        >
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item];
                return <Page key={key} style={{
                    ...props,
                    backgroundImage: `url(${imgArr[(key) % imgArr.length]})`,
                    backgroundSize
                }} />;
            })}
        </div>
    );
}

export default SimpleSlideImages;
