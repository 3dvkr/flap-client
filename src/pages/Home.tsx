import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import PartForm from '../components/PartForm';
import { decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

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
          const part = parts.find(x => x.name + x.id === selectedPart);
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
