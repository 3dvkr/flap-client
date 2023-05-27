export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';
export const ADD_NEW_PART = 'local/ADD_NEW_PART';

interface IncrementPartAction {
  type: typeof INCREMENT_PART;
  partName: string;
  id?: string;
}
interface DecrementPartAction {
  type: typeof DECREMENT_PART;
  partName: string;
  id?: string;
}
interface NewPartAction {
  type: typeof ADD_NEW_PART;
  partName: string;
}
export type PartActionType =
  | IncrementPartAction
  | DecrementPartAction
  | NewPartAction;

export const incrementPart = (partName: string, id?: string): IncrementPartAction => ({
  type: INCREMENT_PART,
  partName,
  id
});
export const decrementPart = (partName: string, id?: string): DecrementPartAction => ({
  type: DECREMENT_PART,
  partName,
  id
});
export const addNewPart = (partName: string): NewPartAction => ({
  type: ADD_NEW_PART,
  partName,
});
