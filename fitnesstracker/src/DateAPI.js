import React, { useEffect, useState } from 'react';

export default function DateAPI() {
    const [date, setDate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/timezone/Europe/London')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                
                setDate(data.datetime);
            })
            .catch(error => {
                console.error('Error fetching date:', error);
                setError('Could not fetch date/time data.');
            });
    }, []); 

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, optionsDate);



        return `${formattedDate} `; 
    };

    return (
        <div>
         
            {error && <p>{error}</p>}
            {date ? <p>{formatDate(date)}</p> : <p>Loading...</p>}
        </div>
    );
}
