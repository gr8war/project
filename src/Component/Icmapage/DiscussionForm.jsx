    import React, { useState } from 'react';
    import axios from 'axios';
    import './IcmaPage.css';

    const DiscussionForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [question, setQuestion] = useState('');

    const showModal = () => setIsVisible(true);
    const hideModal = () => setIsVisible(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { title, theme, question };
        try {
        const response = await axios.post('http://your-backend-url/discussions', postData);
        console.log('Submitted:', response.data);
        // Optionally reset the state or do something else upon success
        setTitle('');
        setTheme('');
        setQuestion('');
        hideModal();
        // If you're managing the discussion list in state, trigger a refresh here
        } catch (error) {
        console.error('Failed to post discussion:', error);
        }
    };

    return (
        <>
        <button onClick={showModal}>Ask a Question</button>
        {isVisible && (
            <div className="login">
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Theme:</label>
                <input type="text" name="theme" value={theme} onChange={(e) => setTheme(e.target.value)} />
                <label>Question:</label>
                <textarea name="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                <button type="submit">Post Question</button>
                <button type="button" onClick={hideModal}>Cancel</button>
            </form>
            </div>
        )}
        </>
    );
    };

    export default DiscussionForm;
