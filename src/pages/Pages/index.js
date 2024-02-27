import { Suggest, HeroPages } from '~/components';
import images from '~/assets/images';

function Pages() {
    const data = [
        {
            id: 'BF1',
            category: 'breakfast',
            name: 'Egg Frittata Muffins',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 24,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_1,
        },
        {
            id: 'BF2',
            category: 'breakfast',
            name: 'Breakfast Bars',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 29,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_2,
        },
        {
            id: 'BF3',
            category: 'breakfast',
            name: 'Breakfast Sandwiches',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 19,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_3,
        },
        {
            id: 'L1',
            category: 'lunch',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_1,
        },
        {
            id: 'L2',
            category: 'lunch',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_2,
        },
        {
            id: 'L3',
            category: 'lunch',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_3,
        },
        {
            id: 'D1',
            category: 'dinner',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with oDive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_1,
        },
        {
            id: 'D2',
            category: 'dinner',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_2,
        },
        {
            id: 'D3',
            category: 'dinner',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_3,
        },
        {
            id: 'S1',
            category: 'starters',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_1,
        },
        {
            id: 'S2',
            category: 'starters',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_2,
        },
        {
            id: 'S3',
            category: 'starters',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_3,
        },
    ];

    const filterData = (type) => data.filter((item) => item.category === type);

    const typeData = [
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
