import React from 'react';
import AddUserForm from './Userthing/AddUserForm.jsx';
import DeleteUserForm from './Userthing/DeleteUserForm.jsx';
import EditUserForm from './Userthing/EditUserForm.jsx';
import AddAlgorithmForm from './AlgotThing/AddAlgor.jsx';
import EditTaskForm from './TaskThing/EditTaskForm.jsx';
import DeleteTaskForm from './TaskThing/DeleteTaskForm.jsx';
import AddTaskToAlgorithm from './TaskThing/AddTask.jsx';
import DeleteDiscussionTopicForm from './other/deletediscussion.jsx';

import HEADER from '../Navbar/navbar.jsx';
import EditAlgorithmDescription from './AlgotThing/EditAlgor.jsx';
import './AdminPage.css';
import { TabTitle } from '../../Title.jsx';
function AdminPage() {
  TabTitle('Admin')
  return (
    <div>
        <HEADER/>
      <h1 className='comp'>Admin page</h1>
      <AddUserForm />
      <EditUserForm />
      <DeleteUserForm/>
      <AddAlgorithmForm />
      <EditAlgorithmDescription/>

      <AddTaskToAlgorithm/>
      <EditTaskForm/>
      <DeleteTaskForm/>
      <DeleteDiscussionTopicForm/>
    </div>
  );
}

export default AdminPage;