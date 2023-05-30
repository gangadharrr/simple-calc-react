import { useState } from 'react';
import './App.css';
import { CircleButton } from './components/CircleButton';
import { CustomNumInp } from './components/CustomNumInp';

function App() {
  const [firstInput, setFirst]=useState('0');
  const [secondInput, setSecond]=useState('0');
  const [focusItem, setFocusItem]=useState('first-input');

  const getFocusedItem=(ident)=>
  {
    setFocusItem(ident);
  }
  const add=()=>
  {
    alert("Output : "+(parseInt(firstInput)+parseInt(secondInput)))
  }
  const sub=()=>
  {
    alert("Output : "+(parseInt(firstInput)-parseInt(secondInput)))
  }
  const mul=()=>
  {
    alert("Output : "+(parseInt(firstInput)*parseInt(secondInput)))
  }
  const div=()=>
  {
    alert("Output : "+(parseInt(firstInput)/parseInt(secondInput)))
  } 
  const BackSpace=()=>
  {
    if(focusItem==='first-input')
    {
      setFirst(String(firstInput).length===1?'0':String(firstInput).slice(0, firstInput.length-1))

    }
    else{
      setSecond(String(secondInput).length===1?'0':String(secondInput).slice(0, secondInput.length-1));
  
    }
  }
  const setValue=(num)=>
  { 
    if(focusItem==='first-input')
    {setFirst(firstInput==='0'?String(num):firstInput+''+num)}
    else
    setSecond(secondInput==='0'?num:secondInput+''+num);
  }
  const AllClear=()=>
  {
    setFirst('0');
    setSecond('0');

  }
  return (
    <div className="App">
      <div className="container">
        <div className='headings'>
          <h1>Calculator</h1>
        </div>
        <div className='inputs'>
          <CustomNumInp onClick={()=>{getFocusedItem('first-input')}} value={firstInput} id="first-input"/>
          <CustomNumInp onClick={()=>{getFocusedItem('second-input')}} value={secondInput} id="second-input"/>
        </div>
        <div className='buttons'>
          <CircleButton onClick={()=>{setValue(1)}} text='1'/>
          <CircleButton onClick={()=>{setValue(2)}} text='2'/>
          <CircleButton onClick={()=>{setValue(3)}} text='3'/>
          <CircleButton onClick={()=>{add()}} bgcolor='blue'text='+'/>
          <CircleButton onClick={()=>{setValue(4)}} text='4'/>
          <CircleButton onClick={()=>{setValue(5)}} text='5'/>
          <CircleButton onClick={()=>{setValue(6)}} text='6'/>
          <CircleButton onClick={()=>{sub()}} bgcolor='blue'text='-'/>
          <CircleButton onClick={()=>{setValue(7)}} text='7'/>
          <CircleButton onClick={()=>{setValue(8)}} text='8'/>
          <CircleButton onClick={()=>{setValue(9)}} text='9'/>
          <CircleButton onClick={()=>{mul()}} bgcolor='blue'text='x'/>
          <CircleButton onClick={()=>{AllClear()}} text='C'/>
          <CircleButton onClick={()=>{setValue(0)}} text='0'/>
          <CircleButton onClick={()=>{BackSpace()}} text='⌫'/>
          <CircleButton onClick={()=>{div()}} bgcolor='blue' text='/'/>
        </div>
      </div>
    </div>
  );
}

export default App;
