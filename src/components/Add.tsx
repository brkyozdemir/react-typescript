
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from 'react-hook-form';
import { Transaction } from '../types/Transaction';
import { AppState } from '../store/configureStore';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { startAddTransaction } from '../actions/transactions';
import moment from 'moment';

const currency: { name: string }[] = [
  { name: 'USD' },
  { name: 'TRY' },
  { name: 'EUR' }
];

const useStyles = makeStyles(theme => ({
  span: {
    float: 'right',
    height: '40px',
    width: '219px',
    backgroundColor: '#455A64',
    color: 'white',
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

const AddPage: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const mDate = new Date();
  const dd = String(mDate.getDate()).padStart(2, '0');
  const mm = String(mDate.getMonth() + 1).padStart(2, '0');
  const yyyy = mDate.getFullYear();
  const today: string = mm + '.' + dd + '.' + yyyy;
  const [transactionDate, setTransactionDate] = useState<string>(today);

  const [amount, setAmount] = useState<string>('');
  const [curr, setCurrency] = useState<string>('TRY');

  const transactions = useSelector((state: AppState) => state.transactions);
  const transactionDispatch = useDispatch<ThunkDispatch<any, any, AppActions>>();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionDate(e.target.value);
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);

  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  }

  const onSubmit = () => {
    const trans = {
      id: transactions[transactions.length - 1].id + 1,
      name: name,
      description: description,
      transactionDate: new Date(transactionDate),
      amount: parseInt(amount),
      currency: curr
    }
    setName('');
    setDescription('');
    setTransactionDate('');
    setAmount('');
    setCurrency('');
    console.log(trans)
    transactionDispatch(startAddTransaction(trans));
    handleClose()
  }

  return (
    <div>
      <span onClick={() => handleClickOpen()} className={classes.span}>+ New Transaction</span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a New Transaction"}</DialogTitle>
        <DialogContent id="content_dialog">
          <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error && <h3 className="error">{error}</h3>}
            <label htmlFor="name">Name</label>
            <input onChange={handleNameChange} name="name" value={name} required ref={register} />
            <label htmlFor="description">Decription</label>
            <textarea onChange={handleTextareaChange} name="description" value={description} rows={3} ref={register} />
            <label htmlFor="transactionDate">Transaction Date</label>
            <input onChange={handleTDateChange} name="transactionDate" value={transactionDate} type="date" ref={register} />
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '0.5', paddingRight: '10px' }}>
                <label htmlFor="amount">Amount</label>
                <input id="amount_input" onChange={handleAmountChange} name="amount" type="number" value={amount} required ref={register} />
              </div>
              <div style={{ flex: '0.5' }}>
                <label htmlFor="currency">Currency</label>
                <select onChange={handleSelectChange} value={curr} ref={register} name="currency" style={{ paddingTop: '8px' }}>
                  {currency.map((data, index) => (
                    <option key={index} value={data.name}>{data.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button disabled={loading}>{loading ? 'Loading...' : 'Confirm'}</button>
          </form>
          <div className="button_outform">
            <button disabled={loading} className="close_button" onClick={() => handleClose()}>Close</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddPage;