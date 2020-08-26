import { Transaction } from "../types/Transaction";

export const sampleData: Transaction[] = [
  {
    id: 1,
    name: 'Kablonet',
    description: 'Turksat Kablonet internet ödemesi',
    transactionDate: new Date('02.04.2020'),
    amount: 120,
    currency: 'TRY'
  },
  {
    id: 2,
    name: 'Vodafone',
    description: 'Vodafone fatura ödemesi',
    transactionDate: new Date('02/06/2020'),
    amount: 40,
    currency: 'TRY'
  },
  {
    id: 3,
    name: 'Kira',
    description: 'Kira ödemesi',
    transactionDate: new Date('03/01/2020'),
    amount: 2500,
    currency: 'TRY'
  },
  {
    id: 4,
    name: 'Amazon',
    description: 'Amazon - Bluetooth kablosuz kulaklık',
    transactionDate: new Date('03/07/2020'),
    amount: 65,
    currency: 'USD'
  },
  {
    id: 5,
    name: 'Market',
    description: 'Market alışverişi',
    transactionDate: new Date('03/08/2020'),
    amount: 107.60,
    currency: 'TRY'
  },
  {
    id: 6,
    name: 'Taksit',
    description: 'Taksit - Laptop 3 / 4 taksit ödemesi',
    transactionDate: new Date('03/16/2020'),
    amount: 1500,
    currency: 'TRY'
  },
];
