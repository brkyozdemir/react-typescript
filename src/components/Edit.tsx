
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ReactComponent as EditSVG } from '../assets/edit.svg';
import { useForm } from 'react-hook-form';
import { Transaction } from '../types/Transaction';
import moment from 'moment';
import { startEditTransaction } from '../actions/transactions';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { useTranslation } from 'react-i18next';

interface Props {
  data: Transaction
}

const currency: { name: string }[] = [
  { name: 'USD' },
  { name: 'TRY' },
  { name: 'EUR' }
]

const EditPage: React.FC<Props> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [error] = useState<string>('');
  const { register, handleSubmit } = useForm();
  const [loading] = useState<boolean>(false);
  const [name, setName] = useState<string>(data.name);
  const [description, setDescription] = useState<string>(data.description);
  const [transactionDate, setTransactionDate] = useState<string>(new Date(data.transactionDate).toString());
  const [id] = useState<number>(data.id);

  const mod = data.amount.toString();
  const lAm = mod.split('.')[0]
  const rAm = mod.split('.')[1]
  const [amount, setAmount] = useState<number>(parseInt(lAm));
  const [cent, setCent] = useState<string>(!rAm ? '0' : rAm);
  const [curr, setCurrency] = useState<string>(data.currency);

  const transactionDispatch = useDispatch<ThunkDispatch<any, any, AppActions>>();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const onSubmit = () => {
    const trans = {
      id: id,
      name: name,
      description: description,
      transactionDate: new Date(transactionDate),
      amount: parseFloat(amount + '.' + cent),
      currency: curr
    }
    transactionDispatch(startEditTransaction(trans));
    handleClose();
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCent(e.target.value);
  }

  const handleTDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionDate(e.target.value);
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);

  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  }

  return (
    <div>
      <span style={{ float: 'left', cursor: 'pointer' }} onClick={() => handleClickOpen()}>
        <EditSVG />
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${t('Edit.Transaction')} Id:${data.id}`}</DialogTitle>
        <DialogContent id="content_dialog">
          <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error && <h3 className="error">{error}</h3>}
            <label htmlFor="name">{t('Name')}</label>
            <input onChange={handleNameChange} name="name" value={name} required ref={register} />
            <label htmlFor="description">{t('Description')}</label>
            <textarea onChange={handleTextareaChange} required name="description" value={description} rows={3} ref={register} />
            <label htmlFor="transactionDate">{t('Transaction.Date')}</label>
            <input onChange={handleTDateChange} name="transactionDate" value={moment(transactionDate).format('YYYY-MM-DD')} type="date" required ref={register} />
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '0.3', paddingRight: '10px' }}>
                <label htmlFor="amount">{t('Price')}</label>
                <input id="amount_input" onChange={handleAmountChange} name="amount" type="number" value={amount} required ref={register} />
              </div>
              <div style={{ flex: '0.2', paddingRight: '10px' }}>
                <label htmlFor="cent">{t('Cent')}</label>
                <input id="amount_input" onChange={handleCentChange} name="cent" type="number" value={cent} ref={register} />
              </div>
              <div style={{ flex: '0.5' }}>
                <label htmlFor="currency">{t('Currency')}</label>
                <select onChange={handleSelectChange} value={curr} ref={register} name="currency" style={{ paddingTop: '8px' }}>
                  {currency.map((data, index) => (
                    <option key={index} value={data.name}>{data.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button disabled={loading}>{loading ? 'Loading...' : `${t('Confirm')}`}</button>
          </form>
          <div className="button_outform">
            <button disabled={loading} className="close_button" onClick={() => handleClose()}>{t('Close')}</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditPage;