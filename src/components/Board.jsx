import Column from "./Column";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useState } from "react";

const Board = () => {

  const initialData = [
    {
      title: "To Do",
      cards: [
        { id: "todo-1", title: "Web Development", tag1: "Dev", tag2: "Medium", comments: 3, attachments: 2, description: "Development is a process that creates growth, progress, positive change.", users: ["https://i.pravatar.cc/30?img=1"] },
        { id: "todo-2", title: "UI/UX Designing", tag1: "UI/UX", tag2: "High", comments: 3, attachments: 2, description: "Development is a process that creates growth, progress, positive change.", users: ["https://i.pravatar.cc/30?img=3"] }
      ]
    },
    {
      title: "In Progress",
      cards: [
        { id: "progress-1", title: "Inhouse Marketing", tag1: "Marketing", tag2: "Medium", comments: 20, attachments: 5, description: "Development is a process that creates growth, progress, positive change.", users: ["https://i.pravatar.cc/30?img=5"] },
        { id: "progress-2", title: "PPC Marketing", tag1: "Branding", tag2: "Low", comments: 15, attachments: 10, description: "Dedicated Support Team Helps You Every Step Of The Way.", users: ["https://i.pravatar.cc/30?img=8"] }
      ]
    },
    {
      title: "Review",
      cards: [
        { id: "review-1", title: "Website Design", tag1: "Client Work", tag2: "Low", comments: 12, attachments: 4, description: "Outstanding website design can help you make a lasting impression.", users: ["https://i.pravatar.cc/30?img=10"] },
        { id: "review-2", title: "Social Media Marketing", tag1: "Marketing", tag2: "Medium", comments: 50, attachments: 0, description: "Social media marketing leverages social networks.", users: ["https://i.pravatar.cc/30?img=12"] }
      ]
    }
  ];

  const [columns, setColumns] = useState(initialData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    let sourceColIndex, targetColIndex;
    let sourceIndex, targetIndex;

    columns.forEach((col, colIndex) => {
      col.cards.forEach((card, cardIndex) => {
        if (card.id === active.id) {
          sourceColIndex = colIndex;
          sourceIndex = cardIndex;
        }
        if (card.id === over.id) {
          targetColIndex = colIndex;
          targetIndex = cardIndex;
        }
      });
    });

    const newColumns = columns.map(col => ({
      ...col,
      cards: [...col.cards]
    }));

    const [movedCard] = newColumns[sourceColIndex].cards.splice(sourceIndex, 1);

    const isColumnDrop = columns.some(col => col.title === over.id);

    if (isColumnDrop) {
      const targetCol = newColumns.find(col => col.title === over.id);
      targetCol.cards.push(movedCard);
    } else {
      newColumns[targetColIndex].cards.splice(targetIndex, 0, movedCard);
    }

    setColumns(newColumns);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map((col) => (
          <Column key={col.title} title={col.title} cards={col.cards} />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;