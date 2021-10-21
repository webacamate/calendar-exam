import { DateRangePicker } from 'react-date-range';
import './calendar.css';
import { useState } from 'react';
import { DateInput } from '../components/DateInput';
import { useCalendar } from '../hooks/useCalendar';
import moment from 'moment';


export const CalendarApp = () => {
    const [column, setColumn] = useState('2');
    const {start, end, range, months, setStartDate, setEndDate} =useCalendar();
    const columnsSize=333*parseInt(column);

    const columsnInput=(columns:number)=>{        
        let options=[];
        for (let index = 1; index <= columns; index++) {
            options.push(
                <option value={`${index}`} key={index}>{index}</option>)
        }
        return <div style={{margin:'10px'}}>
            <label className='basic-url' htmlFor='start'>Colums</label>
            <select className="form-select"
                value={column}
                onChange={({target})=>setColumn(target.value)}>
                {options}
            </select>
        </div>};

    const form=<form style={{display:'flex'}}>
            <DateInput title='Start' date={start} setDate={setStartDate}/>
            <DateInput title='End' date={end} setDate={setEndDate}/>
            {columsnInput(10)}
        </form>

    return (
        <div className='container'>
            <br/>
            <h1>Calendar</h1>
            <hr/>
            {form}
            <div style={{width:`${columnsSize}px`}}>
                <DateRangePicker
                    ranges={[range]}
                    onChange={()=>{}}
                    showDateDisplay={false}
                    showPreview={false}
                    months={months}
                    direction='horizontal'
                />
        </div>
        </div>
    )
}
