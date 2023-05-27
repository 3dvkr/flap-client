import { Dispatch } from 'redux';

export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';

type IncrementType = typeof INCREMENT_PART;
type DecrementType = typeof DECREMENT_PART;

interface IncrementPartAction {
  type: IncrementType;
  partName: string;
}
interface DecrementPartAction {
  type: DecrementType;
  partName: string;
}

export const incrementPart = (partName: string): IncrementPartAction =>({
    type: INCREMENT_PART,
    partName,
  });
export const decrementPart = (partName: string): DecrementPartAction =>({
    type: DECREMENT_PART,
    partName,
  });
