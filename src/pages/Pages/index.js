import { Suggest, HeroPages } from '~/components';
import images from '~/assets/images';

function Pages() {
    const suggestProps = [
        {
            type: 'Breakfast',
            list: [
                {
                    id: 'BF1',
                    name: 'Egg Frittata Muffins. PIN IT',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 24,
                    image: images.suggestBreakfast_1,
                },
                {
                    id: 'BF2',
                    name: 'Breakfast Bars. PIN IT',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 29,
                    image: images.suggestBreakfast_2,
                },
                {
                    id: 'BF3',
                    name: 'Breakfast Sandwiches',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 19,
                    image: images.suggestBreakfast_3,
                },
            ],
        },
        {
            type: 'Lunch',
            list: [
                {
                    id: 'L1',
                    name: 'Crispy chicken breasts',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 54,
                    image: images.suggestLunch_1,
                },
                {
                    id: 'L2',
                    name: 'Schezwan Noodles',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 49,
                    image: images.suggestLunch_2,
                },
                {
                    id: 'L3',
                    name: 'New Lubina Marinada',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 59,
                    image: images.suggestLunch_3,
                },
            ],
        },
        {
            type: 'Dinner',
            list: [
                {
                    id: 'D1',
                    name: 'Crispy chicken breasts',
                    desc: 'Fresh toasted sourdough bread with oDive oil and pomegranate.',
                    price: 54,
                    image: images.suggestDinner_1,
                },
                {
                    id: 'D2',
                    name: 'Schezwan Noodles',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 49,
                    image: images.suggestDinner_2,
                },
                {
                    id: 'D3',
                    name: 'New Lubina Marinada',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 59,
                    image: images.suggestDinner_3,
                },
            ],
        },
        {
            type: 'Starters',
            list: [
                {
                    id: 'S1',
                    name: 'Crispy chicken breasts',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 54,
                    image: images.suggestStarters_1,
                },
                {
                    id: 'S2',
                    name: 'Schezwan Noodles',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 49,
                    image: images.suggestStarters_2,
                },
                {
                    id: 'S3',
                    name: 'New Lubina Marinada',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 59,
                    image: images.suggestStarters_3,
                },
            ],
        },
    ];
    return (
        <>
            {suggestProps.map((items, index) => {
                if (index === 0) {
                    return (
                        <>
                            <Suggest items={items} />
                            <HeroPages />
                        </>
                    );
                }
                return <Suggest items={items} />;
            })}
        </>
    );
}

export default Pages;
