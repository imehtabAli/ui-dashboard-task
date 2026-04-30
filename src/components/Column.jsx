import { useState } from "react";
import Card from "./Card";

const Column = ({ title, cards }) => {
    const [width, setWidth] = useState(380);
    const [height, setHeight] = useState(500);

    const handleWidthMouseDown = (e) => {
        const startWidth = width;
        const columnRight = e.target.parentElement.getBoundingClientRect().right;

        const move = (e) => {
            const newWidth = startWidth + (e.clientX - columnRight);
            setWidth(newWidth);
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    const handleHeightMouseDown = (e) => {
        const startY = e.clientY;
        const startHeight = height;

        const move = (e) => {
            setHeight(startHeight + (e.clientY - startY));
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    return (
        <div className="column" style={{ width, height }}>
            <div className="column-header">
                <div>
                    <span>{title}</span>
                    <span className="count">{cards.length}</span>
                </div>
                <div className="actions">+ •••</div>
            </div>

            {cards.map((card, i) => (
                <Card key={i} {...card} />
            ))}

            <button className="add-task-btn">+ Add Task</button>

            <div className="resize-handle-vertical" onMouseDown={handleWidthMouseDown} />
            <div className="resize-handle-horizontal" onMouseDown={handleHeightMouseDown} />
        </div>
    );
};

export default Column;