import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Circles
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;
