import { useState } from "react";
import Card from "./Card";
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ title, cards }) => {
    const [width, setWidth] = useState(360);
    const [height, setHeight] = useState(500);

    const { setNodeRef } = useDroppable({
        id: title
    });

    const handleWidthMouseDown = (e) => {
        e.stopPropagation();

        const startX = e.clientX;
        const startWidth = width;

        const move = (e) => {
            const newWidth = startWidth + (e.clientX - startX);
            setWidth(Math.max(250, newWidth));
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    const handleHeightMouseDown = (e) => {
        e.stopPropagation();

        const startY = e.clientY;
        const startHeight = height;

        const move = (e) => {
            const newHeight = startHeight + (e.clientY - startY);
            setHeight(Math.max(80, newHeight));
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    return (
        <div ref={setNodeRef} className="column" style={{ width, height }}>
            
            <div className="column-header">
                <span>{title}</span>
                <span className="count">{cards.length}</span>
            </div>

            <div className="column-body">
                <SortableContext items={cards.map(card => card.id)}>
                    {cards.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </SortableContext>
            </div>

            <button className="add-task-btn">+ Add Task</button>

            <div
                className="resize-handle-vertical"
                onMouseDown={handleWidthMouseDown}
            />
            <div
                className="resize-handle-horizontal"
                onMouseDown={handleHeightMouseDown}
            />
        </div>
    );
};

export default Column;