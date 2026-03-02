import { useState, useEffect } from 'react';
import './DashboardItem.css'

function DashboardItem({data}) {

    // to get date and time from ISO timestamp
    const isoString = `${data.created_at}`;
    const date = new Date(isoString);

    // Get the year
    const year = date.getFullYear();
    // Get month (0-based, so +1) and day
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Get hours, minutes, seconds
    const hours = date.getHours(); 
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <>
            <div id="expenseItemDiv">
                <p className='text-sm'>User: {data.email}</p>
                <p className='text-sm'>Spent: {data.money}</p>
                <ul>
                    {
                        data?.spendOn?.length > 0 &&
                        <span>{data.spendOn.length}</span>
                    }

                    {
                        data?.spendOn?.length > 0 ?
                        data.spendOn.map((item, i)=> {
                            return <li key={i}>{item}</li>
                        })
                        :
                        <>
                            <li>No items</li>
                        </>
                    }
                </ul>
                <p className='text-sm'>Date: {day}-{month}-{year}</p>
                <p className='text-sm'>Time: {hours}:{minutes}:{seconds}</p>
            </div>
        </>
    )
}

export default DashboardItem;