import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HEADER from '../Navbar/navbar.jsx';
import './Profile.css'
import { TabTitle } from '../../Title.jsx';


const Profile_change = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data);
                setEmail(response.data.email);
                setUsername(response.data.username);
            });
    }, [id]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Используем id в URL
          .then(response => response.json())
          .then(data => {
            TabTitle(data.name); 
          });
      }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!image.type.match('image/png') && !image.type.match('image/jpeg')) {
            alert('Invalid image format. Only JPG and PNG are allowed.');
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('image', image);
        
        axios.post(`https://jsonplaceholder.typicode.com/users/${id}/update`, formData)
            .then(response => {
                alert('profile updated successfully!');
            })
            .catch(error => {
                alert('No profile update!');
            });
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            <HEADER />
            <div className="content middle">
            <div className="spor">
            <h1>Profil Redaktə Et</h1></div>
            <div className='algorbox'>
                {user && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Haqqında:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Şifrə:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Şifrəni təsdiqlə:</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Profil Şəkli:</label>
                            <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                        </div>
                        <button type="submit">Yadda saxla</button>
                    </form>
                )}
            </div>
        </div>
        </div>
    );
};

export default Profile_change;
