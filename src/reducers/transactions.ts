import { Transaction } from "../types/Transaction";
import { TransactionActionTypes } from "../types/actions";
import { sampleData } from "../data/initial";

const initialState: Transaction[] = sampleData;

export default (state = initialState, action: TransactionActionTypes): Transaction[] => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.transaction];
    case 'REMOVE_TRANSACTION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TRANSACTION':
      return state.map(transaction => {
        if (transaction.id === action.transaction.id) {
          return {
            ...transaction,
            ...action.transaction
          };
        } else {
          return transaction;
        }
      });
    default:
      return state;
  }
};