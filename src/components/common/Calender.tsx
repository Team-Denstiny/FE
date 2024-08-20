import React, { useState } from 'react';
import "./Calender.css"
import Calendar from 'react-calendar';
import moment from 'moment';
import dateNext from "../../assets/dateNext.png"



const MonthCalendar: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date())
    const activeDate = moment(date).format('YYYY-MM-DD')
    const activateMonth = moment(date).format('MM')
    const [month, setMonth] = useState(activateMonth)
  
    return(
       <div className='flex justify-center items-center mt-[25px] bg-white'>
            <Calendar 
            onChange={setDate} 
            value={date}
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            formatDay={(locale,date)=> moment(date).format('D')}
            formatMonthYear={(locale,date) => moment(date).format('MM')}
            nextLabel={<img src={dateNext} />} 
            prevLabel={<img src={dateNext} className="transform rotate-180"/>}

            />
       </div>
    )
};



export default MonthCalendar;
