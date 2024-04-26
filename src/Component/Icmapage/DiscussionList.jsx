import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DiscussionList = () => {
  const [discussions, setDiscussions] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchTheme, setSearchTheme] = useState('');

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const enrichedDiscussions = response.data.map((post, index) => ({
          ...post,
          theme: `Theme ${index % 5}`
        }));
        setDiscussions(enrichedDiscussions);
      } catch (error) {
        console.error('Failed to fetch discussions:', error);
      }
    };

    fetchDiscussions();
  }, []);

  const handleTitleChange = (event) => {
    setSearchTitle(event.target.value.toLowerCase());
  };

  const handleThemeChange = (event) => {
    setSearchTheme(event.target.value.toLowerCase());
  };

  const themes = ["Theme 0", "Theme 1", "Theme 2", "Theme 3", "Theme 4"]; // Статический список тем

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTitle) &&
    discussion.theme.toLowerCase().includes(searchTheme)
  );

  return (
    <div>
      <div>
        <label>Search by Title:</label>
        <input type="text" value={searchTitle} onChange={handleTitleChange} />
        <label>Search by Theme:</label>
        <select value={searchTheme} onChange={handleThemeChange}>
          <option value="">All Themes</option>
          {themes.map((theme) => (
            <option key={theme} value={theme.toLowerCase()}>{theme}</option>
          ))}
        </select>
      </div>
      <div className='discussio_grid'>
        {filteredDiscussions.length > 0 ? (
          filteredDiscussions.map((discussion) => (
            <div className='discussion_box' key={discussion.id}>
              <h3>{discussion.title}</h3>
              <p>{discussion.theme}</p>
              <a href={`/discussion/${discussion.id}`}>
                <button>More Details</button>
              </a>
            </div>
          ))
        ) : (
          <p>No discussions found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default DiscussionList;
