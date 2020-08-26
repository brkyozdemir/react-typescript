import { Transaction } from "../types/Transaction";
import { AppActions } from "../types/actions";
import { v4 } from 'uuid';
import { AppState } from "../store/configureStore";
import { Dispatch } from "redux";

export const addTransaction = (transaction: Transaction): AppActions => ({
  type: 'ADD_TRANSACTION',
  transaction
});

export const editTransaction = (transaction: Transaction): AppActions => ({
  type: 'EDIT_TRANSACTION',
  transaction
});

export const removeTransaction = (id: string): AppActions => ({
  type: 'REMOVE_TRANSACTION',
  id
});

export const startAddTransaction = (transactionData:
  { id: string, name: string, description: string, transactionDate: string, amount: string }) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      id = '',
      name = '',
      description = '',
      transactionDate = '',
      amount = ''
    } = transactionData;
    const transaction = { id, name, description, transactionDate, amount };
    // const uuid = v4();
    // console.log(uuid);
    dispatch(
      addTransaction({
        ...transaction
      })
    );
  };
}

export const startRemoveTransaction = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeTransaction(id));
  }
}

export const startEditTransaction = (transaction: Transaction) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editTransaction(transaction))
  }
}
