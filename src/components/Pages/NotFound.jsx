import React from 'react';

import Wrapper from '../UI/Wrapper';

const NotFound = () => (
    <div className="error-screen">
        <Wrapper>
            <div className="error-heading">404</div>
            <div>Page not found</div>
        </Wrapper>
    </div>
);

export default NotFound;