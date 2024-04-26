import React from 'react';
import AddUserForm from './AddUserForm.jsx';
import DeleteUserForm from './DeleteUserForm.jsx';
import EditUserForm from './EditUserForm.jsx';
import HEADER from '../Navbar/navbar.jsx';
import './AdminPage.css';

function AdminPage() {
  return (
    <div>
        <HEADER/>
      <h1 className='comp'>Админ Панель</h1>
      <AddUserForm />
      <DeleteUserForm/>
    </div>
  );
}

export default AdminPage;