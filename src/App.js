import React from 'react';
import './App.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
const user="user";
function App() {
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(),new Date());
  const CurrTime = new Date().toLocaleTimeString();
  return (
   <div>
    <div className ="heading">
   
       <h1> HELLO00----- {user}😄</h1>
    </div>

    <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <p>
    <CalendarComponent value={dateValue}
    isMultiSelection={true}></CalendarComponent>
    </p>
    </div>

    <div className="time">
    <p>CURRENT TIME⌛️</p>
    {CurrTime}
    </div>

    </div>
  );
}

export default App;