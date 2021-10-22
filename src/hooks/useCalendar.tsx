import moment from "moment";
import { useState } from "react";

export const useCalendar = () => {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(moment().add(2,'month').toDate());
    
    const endDaysOfMounth=parseInt(moment(end).format('D'));
    const startDaysOfMounth=parseInt(moment(start).format('D'));
    const diffMounth=(moment(end).diff(start,'months'));
    const months = (endDaysOfMounth<startDaysOfMounth)
        ?(diffMounth+2)
        :(diffMounth+1);

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
        setEnd(date);
        (date<start) && setStart(date);
    }
    
    return {start, end, range, months, setStartDate, setEndDate}
}
