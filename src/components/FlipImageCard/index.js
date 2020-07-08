import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './styles.css'

const FlipImageCard = ({ 
    width = '500px', 
    height = '500px',
    backgroundImageFront = 'https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop',
    backgroundImageBack = 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop'
}) => {
    
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div 
            onClick={() => set(state => !state)}
            className="FlipCard"
            style={{ width, height }}
        >
            <a.div 
                className="c back" 
                style={{ 
                    opacity: opacity.interpolate(o => 1 - o),
                    transform,
                    maxWidth: width,
                    maxHeight: height,
                    backgroundImage: `url(${backgroundImageFront})`
                }} 
            />
            <a.div
                className="c front" 
                style={{ 
                    opacity, 
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    maxWidth: width,
                    maxHeight: height,
                    backgroundImage: `url(${backgroundImageBack})`
                }} 
            />
        </div>
    );
}

export default FlipImageCard;