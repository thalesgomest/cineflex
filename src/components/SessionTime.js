function SessionTime({weekday, date, showtimes}) {

    return (
        <>
            <p>{weekday} - {date}</p>
            <div className="sessions__times">
                    {showtimes.map((time) => <div className="session__time"><span>{time.name}</span></div>)}
            </div>
        </>
    );
}

export default SessionTime;