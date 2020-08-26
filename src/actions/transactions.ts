import { Transaction } from "../types/Transaction";
import { AppActions } from "../types/actions";
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

export const removeTransaction = (id: number): AppActions => ({
  type: 'REMOVE_TRANSACTION',
  id
});

export const startAddTransaction = (transactionData:
  { id: number, name: string, description: string, transactionDate: Date, amount: number, currency: string }) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      id = 0,
      name = '',
      description = '',
      transactionDate = new Date(),
      amount = 0,
      currency = ''
    } = transactionData;
    const transaction = { id, name, description, transactionDate, amount, currency };
    // const uuid = v4();
    // console.log(uuid);
    dispatch(
      addTransaction({
        ...transaction
      })
    );
  };
}

export const startRemoveTransaction = (id: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeTransaction(id));
  }
}

export const startEditTransaction = (transaction: Transaction) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editTransaction(transaction))
  }
}
