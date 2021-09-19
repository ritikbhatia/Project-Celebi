import React from 'react';

const NoDataFound = () => {
    return(
        <h3 className='no-data-found'>
            <span>No Data Found!</span>
            <br/>
            <span style={{marginLeft:"40px"}}>We are working hard to get the data for your location. How about trying out another location?</span>
        </h3>
    )
};

export default NoDataFound;