import { useLocation } from 'react-router-dom';
import './index.css';

export const About = () => {
    const { state } = useLocation();

    return (
        <div>
            <h1>About</h1>
            <p>{state}</p>
        </div>
    );
}