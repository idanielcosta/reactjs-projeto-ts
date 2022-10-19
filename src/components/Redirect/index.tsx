import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();
    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000);
    }, [time]);

    if (time <= 0) {
        navigate('/about', {
            state: `This is the state from Redirect: ${Math.random()}`,
        });
    }

    return (
        <div>
            <h1>Getting out of here in: {time} seconds</h1>
        </div>
    );
}