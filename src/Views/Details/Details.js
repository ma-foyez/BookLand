import React from 'react';
import { useParams } from 'react-router-dom';
import BookCategory from '../../Components/BookCategory/BookCategory';
import BookDetails from '../../Components/BookDetails/BookDetails';
import Dashboard from '../../Components/Dashboard/Dashboard';
import DetailsHeader from '../../Components/DetailsHeader/DetailsHeader';
import Footer from '../../Components/Footer/Footer';
import SubscribeSection from '../../Components/SubscribeSection/SubscribeSection';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Details = () => {
    const { id } = useParams()
    return (
        <>
            <DetailsHeader />
            <BookDetails id={id} />
            <Testimonial />
            <Dashboard />
            <SubscribeSection />
            <BookCategory />
            <Footer />
        </>
    );
};

export default Details;