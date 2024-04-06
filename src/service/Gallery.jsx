import React, { useState, useEffect } from 'react';
import './gallery.scss';
import Card from '../components/card/Card';

/**
 * Renders a gallery component that fetches data from a JSON file and displays it using Card components.
 * @returns {JSX.Element} The gallery component.
 */
export default function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        /**
         * Fetches data from a JSON file and sets it to the component state.
         * @returns {void}
         */
        const fetchData = async () => {
            try {
                const response = await fetch('../../public/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className='home_gallery'>
            {data.map(d => (
                <Card
                    key={d.id}
                    id={d.id}
                    title={d.title}
                    cover={d.cover}
                />
            ))}
        </main>
    );
}
