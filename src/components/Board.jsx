import Column from "./Column";

const Board = () => {

    const data = [
  {
    title: "To Do",
    cards: [
      {
        title: "Web Development",
        tag1: "Dev",
        tag2: "Medium",
        comments: 3,
        attachments: 2,
        description: "Development is a process that creates growth, progress, positive change.",
        users: [
          "https://i.pravatar.cc/30?img=1",
          "https://i.pravatar.cc/30?img=2"
        ]
      },
      {
        title: "UI/UX Designing",
        tag1: "UI/UX",
        tag2: "High",
        comments: 3,
        attachments: 2,
        description: "Development is a process that creates growth, progress, positive change.",
        users: [
          "https://i.pravatar.cc/30?img=3",
          "https://i.pravatar.cc/30?img=4"
        ]
      }
    ]
  },
  {
    title: "In Progress",
    cards: [
      {
        title: "Inhouse Marketing",
        tag1: "Marketing",
        tag2: "Medium",
        comments: 20,
        attachments: 5,
        description: "Development is a process that creates growth, progress, positive change.",
        users: [
          "https://i.pravatar.cc/30?img=5",
          "https://i.pravatar.cc/30?img=6",
          "https://i.pravatar.cc/30?img=7"
        ]
      },
      {
        title: "PPC Marketing",
        tag1: "Branding",
        tag2: "Low",
        comments: 15,
        attachments: 10,
        description: "Dedicated Support Team Helps You Every Step Of The Way. Explore Products. Request A Demo.",
        users: [
          "https://i.pravatar.cc/30?img=8",
          "https://i.pravatar.cc/30?img=9"
        ]
      }
    ]
  },
  {
    title: "Review",
    cards: [
      {
        title: "Website Design",
        tag1: "Client Work",
        tag2: "Low",
        comments: 12,
        attachments: 4,
        description: "Outstanding website design can help you make a lasting impression.",
        users: [
          "https://i.pravatar.cc/30?img=10",
          "https://i.pravatar.cc/30?img=11"
        ]
      },
      {
        title: "Social Media Marketing",
        tag1: "Marketing",
        tag2: "Medium",
        comments: 50,
        attachments: 0,
        description: "Social media marketing is a form of digital marketing that leverages the power of social media networks.",
        users: [
          "https://i.pravatar.cc/30?img=12"
        ]
      }
    ]
  }
];

  return (
    <div className="board">
      {data.map((col, index) => (
        <Column key={index} title={col.title} cards={col.cards} />
      ))}
    </div>
  );
};

export default Board;