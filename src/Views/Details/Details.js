import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../../Components/BookDetails/BookDetails';
import DetailsHeader from '../../Components/DetailsHeader/DetailsHeader';

const Details = () => {
    const { id } = useParams()
    return (
        <>
            <DetailsHeader />
            <BookDetails id={id} />
        </>
    );
};

export default Details;