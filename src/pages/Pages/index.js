import { useState, useEffect } from 'react';
import { Suggest, HeroPages } from '~/components';

import { getItems } from '~/services/UserService';

function Pages() {
    const [typeData, setTypeData] = useState([]);
    const [data, setData] = useState([]);

    const filterData = (type) => data.filter((item) => item.category === type);

    const getItem = async () => {
        let res = await getItems();
        setData(res.data.items);
    };

    useEffect(() => {
        getItem();
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
