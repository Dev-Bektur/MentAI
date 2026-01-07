import React from 'react';
import TeacherDashboard from './TeacherDashboard';
import User from '../components/ProfilePage/User';

function ProfileRedirect() {
  const role = localStorage.getItem('userRole');

  if (role === 'teacher') {
    return <TeacherDashboard/>;
  }
  
  // По умолчанию или если роль 'student'
  return <User/>;
}

export default ProfileRedirect;