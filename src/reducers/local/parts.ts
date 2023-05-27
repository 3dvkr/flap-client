import {
  ADD_NEW_PART,
  DECREMENT_PART,
  INCREMENT_PART,
  PartActionType,
} from '../../actions/parts';

// import { v4 as uuid } from 'uuid'; // missing @types/uuid and not allowed to install modules

const initialState: Part[] = [
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
        if (part.name === action.partName && part.id === action.id) {
          return { ...part, amount: part.amount + 1 };
        }
        return part;
      });
    }
    case DECREMENT_PART: {
      return state.map(part => {
        if (part.name === action.partName && part.id === action.id) {
          return { ...part, amount: part.amount - 1 };
        }
        return part;
      });
    }
    case ADD_NEW_PART: {
      return [
        ...state,
        { name: action.partName, amount: 0, id: window.crypto.randomUUID() },
      ];
    }
    default:
      return state;
  }
};

export default partsReducer;
