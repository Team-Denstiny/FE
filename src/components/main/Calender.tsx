import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MonthCalendar: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const activeDate = moment(date).format('YYYY-MM-DD');
    const activateMonth = moment(date).format('MM')


    return(
       <div className='flex justify-center items-center mt-[25px] bg-white'>
            <div className='text-black'>
                <Calendar 
                    onChange={setDate} 
                    value={date}
                />
            </div>
       </div>
    )
};



export default MonthCalendar;
