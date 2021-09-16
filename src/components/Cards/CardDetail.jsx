import React from 'react';
import { useParams, Route } from 'react-router-dom';

import Details from './Details';
import place1 from '../../assets/images/place1.jpg';
import place2 from '../../assets/images/place2.jpg';
import place3 from '../../assets/images/place3.jpg';
import place4 from '../../assets/images/place4.jpg';
import place5 from '../../assets/images/place5.jpg';
import place6 from '../../assets/images/place6.jpg';

const apparts = [
    {
        id: "ap1",
        name: "Sunny Apart",
        picture: place1,
        price: "30 000",
        credit: "4 000/month",
        area: "45 sq",
        rooms: "1",
        floor: "2",
        year: 2020
    },
    {
        id: "ap2",
        name: "Not sunny Apart",
        picture: place2,
        price: "20 000",
        credit: "3 000/month",
        area: "40 sq",
        rooms: "1",
        floor: "5",
        year: 2018
    },
    {
        id: "ap3",
        name: "New sunny Apart",
        picture: place3,
        price: "35 000",
        credit: "4 000/month",
        area: "45 sq",
        rooms: "1",
        floor: "2",
        year: 2020
    },
    {
        id: "ap4",
        name: "New not sunny Apart",
        picture: place4,
        price: "20 000",
        credit: "3 000/month",
        area: "40 sq",
        rooms: "1",
        floor: "5",
        year: 2018
    },
    {
        id: "ap5",
        name: "Sunny Apart",
        picture: place5,
        price: "30 000",
        credit: "4 000/month",
        area: "45 sq",
        rooms: "1",
        floor: "2",
        year: 2020
    },
    {
        id: "ap6",
        name: "Not sunny Apart",
        picture: place6,
        price: "20 000",
        credit: "3 000/month",
        area: "40 sq",
        rooms: "1",
        floor: "5",
        year: 2018
    }
];

const CardDetail = () => {
    const params = useParams();
    const appart = apparts.find( item => item.id === params.appartId);

    return (
        <Route path={`/components/${params.appartId}`}>
            <Details item={appart} />
        </Route>
    );
};

export default CardDetail;