import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

const FlipCard = ({
    width = '400px',
    height = '400px',
    front = <></>,
    back = <></>
}) => {
    const [ selected, setSelected] = useState(false);
    const { opacity, transform } = useSpring({
        opacity: selected ? 1 : 0,
        transform: `rotateY(${selected ? 180 : 0}deg)`,
        config: {
            friction: 22,
            tension: 500
        }
    });
    const [props, set] = useSpring(() => ({ state: [0, 0, 1] }));
    const inverseOpacity = o => 1 - o;
    const inverseTransform = t => `${t} rotateY(180deg)`;
    const transformCard = (x, y, scale) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;

    return (
        <animated.div 
            className="FlipCard" 
            style={{ 
                width, 
                height,
                transform: !selected && props.state.interpolate(transformCard)
            }} 
            onClick={() => setSelected(!selected)}
        >

            <animated.div 
                className="front"
                style={{ 
                    opacity: opacity.interpolate(inverseOpacity), 
                    transform,
                    zIndex: selected ? 1 : 10
                }}
            >
                {front}
            </animated.div>

            <animated.div 
                className="back" 
                style={{ 
                    opacity, 
                    transform: transform.interpolate(inverseTransform),
                    zIndex: selected ? 10 : 1
                }}
            >
                {back}
            </animated.div>

        </animated.div>
    )
}

export default FlipCard;