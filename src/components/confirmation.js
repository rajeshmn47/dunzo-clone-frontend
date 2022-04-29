import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Confirmation() {
    const navigate=useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, []);
    return (
        <div>
            <div className='container'>
                <div>
                    <img
                        src='https://trioangleblog.s3-us-west-2.amazonaws.com/trioangle/images/swiggy-banner.svg'
                        alt='swiggy'
                    />
                    <div>
                        <h2
                            className='text-success'
                            style={{
                                fontFamily: 'sans-serif',
                                fontSize: '30px',
                            }}
                        >
                            ORDER CONFIRMED
                        </h2>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
