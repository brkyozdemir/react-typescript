
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Transaction.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './store/configureStore';
import { AppActions } from './types/actions';
import { Transaction } from './types/Transaction';
import { startAddTransaction } from './actions/transactions';
import { ThunkDispatch } from 'redux-thunk';
import Remove from './components/Remove';
import Edit from './components/Edit';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    textAlign: 'center'
  },

  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: '#CECECE',
  },
  tableCell: {
    border: '1px solid #707070',
    fontSize: '20px',
    width: '20px'
  },
  span: {
    float: 'right',
    height: '40px',
    width: '219px',
    backgroundColor: '#CECECE',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#707070'
    }
  }
}));

const TransactionPage = () => {
  const classes = useStyles();
  const transactions = useSelector((state: AppState) => state.transactions);
  const transactionDispatch = useDispatch<ThunkDispatch<any, any, AppActions>>();

  const handleAddTransaction = () => {
    const trans = {
      id: (parseInt(transactions[transactions.length - 1].id) + 1).toString(),
      name: 'asd',
      description: 'asd2',
      transactionDate: 'asd3',
      amount: 'asd4'
    }
    transactionDispatch(startAddTransaction(trans));
  }

  return (
    <div className="transaction__flex">
      <div className={classes.root}>
        <span onClick={() => handleAddTransaction()} className={classes.span}>+ New Transaction</span>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">ID</TableCell>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Name</TableCell>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Description</TableCell>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Transaction Date</TableCell>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Amount</TableCell>
              <TableCell className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableCell} align="center">{row.id}</TableCell>
                <TableCell className={classes.tableCell} align="center">{row.name}</TableCell>
                <TableCell className={classes.tableCell} align="center">{row.description}</TableCell>
                <TableCell className={classes.tableCell} align="center">{row.transactionDate}</TableCell>
                <TableCell className={classes.tableCell} align="center">{row.amount}</TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Edit />
                  <Remove />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionPage;