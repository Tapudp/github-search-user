import { useSortBy, useTable } from 'react-table';
import React from 'react';
import styled from 'styled-components';

const CustomTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultCanSort: false,
    },
    useSortBy
  );

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => {
                    return (
                      // Apply the header cell props
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ' 📈'}
                      </th>
                    );
                  })
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.column.id === 'avatar_url' ? (
                              <img src={cell.value} alt='profile_avatar' />
                            ) : (
                              cell.render('Cell')
                            )
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Styles>
  );
};

const Styles = styled.div`
  table {
    margin: 0 auto;
    border-spacing: 0;
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 600px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    tr {
      ${'' /* :first-child {
        td {
          border-top: 1px solid black;
        }
      } */}
      border-bottom: 1px solid #dddddd;
      td,
      img {
        height: 50px;
        width: 50px;
      }
      :last-child {
        td {
          border-bottom: 2px solid #009879;
        }
      }
    }

    th {
      background-color: #009879;
      color: #ffffff;
      text-align: center;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      tr:first-child {
        td {
          border-top: 2px solid black;
        }
      }
      font-weight: bolder;
    }
  }
`;

export default CustomTable;
