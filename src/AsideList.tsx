
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: '100vh',
    backgroundColor: '#CFD8DC',
    flex: 0.2
  },
}));

const AsideList: React.FC = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 0}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          style={{ backgroundColor: '#90A4AE' }}
          button
          selected={selectedIndex === 1}
        >
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
        >
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
        >
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

export default AsideList;
