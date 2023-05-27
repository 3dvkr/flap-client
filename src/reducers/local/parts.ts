// import { AnyAction } from 'redux';
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
      const idx = state.findIndex(part => part.name === action.partName);
      const newAmount = state[idx].amount + 1;
      return state
        .slice(0, idx)
        .concat({ name: action.partName, amount: newAmount })
        .concat(...state.slice(idx + 1));
    }
    case DECREMENT_PART: {
      const idx = state.findIndex(part => part.name === action.partName);
      const newAmount = state[idx].amount - 1;
      return state
        .slice(0, idx)
        .concat({ name: action.partName, amount: newAmount })
        .concat(...state.slice(idx + 1));
    }

    default:
      return state;
  }
};

export default partsReducer;
