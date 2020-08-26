import { Transaction } from "../types/Transaction";

export const sampleData: Transaction[] = [
  {
    id: '1',
    name: 'Kablonet',
    description: 'Turksat Kablonet internet ödemesi',
    transactionDate: '04.02.2020',
    amount: 'TRY 120'
  },
  {
    id: '2',
    name: 'Vodafone',
    description: 'Vodafone fatura ödemesi',
    transactionDate: '06.02.2020',
    amount: 'TRY 40'
  },
  {
    id: '3',
    name: 'Kira',
    description: 'Kira ödemesi',
    transactionDate: '01.03.2020',
    amount: 'TRY 2500'
  },
  {
    id: '4',
    name: 'Amazon',
    description: 'Amazon - Bluetooth kablosuz kulaklık',
    transactionDate: '07.03.2020',
    amount: 'USD 65'
  },
  {
    id: '5',
    name: 'Market',
    description: 'Market alışverişi',
    transactionDate: '08.03.2020',
    amount: 'TRY 107,60'
  },
  {
    id: '6',
    name: 'Taksit',
    description: 'Taksit - Laptop 3 / 4 taksit ödemesi',
    transactionDate: '16.03.2020',
    amount: 'TRY 1500'
  },
];
