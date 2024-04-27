import React from 'react';
import AddUserForm from './AddUserForm.jsx';
import DeleteUserForm from './DeleteUserForm.jsx';
import EditUserForm from './EditUserForm.jsx';
import AddAlgorithmForm from './AddAlgor.jsx';
import HEADER from '../Navbar/navbar.jsx';
import './AdminPage.css';
import { TabTitle } from '../../Title.jsx';
function AdminPage() {
  TabTitle('Admin')
  return (
    <div>
        <HEADER/>
      <h1 className='comp'>Admin page</h1>
      <AddUserForm />
      <DeleteUserForm/>
      <AddAlgorithmForm />
    </div>
  );
}

export default AdminPage;