import React, { useState } from 'react';

import './PartDescriptor.sass';

const PartDescriptor = ({ name, amount }: { name: string; amount: number }) => {
  const [notes, setNotes] = useState('');
  return (
    <div className="part-desc secondary-bg-section">
      <p>
        <span className="desc-label">Name:</span> <span className="desc-info">{name}</span>
      </p>
      <p>
        <span className="desc-label">Amount:</span> <span className="desc-info">{amount}</span>
      </p>
      <p>
        <span className="desc-label">Description:</span> <span className="desc-info">
          Lorem Ipsum dolor sit
          amet
        </span>
      </p>
      <p>
        <span className="desc-label">Notes:</span>{' '}
        <input className="desc-info" value={notes} onChange={e => setNotes(e.target.value)} />
      </p>
    </div>
  );
};

export default PartDescriptor;
