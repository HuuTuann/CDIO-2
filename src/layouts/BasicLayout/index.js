import { HeaderSecond, Footer } from '~/layouts/components';

function BasicLayout({ children }) {
    return (
        <>
            <HeaderSecond />
            {children}
            <Footer />
        </>
    );
}

export default BasicLayout;
