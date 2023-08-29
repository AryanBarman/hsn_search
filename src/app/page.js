'use client'
import Header from './Header';
import DataTableFromServer from './DataTableFromServer';
import {useState, useEffect} from 'react'
import { useAppContext } from './contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
const Api = 'http://localhost:3500/data';
export default function Home() {
  const {tableData,setTableData,search,setSearch}=useAppContext();
  const [loading, setLoading]=useState(true);
  const fetchData = async (url) => {
       setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setTableData(data.filter(
              item =>
                item["Description_of_Goods"].toLowerCase().includes(search.toLowerCase()) ||
                item["Chapter_Heading_Sub_heading_Tariffitem"].toLowerCase().includes(search.toLowerCase())
            ));
            setLoading(false);
        console.log("fetch\n");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData(Api);
  }, [search]);
 

  return (
     <main>
      <Header/>
      {loading ? (
        <div className='loader'> <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner></div>
      ) : (
        <DataTableFromServer />
      )}
    </main>
  )
}