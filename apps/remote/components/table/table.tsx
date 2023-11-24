import React, { useState } from 'react';
import Select from 'react-select';

import styles from './table.module.css';

export type TableData = {
  name: string;
  age: number;
  email: string;
};

/* eslint-disable-next-line */
export interface TableProps {
  data: TableData[];
}

export function Table({ data }: TableProps) {
  return (
    <table className={`${styles.table}`}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Name</th>
          <th className={styles.tableHeader}>Age</th>
          <th className={styles.tableHeader}>Email</th>
          <th className={styles.tableHeader}>Food</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className={styles.tableRow} key={row.email}>
            <td className={styles.tableCell}>{row.name}</td>
            <td className={styles.tableCell}>{row.age}</td>
            <td className={styles.tableCell}>{row.email}</td>
            <td className={styles.tableCell}>
              <CellWithSelect />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function CellWithSelect() {
  const [selectedOption, setSelectedOption] = useState<(typeof options)[number] | null>(null);
  return <Select defaultValue={selectedOption} onChange={(value) => setSelectedOption(value)} options={options} />;
}

export default Table;
