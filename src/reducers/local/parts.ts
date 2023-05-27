import {
  DECREMENT_PART,
  INCREMENT_PART,
  PartActionType,
} from '../../actions/parts';

// import { v4 as uuid } from 'uuid';

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
    default:
      return state;
  }
};

export default partsReducer;
