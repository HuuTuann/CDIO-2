import {
    Hero,
    MostPopular,
    TimeOpen,
    PreviewMenu,
    OurRestaurant,
    ReserveBook,
    DailyOffer,
    OurChef,
    OurBlog,
    Subscribe,
} from '~/components';

function Home() {
    return (
        <>
            <Hero />
            <MostPopular />
            <TimeOpen />
            <PreviewMenu />
            <OurRestaurant />
            <ReserveBook />
            <DailyOffer />
            <OurChef />
            <OurBlog />
            <Subscribe />
        </>
    );
}

export default Home;
