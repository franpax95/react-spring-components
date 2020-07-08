import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import range from 'lodash.range';
import './styles.css';

const reinsert = (arr, from, to) => {
    const _arr = arr.slice(0);
    const val = _arr[from];
    _arr.splice(from, 1);
    _arr.splice(to, 0, val);
    return _arr;
}

const clamp = (n, min, max) => {
    return Math.max(Math.min(n, max), min); 
}

const springConfig = { stiffness: 300, damping: 50 };
const itemsCount = 6;

const DraggableListMotion = ({ width, height, backgroundColor }) => {
    const [topDeltaY, setTopDeltaY] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [isPressed, setIsPressed] = useState(false);
    const [originalPosOfLastPressed,setOriginalPosOfLastPressed] = useState(0);
    const [order, setOrder] = useState(range(itemsCount));
    const [itemsName, setItemsName] = useState(['Juan', 'Ramón', 'Pepito', 'Daniel', 'Elena', 'Esther']);

    useEffect(() => {
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }, []);

    const handleTouchStart = (key, pressLocation, e) => {
        handleMouseDown(key, pressLocation, e.touches[0]);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        handleMouseMove(e.touches[0]);
    };

    const handleMouseDown = (pos, pressY, {pageY}) => {
        setTopDeltaY(pageY - pressY);
        setMouseY(pressY);
        setIsPressed(true);
        setOriginalPosOfLastPressed(pos);
    };

    const handleMouseMove = ({pageY}) => {
        //const {isPressed, topDeltaY, order, originalPosOfLastPressed} = this.state;

        if (isPressed) {
            const mouseY = pageY - topDeltaY;
            const currentRow = clamp(Math.round(mouseY / 100), 0, itemsCount - 1);
            let newOrder = order;

            if (currentRow !== order.indexOf(originalPosOfLastPressed)){
                console.log(newOrder);
                newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentRow);
            }

            setMouseY(mouseY);
            setOrder(newOrder);
        }
    };

    const handleMouseUp = () => {
        setIsPressed(false);
        setTopDeltaY(0);
    };

    return (<>
        <div className="DraggableListMotion" style={{ width: width, height: height, backgroundColor: backgroundColor }}>
            {range(itemsCount).map(i => {
                const style = originalPosOfLastPressed === i && isPressed
                    ? {
                        scale: spring(1.1, springConfig),
                        shadow: spring(16, springConfig),
                        y: mouseY,       
                    }
                    : {
                        scale: spring(1, springConfig),
                        shadow: spring(1, springConfig),
                        y: spring(order.indexOf(i) * 100, springConfig)
                    };
                return (
                    <Motion style={style} key={i}>
                        {({scale, shadow, y}) =>
                            <div
                                onMouseDown={() => handleMouseDown(null, i, y)}
                                onTouchStart={() => handleTouchStart(null, i, y)}
                                className="demo8-item"
                                style={{
                                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                                    zIndex: i === originalPosOfLastPressed ? 99 : i
                                }}
                            >
                                {order.indexOf(i) + 1} {itemsName[i]}
                            </div>
                        }
                    </Motion>
                );
            })}
        </div>

        <button onClick={() => console.log(order)}>
            Order
        </button>
    </>);
}

export default DraggableListMotion;