
import './assets/Table.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateData } from './redux/dataActions';

import RegistrationPage from './RegistrationPage';

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleUpdate = () => {
    dispatch(updateData(editingId, editedName));
    setEditingId(null);
    setEditedName('');
  };

  return (
    <div>
      {" "}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <button className="btn-save" onClick={handleUpdate}>
                    Save
                  </button>
                ) : (
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(item.id, item.name)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
