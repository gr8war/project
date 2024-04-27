import React, { useState } from 'react';
import DiscussionForm from './DiscussionForm';
import DiscussionList from './DiscussionList';
import HEADER from '../Navbar/navbar.jsx';
import './IcmaPage.css';
import { TabTitle } from '../../Title.jsx';

const IcmaPage = () => {
  TabTitle('İCMA'); 

  return (
    <div >
        <HEADER/>
        <div class="content middle">
        <div className='spor'><h1 className="icma-title">İCMA</h1></div>
      <DiscussionForm />
      <DiscussionList />
    </div>
    </div>
  );
};

export default IcmaPage;
