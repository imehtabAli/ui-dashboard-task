const Card = ({ title, tag1, tag2, comments, attachments, description, users }) => {

    return (

        <div className="card">

            <div className="card-tags">
                <span className="tag">{tag1}</span>
                <span className="tag"> {tag2}</span>
                <span className="tag">Sep 12 - 16</span>
            </div>

            <h4>{title}</h4>

            <p>{description}</p>

            <div className="card-footer">

                <div className="avatars">
                    {users && users.map((user, index) => {
                        return (
                            <img
                                key={index}
                                src={user}
                                alt="user"
                                className="avatar"
                            />
                        );
                    })}
                </div>

                <div className="meta">
                    <span>💬 {comments} Comments</span>
                    <span>📎 {attachments} attachments</span>
                </div>

            </div>

        </div>
    );
};

export default Card;