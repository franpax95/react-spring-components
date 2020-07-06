import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import './styles.css'

const config = { mass: 5, tension: 2000, friction: 200 }

const TextDisappear = ({ 
    text = 'Loren ipsum dolor sit',
    width = '100%',
    height = '100%',
    fontSize = '5em',
    lineHeight = '80px',
    backgroundColor = 'none',
    color = 'palevioletred',
}) => {

    const items = text.split(' ');

    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div 
            className="trails-main"
            onClick={() => set(state => !state)}
            style={{ width, height, backgroundColor }}
        >
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index]}
                        className="trails-text"
                        style={{ 
                            ...rest,
                            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                            fontSize,
                            lineHeight,
                            height: lineHeight,
                            color
                        }}
                    >
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default TextDisappear;
