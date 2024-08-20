import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment';



const MonthCalendar: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const activeDate = moment(date).format('YYYY-MM-DD');
    const activateMonth = moment(date).format('MM')

    return(
       <div className='flex justify-center items-center mt-[25px] bg-white'>
            <Calendar onChange={setDate} value={date}/>
       </div>
    )
};



export default MonthCalendar;
