import React from 'react';
import Header from '../../other/Header';
import CreateTask from '../../other/CreateTask';
import Alltask from '../../other/Alltask';

function AdminDashboard({changeUser}) {
  return (<div className='p-10'>
    <Header changeUser={changeUser}/>
   <CreateTask/>
   <Alltask/>
    </div>
  );
}

export default AdminDashboard;
