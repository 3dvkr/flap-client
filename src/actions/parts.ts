export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';

interface IncrementPartAction {
  type: typeof INCREMENT_PART;
  partName: string;
}
interface DecrementPartAction {
  type: typeof DECREMENT_PART;
  partName: string;
}
export type PartActionType = IncrementPartAction | DecrementPartAction;

export const incrementPart = (partName: string): IncrementPartAction =>({
    type: INCREMENT_PART,
    partName,
  });
export const decrementPart = (partName: string): DecrementPartAction =>({
    type: DECREMENT_PART,
    partName,
  });
