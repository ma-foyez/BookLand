import React from 'react';
import BookCard from '../../Components/Header/BookCard/BookCard';
import Footer from '../../Components/Header/Footer/Footer';
import Header from '../../Components/Header/Header';
import SubscribeSection from '../../Components/Header/SubscribeSection/SubscribeSection';

const Home = () => {
    return (
        <>
            <Header />
            <BookCard />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default Home;