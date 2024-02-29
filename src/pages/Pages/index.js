import { useState, useEffect } from 'react';
import { Suggest, HeroPages } from '~/components';

function Pages() {
    const [typeData, setTypeData] = useState([]);
    const [data, setData] = useState([]);

    const filterData = (type) => data.filter((item) => item.category === type);

    async function fetchData() {
        const response = await fetch('http://localhost:8080/items');
        const jsonData = await response.json();
        setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filteredData = [
            {
                type: 'Breakfast',
                data: filterData('breakfast'),
            },
            {
                type: 'Lunch',
                data: filterData('lunch'),
            },
            {
                type: 'Dinner',
                data: filterData('dinner'),
            },
            {
                type: 'Starters',
                data: filterData('starters'),
            },
        ];
        setTypeData(filteredData);
    }, [data]);

    return (
        <>
            {typeData.map((items, index) => {
                if (index === 0) {
                    return (
                        <>
                            <Suggest key={index} items={items.data} type={items.type} />
                            <HeroPages />
                        </>
                    );
                }
                return <Suggest key={index} items={items.data} type={items.type} />;
            })}
        </>
    );
}

export default Pages;
