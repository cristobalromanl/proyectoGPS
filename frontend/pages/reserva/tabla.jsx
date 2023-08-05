import React from 'react'
import DataTable from 'react-data-table-component'

const tablaprueba=[ 
  
    {hora:"12:00",fecha:"20/05/23"}, 
    {hora:"13:00",fecha:"20/05/23"}, 
    {hora:"14:00",fecha:"20/05/23"}, 
    {hora:"15:00",fecha:"20/05/23"}, 
    {hora:"16:00",fecha:"20/05/23"}, 
];

const columnas=[
    {name: 'Hora', selector: 'hora'},
    {name: 'Cancha 1', selector: 'hora'},
    {name: 'Cancha 3',selector: 'fecha'}
]

function xd(){
    return (
       <div>
            <DataTable  
              columns={columnas}  
               data={tablaprueba} 
            />
        </div>
        
      )
}
export default xd;