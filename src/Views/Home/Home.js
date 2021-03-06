import React from 'react';
import Header from '../../Components/Header/Header';
import BookCard from '../../Components/BookCard/BookCard';
import LetestNews from '../../Components/LetestNews/LetestNews';
import Dashboard from '../../Components/Dashboard/Dashboard';
import SubscribeSection from '../../Components/SubscribeSection/SubscribeSection';
import Footer from '../../Components/Footer/Footer';
import FeatureCarousel from '../../Components/FeatureProducts/FeatureProducts';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';

const Home = () => {
    return (
        <>
            <Header />
            <BookCard />
            <FeatureCarousel />
            <LetestNews />
            <CustomerReview />
            <Dashboard />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default Home;