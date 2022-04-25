import React from 'react';
import Input1 from './input1';


const main={
    margin: 'auto',
    width: '500px',
    height: '522px',
    backgroundColor: '#008c8c',
    borderRadius: '20px',
    textAlign: 'center',
    lineHeight: '30px',
    color: 'black',
}

export default function Mainwindow() {
    return(<div style={main}>
    <Input1/>
    </div>
    )
}

