import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ id, title, tag1, tag2, comments, attachments, description, users }) => {

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="card"
      {...attributes} {...listeners}
    >

      <div className="card-tags">
        <span className="tag">{tag1}</span>
        <span className="tag">{tag2}</span>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>

      <div className="card-footer">
        <div className="avatars">
          {users?.map((user, i) => (
            <img key={i} src={user} className="avatar" />
          ))}
        </div>

        <div className="meta">
          <span>💬 {comments}</span>
          <span>📎 {attachments}</span>
        </div>
      </div>

    </div>
  );
};

export default Card;