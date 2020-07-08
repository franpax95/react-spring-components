import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

// const calc = (x, y) => [-(y - ref.current.clientHeight / 2) / 20, (x - ref.current.clientWidth / 2) / 20, 1.1];
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card3D = ({
    size = '900px',
    cardSize = '600px',
    backgroundImage = 'https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40'
}) => {
    const ref = useRef();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const calc = (x, y) => [-(y - ref.current.clientHeight / 2) / 20, (x - ref.current.clientWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(${cardSize}) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return (
        <div className="Card3D" style={{ width: size, height: size }} ref={ref}>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ 
                    transform: props.xys.interpolate(trans),
                    backgroundImage: `url(${backgroundImage})` ,
                    width: cardSize,
                    height: cardSize
                }}
            />
        </div>
    );
}

export default Card3D;