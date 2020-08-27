
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Transaction.css';
import { useSelector } from 'react-redux';
import { AppState } from './store/configureStore';
import Remove from './components/Remove';
import Edit from './components/Edit';
import Add from './components/Add';
import moment from 'moment';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    textAlign: 'center'
  },
  scrollable: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    textAlign: 'center',
    height: '720px'
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
  },
  tableCell: {
    border: '1px solid #707070',
    fontSize: '20px',
    width: '20px'
  },
  container: {
    maxHeight: 600,
  },
}));

const TransactionPage = () => {
  const classes = useStyles();
  const transactions = useSelector((state: AppState) => state.transactions);

  return (
    <div className="transaction__flex">
      <div className={classes.root}>
        <Add />
        <TableContainer className={classes.container}>
          <Table stickyHeader className={classes.table} id="fixed_header">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">ID</TableCell>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Name</TableCell>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Description</TableCell>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Transaction Date</TableCell>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center">Amount</TableCell>
                <TableCell scope="col" className={classes.tableCell} style={{ fontWeight: 700, fontSize: '20px' }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map(row => (
                <TableRow key={row.id}>
                  <TableCell className={classes.tableCell} align="center">{row.id}</TableCell>
                  <TableCell className={classes.tableCell} align="center">{row.name}</TableCell>
                  <TableCell className={classes.tableCell} align="center">{row.description}</TableCell>
                  <TableCell className={classes.tableCell} align="center">{moment(row.transactionDate).format('DD.MM.YYYY')}</TableCell>
                  <TableCell className={classes.tableCell} align="center">{row.currency + ' ' + row.amount}</TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Edit data={row} />
                    <Remove data={row} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TransactionPage;