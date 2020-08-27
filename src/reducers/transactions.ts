import { Transaction } from "../types/Transaction";
import { TransactionActionTypes } from "../types/actions";
import { sampleData } from "../data/initial";

const localItems = localStorage.rTsSD;
const initialState: Transaction[] = localItems !== undefined ? JSON.parse(localItems) : sampleData;
const transArr: Transaction[] = [];

export default (state = initialState, action: TransactionActionTypes): Transaction[] => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      localStorage.rTsSD = JSON.stringify([...state, action.transaction]);
      return [...state, action.transaction];
    case 'REMOVE_TRANSACTION':
      localStorage.rTsSD = JSON.stringify(state.filter(({ id }) => id !== action.id));
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TRANSACTION':
      return state.map(transaction => {
        if (transaction.id === action.transaction.id) {
          transArr.push(action.transaction);
          localStorage.rTsSD = JSON.stringify(transArr);
          return {
            ...transaction,
            ...action.transaction
          };
        } else {
          transArr.push(transaction);
          localStorage.rTsSD = JSON.stringify(transArr);
          return transaction;
        }
      });
    default:
      return state;
  }
};

