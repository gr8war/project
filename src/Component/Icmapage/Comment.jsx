// Comment.jsx
import React, { useState } from 'react';

const Comment = ({ comment, onSubmitReply }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);

  const submitReply = () => {
    if (replyText.trim()) {
      onSubmitReply(comment.id, replyText);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className="comment">
      <p><strong>{comment.name}</strong>: {comment.body}</p>
      {comment.replies.length > 0 && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} onSubmitReply={onSubmitReply} />
      ))}
      <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
      {showReplyForm && (
        <div>
          <textarea
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button onClick={submitReply}>Submit Reply</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
