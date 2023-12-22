import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <Button as={ Link } to='/admin/maintain-shops' variant="primary">Maintain shops</Button>{' '}
      <Button as={ Link } to='/admin/maintain-categories' variant="secondary">Maintain categories</Button>{' '}
      <Button as={ Link } to='/admin/add' variant="success">Add product</Button>{' '}
      <Button as={ Link } to='/admin/maintain' variant="warning">Maintain products</Button>{' '}
    </div>
  )
}

export default AdminHome