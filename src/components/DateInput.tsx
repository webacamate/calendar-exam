import DateTimePicker from 'react-datetime-picker';
type InputDateInterface={
    title:String;
    date:Date;
    setDate:React.Dispatch<React.SetStateAction<Date>>;
}

export const DateInput=({title,date,setDate}:InputDateInterface)=>{
    return <div style={{margin:'10px'}}>
    <label className='basic-url' htmlFor='start'>{title}</label>
        <div className='input-group ml-5'>
            <DateTimePicker format='dd-MM-y'
                            value={date}
                            onChange={setDate}
                            className='form-control'></DateTimePicker>
    </div>
    </div>
};