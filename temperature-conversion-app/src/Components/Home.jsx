import React, { useState } from 'react'
import { MDBInput, MDBRadio, MDBBtn } from 'mdb-react-ui-kit';

function Home() {

    //hold temperature, unit
    const [temp, setTemp] = useState('')
    const [unit, setUnit] = useState('')

    //hold result
    const [result, setResult] = useState(0)

    //hold output unit
    const [unitResult, setUnitResult] = useState('');

    //console
    console.log(temp, unit, result)

    //temp conversion
    const handleConversion = () => {

        let unitOutput;
        let output;

        if (unit == 'Celsius') {
            output = (temp * (9 / 5)) + 32
            unitOutput = '°F';
        }
        else if (unit == 'Fahrenheit') {
            output = (temp - 32) * (5 / 9);
            unitOutput = '°C';
        }
        console.log(output)
        setResult(output)
        setUnitResult(unitOutput)
    }

    //clear or reset
    const handleReset = () => {
        setTemp('')
        setUnit('')
        setResult(0)
        setUnitResult('')
    }
    return (
        <div className='p-4 m-5'>
            <div className='p-3 m-3'>
                <h1 className='text-center py-4'>Convert your temperature here</h1>
                <div className='px-5 mx-5'>
                    <MDBInput onChange={(e) => setTemp(e.target.value)} label="Enter temperature" id="form1" type="text" className='my-3'value={temp} />
                    <div>
                        <MDBRadio onChange={(e) => setUnit(e.target.value)} name="unit" value='Celsius' id='celsius' label='Degree Celsius' />
                        <MDBRadio onChange={(e) => setUnit(e.target.value)} name="unit" value='Fahrenheit' id='fahrenheit' label='Fahrenheit' />
                    </div>
                </div>
                <div className='m-5 text-center' style={{ backgroundColor: 'primary', border: '2px solid black' }}>
                    <h3>{result}{unitResult}</h3>
                </div>
                <div className='p-3 m-3 text-center'>
                    <MDBBtn onClick={handleConversion} className='m-1'>Convert</MDBBtn>
                    <MDBBtn onClick={handleReset} variant="outlined" className='m-1'>Clear</MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default Home