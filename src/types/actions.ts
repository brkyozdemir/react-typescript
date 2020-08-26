import { Transaction } from "./Transaction";

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

export interface EditTransactionAction{
  type: typeof EDIT_TRANSACTION;
  transaction: Transaction;
}

export interface RemoveTransactionAction{
  type: typeof REMOVE_TRANSACTION;
  id: number;
}

export interface AddTransactionAction{
  type: typeof ADD_TRANSACTION;
  transaction: Transaction;
}

export type TransactionActionTypes = AddTransactionAction | EditTransactionAction | RemoveTransactionAction;

export type AppActions = TransactionActionTypes;
