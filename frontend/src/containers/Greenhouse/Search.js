import React from 'react';

import { useGHApi } from './useGHApi';
import CityGHI from './LocationGHIndex';

import { BaseURL, TOKEN } from './GHGConst';

const SearchGH = (data) => {
    
    const url=`${BaseURL}?apikey=${TOKEN}&lat=${data.data.lat}&lon=${data.data.lon}`
    const [GHIndex , loading, initial, error] = useGHApi(url);
    
    console.log(GHIndex)

    return(
        <div>
            { error }
            {
                loading ?
                    (<span>loading...</span>)
                    :
                    !initial && (<CityGHI data={ GHIndex.entries }/>)
            }
        </div>
    )
};

export default SearchGH;