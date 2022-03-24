import React, { useCallback, useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Tenent } from '../modal/Tenent';
import Loading from './Loading';

const Home = () => {
  const [data, setData] = useState<Tenent[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const APICalling = useCallback(() => {
    console.log("API calling")
    const API = 'https://hungry-skinny-cappelletti.glitch.me/tenants';
    fetch(API)
    .then(response => response.json())  
    .then(res => {
        setData(res.filter((item: Tenent) => item.id.length <= 3));
        setIsLoading(false);
    });
  }, [])

  useEffect(() => {
      setIsLoading(true);
      APICalling();
  }, [APICalling]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'code', headerName: 'Code', width: 330 },
    { field: 'name', headerName: 'Name', width: 330 },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 100,
    },
    {
      field: 'type',
      headerName: 'Type',
      // type: 'number',
      width: 100,
    },
    {
      field: 'description',
      headerName: 'Description',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
      width: 360
    }
  ];

  return (
    <div style={{ height: 650, width: '100%' }}>
      {isLoading ? <Loading /> : <DataGrid
        rows={data}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />}
    </div>
  )
}

export default Home;
