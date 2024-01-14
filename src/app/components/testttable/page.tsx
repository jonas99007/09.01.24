import React from 'react';

const MyTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Alter</th>
          <th>Stadt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Max Mustermann</td>
          <td>25</td>
          <td>Musterstadt</td>
        </tr>
        <tr>
          <td>Lisa Beispiel</td>
          <td>30</td>
          <td>Beispielstadt</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MyTable;
