import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment'; // Ensure this path is correct
import HEADER from '../Navbar/navbar.jsx'; // Ensure this path is correct

const DiscussionPage = () => {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setDiscussion(postResponse.data);
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(commentsResponse.data.map(comment => ({ ...comment, replies: [] })));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [id]);

  const addReplyToComment = (comments, parentId, reply) => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return { ...comment, replies: [...comment.replies, reply] };
      } else if (comment.replies.length > 0) {
        return { ...comment, replies: addReplyToComment(comment.replies, parentId, reply) };
      }
      return comment;
    });
  };

  const addComment = (parentId, text) => {
    if (!text.trim()) return; // Avoid adding empty comments

    const newComment = {
      id: Date.now(),
      name: "Current User",
      body: text,
      replies: []
    };

    console.log("Preparing to send this data to server:", newComment);

    if (parentId === null) {
      setComments(prevComments => [...prevComments, newComment]);
    } else {
      setComments(prevComments => addReplyToComment(prevComments, parentId, newComment));
    }

    setNewCommentText(''); // Clear the text area
  };
  const handleSubmitReply = async (parentId, text) => {
    const replyData = {
      postId: id,
      body: text,
      userId: 1 // Пример ID пользователя
    };

    console.log("Preparing to send this reply to server:", replyData);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', replyData);
      console.log('Reply submitted:', response.data);
      // Обновление состояния, если необходимо...
    } catch (error) {
      console.error('Failed to submit reply:', error);
    }
  };

  if (!discussion) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HEADER />
      <div className='content'>
        <h1>{discussion.title}</h1>
        <p>{discussion.body}</p>
        <textarea
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={() => addComment(null, newCommentText)}>Post Comment</button>
        <h2>Comments</h2>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onSubmitReply={addComment} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;
