import { Suggest } from '~/components';
import images from '~/assets/images';

function Pages() {
    const suggestProps = [
        {
            type: 'Breakfast',
            list: [
                {
                    name: 'Egg Frittata Muffins. PIN IT',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 24,
                    image: images.suggestBreakfast_1,
                },
                {
                    name: 'Breakfast Bars. PIN IT',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 29,
                    image: images.suggestBreakfast_2,
                },
                {
                    name: 'Breakfast Sandwiches',
                    desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
                    price: 19,
                    image: images.suggestBreakfast_3,
                },
            ],
        },
    ];
    return (
        <>
            <Suggest props={suggestProps[0]} />
        </>
    );
}

export default Pages;
