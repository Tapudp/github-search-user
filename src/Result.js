import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';

const ITEMS_PER_PAGE = 9;

const Result = ({ apiState, searchValues, isLoading }) => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const columns = React.useMemo(
    () => [
      { Header: 'Profile Image', accessor: 'avatar_url' },
      { Header: 'User name', accessor: 'login' },
      { Header: 'Account type', accessor: 'type' },
    ],
    []
  );

  const prevPage = () => {
    setPage((p) => p - 1);
  };

  const nextPage = () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    if (!searchValues?.items) {
      return;
    }
    const startIndex = page < 2 ? 0 : (page - 1) * ITEMS_PER_PAGE;
    const endIndex = page * ITEMS_PER_PAGE;
    setRows(searchValues?.items.slice(startIndex, endIndex));
  }, [searchValues, page]);

  return !isLoading ? (
    <div className='result-wrapper'>
      <div className='table-container'>
        {searchValues?.items ? <CustomTable columns={columns} data={rows} /> : <></>}
      </div>
      {searchValues?.items && (
        <div className='page-controls'>
          <button className='submitBtn' onClick={prevPage} disabled={page < 2}>
            prev
          </button>
          <p>{page}/11</p>
          <button
            className='submitBtn'
            onClick={nextPage}
            disabled={searchValues.items.length < page * ITEMS_PER_PAGE}
          >
            next
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className='result-wrapper'>Loading . . . </div>
  );
};

export default Result;
