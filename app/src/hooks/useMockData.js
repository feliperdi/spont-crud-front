import React, { useState } from 'react';



const useMockData = iniitialValues => {
    const [data, setData] = useState(iniitialValues);
    
    const insertData = data => {
        localStorage.setItem('mock', JSON.stringify(data))
    }

    const getData = () => {
        localStorage.getItem('mock') && setData(JSON.parse(localStorage.getItem('mock')));   
    }

    return [data, getData, insertData];
}

export default useMockData;