'use client'
import './DataTableFromServer.css'; 
import Image from "next/image";
import { useAppContext } from './contexts/AppContext';

const DataTableFromServer = () => {
  const { tableData, search } = useAppContext();
  
  return (
    <div className='total border rounded shadow mt-4 mr-3 ml-3 '>
      <table className="data-table">
        <thead >
                 <tr >
                   <th>Schedules</th>
                   <th>S.No.</th>
                   <th>Chapter/Heading/Sub-Heading/Tarrif Item</th>
                   <th>Description of Goods</th>
                   <th>CGST Rate(%)</th>
                   <th>SGST/UTGST Rate(%)</th>
                   <th>IGST Rate(%)</th>
                   <th>Concensation <br />Cess</th>
                 </tr>
               </thead>
        <tbody>
          {tableData .length > 0 ? 
            tableData?.map((item, index) => 
              <tr key={index}>
                <td>{item['Schedules']}</td>
                <td>{item['SNo']}</td>
                <td>{item['Chapter_Heading_Sub_heading_Tariffitem']}</td>
                <td>{item['Description_of_Goods']}</td>
                <td>{item['CGST_Rate']}</td>
                <td>{item['SGST_UTGST_Rate']}</td>
                <td>{item['IGST_Rate']}</td>
                <td>{item['Compensation_Cess']}</td>
              </tr>
            )
           : (
            <tr>
              <td colSpan={8} style={{paddingleft:"30vw"}}>
                <div className='imageHai'>
                          <h2 >Data Not Found</h2>
                   <Image src="/Data.png" alt="image not found" width="500" height="500" 
                   />
                    </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableFromServer;
