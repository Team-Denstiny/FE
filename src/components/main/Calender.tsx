import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import arrow from '../../assets/main/Arrow.png'

const Calendar: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [datePick, setDatePick] = useState<Date | null>(null);

    const week = makeWeekArray(date)

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const onPressArrowLeft = () => {
        const newDate = new Date(date.valueOf() - 86400000 * 7);
        setDate(newDate);
    };

    const onPressArrowRight = () => {
        const newDate = new Date(date.valueOf() + 86400000 * 7);
        setDate(newDate);
    };

    const handleDateClick = (date: Date) => {
        setDatePick(date);
    }

    return(
        <div className='pt-5'>
            
            <div className='font-noto pb-5 font-bold flex justify-center text-base gap-3'>
                <img src={arrow} className='w-6 h-6 transform rotate-90 cursor-pointer' onClick={onPressArrowLeft}></img>
                {date.getFullYear()}년 {date.getMonth()+1}월
                <img src={arrow} className='w-6 h-6 transform -rotate-90 cursor-pointer' onClick={onPressArrowRight}></img>
            </div>

            <div className='flex justify-center text-center'>
                <Table striped bordered hover className='font-noto font-light text-base '>
                    <thead>
                        <tr>
                            {daysOfWeek.map((day, index) => (
                                <th key={index} className={`px-4 pb-3 ${index === 0 ? 'text-red-500' : ''}`}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            {week.map((day, index) => (
                                <td key={index} className={`px-4 ${datePick?.getDate() === day[1].getDate() ? 'bg-gray rounded-full' : ''}`} onClick={() => handleDateClick(day[1])}>{day[1].getDate()}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
           
        </div>
    )
};

const makeWeekArray = (date: Date) => {
    const day = date.getDay()
    const week = []
    for (let i=0; i<7; i++){
        const newDate =  new Date(date.valueOf() + 86400000 * (i - day))
        week.push([i, newDate])
    }
    return week
}

export default Calendar;
