
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ReactComponent as RemoveSVG } from '../assets/remove.svg';
import { Transaction } from '../types/Transaction';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { startRemoveTransaction } from '../actions/transactions';
import { useTranslation } from 'react-i18next';

interface Props {
  data: Transaction
}

const RemovePage: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const transactionDispatch = useDispatch<ThunkDispatch<any, any, AppActions>>();
  const { t, i18n } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleRemove = () => {
    transactionDispatch(startRemoveTransaction(data.id));
    handleClose();
  }

  return (
    <div>
      <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => handleClickOpen()}>
        <RemoveSVG />
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${t('Delete.Transaction')} Id:${data.id}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Are.You.Sure')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: '#263238' }}>
            <strong>{t('Cancel')}</strong>
          </Button>
          <Button onClick={handleRemove} style={{ color: 'white', backgroundColor: 'red' }} autoFocus>
            {t('Delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RemovePage;
