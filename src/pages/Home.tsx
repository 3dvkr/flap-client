import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { decrementPart, incrementPart, addNewPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const PartForm = () => {
  const dispatch = useDispatch();
  const [newPartName, setNewPartName] = useState('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewPart(newPartName));
    setNewPartName('');
  };
  return (
    <form onSubmit={submitHandler}>
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

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <PartForm />
      <ul className="partsList">
        {parts.map(part => (
          <li
            key={part.name + part.id}
            onClick={() => setSelectedPart(part.name + part.id)}
            className={part.name + part.id === selectedPart && 'selected'}
          >
            {part.name} {part.amount}
            <button
              onClick={e => {
                e.stopPropagation();
                dispatch(incrementPart(part.name, part.id));
              }}
            >
              +
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                dispatch(decrementPart(part.name, part.id));
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => (x.name + x.id) === selectedPart);
          return (
            <PartDescriptor
              key={part.name + part.id}
              name={part.id ? `${part.name}--${part.id}` : part.name}
              amount={part.amount}
            />
          );
        })()}
    </div>
  );
};

export default Home;
