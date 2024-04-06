import { useState } from 'react'
import { Table, Button } from '@mantine/core';

import './App.css'

function App() {
    //the amount of stiches in the first row
    const startAmount = 6;
  const [row, setRow] = useState<number>(1);
  const [stich, setStich] = useState<number>(1);
  const [hole, setHole] = useState<number>(1);
  const AddOne = (v: number) => ++v;
  const Add = () => {
    //potentially give one for the end stich?
    console.log("add");
    //hole : 1 2 3 4 5 6 7 8 
    //stich: 
    //
    setStich(AddOne);
    if(/*row == 1 ||*/ (stich +1) % row != 0){
        console.log("new hole");
        
        setHole(AddOne);
    }
    console.log("stich % row", stich % row);
    
    if(stich == row * startAmount)
    {
        console.log("new row");
        
        setRow(AddOne)
        setStich(1);
        setHole(1);
    }

  }


  return (
    <>
    <div>
        <Button onKeyPress={(e)=> {Add}} onClick={Add} >+</Button>
        <Table>
        <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Row</Table.Th>
          <Table.Th>Previous</Table.Th>
          <Table.Th>Current</Table.Th>
          <Table.Th>Next</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
            <Table.Td>Hole</Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td>{hole} </Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td> </Table.Td>
        </Table.Tr>
        <Table.Tr>
            <Table.Td>Stich</Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td>{stich} </Table.Td>
            <Table.Td> </Table.Td>
            <Table.Td> </Table.Td>
        </Table.Tr>
      </Table.Tbody>
        </Table>
    </div>
      <div>
        <p>row: {row}</p>
        <p>stich: {stich}</p>
      </div>
    </>
  )
}

export default App
