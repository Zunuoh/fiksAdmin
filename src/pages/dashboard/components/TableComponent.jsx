import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Edit, Trash } from 'react-feather';


const TableComponent = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleToggleShowAddModal = useCallback(
    () => {
      setShowAddModal(showAddModal);
    },
    [setShowAddModal, showAddModal],
  )
  
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <div style={{display:"flex"}}>

              <div><Edit/></div>



              <div style={{marginLeft:20}}><Trash/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <div style={{display:"flex"}}>
              <div><Edit/></div>
              <div style={{marginLeft:20}}><Trash/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>
            <div style={{display:"flex"}}>
              <div><Edit/></div>
              <div style={{marginLeft:20}}><Trash/></div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;