import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { DataTable } from './DataTable';
// 3,4,5,8
function App() {
  const [data, setData] = useState([])
  const [dataTable, setDataTable] = useState([])
  const [query, setQuery] = useState('')
  const field = ['name','phone_number', 'email', 'address']
  useEffect(() => {
    axios.get('http://employees.asika.id/api/employees/1')
      .then(res => setData(res.data.data))
    }, [])
    
  useEffect(()=>{
    setDataTable(data.map(dt =>
      Object.keys(dt)
        .filter(key => field.includes(key))
        .reduce((obj, key) => {
          obj[key] = dt[key]
          return obj
        },{})
      ))
        // console.log(data)
      },[data])
      console.log(dataTable)
  return (
    <div className="App">
     <div>Filter Disini</div>
     {/* <div>{JSON.stringify(data)}</div> */}
     <DataTable data= { data }/>
    </div>
  );
}

export default App;
