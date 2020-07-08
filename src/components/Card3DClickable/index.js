import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

// const calc = (x, y) => [-(y - ref.current.clientHeight / 2) / 20, (x - ref.current.clientWidth / 2) / 20, 1.1];
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card3DClickable = ({
    size = '900px',
    cardSize = '600px',
    children,
    onClick
}) => {
    const ref = useRef();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const calc = (x, y) => [-(y - ref.current.clientHeight / 2) / 20, (x - ref.current.clientWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(${cardSize}) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return (
        <div className="Card3DClickable" style={{ width: size, height: size }} ref={ref}>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                onClick={onClick}
                style={{ 
                    transform: props.xys.interpolate(trans),
                    width: cardSize,
                    height: cardSize
                }}
            >{children}</animated.div>
        </div>
    );
}

export default Card3DClickable;