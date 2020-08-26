import React from 'react';
import './App.css';
import Transaction from './Transaction';
import AsideList from './AsideList';
import Layout from './Layout';


const App: React.FC = () => {

  return (
    <Layout>
      <AsideList />
      <Transaction />
    </Layout>
  );
}

export default App;
