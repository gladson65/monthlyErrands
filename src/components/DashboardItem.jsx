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
                <p>{data.email}</p>
                <p>{data.money}</p>
                <ul>
                    {
                        data.spendOn.length > 0 ?
                        data.spendOn.map((item, i)=> {
                            return <li key={i}>{item}</li>
                        })
                        :
                        <>
                            <li>No items</li>
                        </>
                    }
                </ul>
                <p>Date: {day}-{month}-{year}</p>
                <p>Time: {hours}:{minutes}:{seconds}</p>
            </div>
        </>
    )
}

export default DashboardItem;