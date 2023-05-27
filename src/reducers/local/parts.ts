import {
  ADD_NEW_PART,
  DECREMENT_PART,
  INCREMENT_PART,
  PartActionType,
} from '../../actions/parts';

// import { v4 as uuid } from 'uuid'; // missing @types/uuid and not allowed to install modules

const initialState = [
  {
    name: 'Wheel',
    amount: 0,
  },
  {
    name: 'Chasis',
    amount: 0,
  },
  {
    name: 'Engine',
    amount: 0,
  },
  {
    name: 'Windshield',
    amount: 0,
  },
];

const partsReducer = (state = initialState, action: PartActionType) => {
  switch (action.type) {
    case INCREMENT_PART: {
      return state.map(part => {
        if (part.name === action.partName) {
          return { ...part, amount: part.amount + 1 };
        }
        return part;
      });
    }
    case DECREMENT_PART: {
      return state.map(part => {
        if (part.name === action.partName) {
          return { ...part, amount: part.amount - 1 };
        }
        return part;
      });
    }
    case ADD_NEW_PART: {
      // check if part exists
      const isDuplicate = state.map(el => el.name).includes(action.partName);
      // alter entered name if it's a duplicate
      if (isDuplicate) {
        const partCode = window.crypto.randomUUID();
        const newName = `${action.partName}--${partCode}`;
        return [...state, { name: newName, amount: 0 }];
      }
      // add new part to state
      return [...state, { name: action.partName, amount: 0 }];
    }
    default:
      return state;
  }
};

export default partsReducer;
