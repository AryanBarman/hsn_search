'use client'
import React, { useState, useEffect } from 'react';
import Header from './Header';
import DataTableFromServer from './DataTableFromServer';
import { useAppContext } from './contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'next/image';

const Api = '/hsn.json';

export default function Home() {
  const { tableData, setTableData, search } = useAppContext();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(Api, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const data2=data.data;
      if (data2.length > 0) {
        setTableData(
          data2.filter(
            item =>
              item["Description_of_Goods"].toLowerCase().includes(search.toLowerCase()) ||
              item["Chapter_Heading_Sub_heading_Tariffitem"].toLowerCase().includes(search.toLowerCase())
          )
         );
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <main>
      <Header/>
      {loading ? (
        <div className='loader' position="absolute" > 
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Image src="/3dMan2.jpg" alt='this is man' height="500" width="400"/>
        </div>
      ) : (
        <DataTableFromServer />
      )}
    </main>
  );
}
