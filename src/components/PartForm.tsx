import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPart } from '../actions/parts';

import './PartForm.sass';

const PartForm = () => {
  const dispatch = useDispatch();
  const [newPartName, setNewPartName] = useState('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewPart(newPartName));
    setNewPartName('');
  };

  return (
    <form onSubmit={submitHandler} className="secondary-bg-section">
      <label htmlFor="newPartName">New Part Name</label>
      <input
        id="newPartName"
        type="text"
        value={newPartName}
        onChange={e => setNewPartName(e.target.value)}
        required
      />
      <button>Add Part</button>
    </form>
  );
};

export default PartForm;
