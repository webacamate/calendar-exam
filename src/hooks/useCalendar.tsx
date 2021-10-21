import moment from "moment";
import { useState } from "react";

export const useCalendar = () => {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const months=moment(end).diff(start,'months')+1;
    const range = {
        startDate:start,
        endDate:end,
        key: 'selection',
      }
    const setStartDate= (date)=>{
        setStart(date);
        (date>end) && setEnd(date);
    }
    const setEndDate= (date)=>{
        (date<start) 
            ? console.log('error date')
            : setEnd(date);
    }
    return {start, end, range, months, setStartDate, setEndDate}
}
