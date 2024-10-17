import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState(0);

  const [isPrinciple, setIsPrinciple] = useState(true);
  const [israte, setIsRate] = useState(true);
  const [isyear, setIsYear] = useState(true);

  const Validate = (e) => {
    if (!!e.target.value.match('^[0-9]*$')) {
      if (e.target.name === 'principle') {
        setPrinciple(e.target.value);
        setIsPrinciple(true);
      } else if (e.target.name === 'rate') {
        setRate(e.target.value);
        setIsRate(true);
      } else if (e.target.name === 'year') {
        setYear(e.target.value);
        setIsYear(true);
      }
    } else {
      if (e.target.name === 'principle') {
        setPrinciple(e.target.value);
        setIsPrinciple(false);
      } else if (e.target.name === 'rate') {
        setRate(e.target.value);
        setIsRate(false);
      } else if (e.target.name === 'year') {
        setYear(e.target.value);
        setIsYear(false);
      }
    }
  };

  const handleReset = () => {
    setPrinciple("");
    setRate("");
    setYear("");
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
  };

  const handleCalculate = () => {
    setInterest((principle * rate * year) / 100);
  };

  return (
    <>
      <div style={{ height: '100vh', backgroundColor: '#d5f5e3' }} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='container p-4 bg-light rounded' style={{ maxWidth: '500px' }}>
          <h1 className="text-center">Simple Interest App</h1>
          <p className="text-center">Calculate your simple interest easily</p>
          <div style={{ height: '150px', width: '100%', backgroundColor: 'lightblue' }} className='rounded d-flex justify-content-center align-items-center flex-column'>
            <h1> ₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>

          <div className="my-3">
            <TextField name='principle' id="outlined-basic" value={principle} label="₹ Principle Amount" variant="outlined" className='w-100' onChange={Validate} />
            {!isPrinciple && <span className='text-danger'>* Invalid input</span>}
          </div>
          <div className="mb-3">
            <TextField name='rate' id="outlined-basic" value={rate} label="Rate of Interest (p.a)%" variant="outlined" className='w-100' onChange={Validate} />
            {!israte && <span className='text-danger'>* Invalid input</span>}
          </div>
          <div className="mb-3">
            <TextField name='year' id="outlined-basic" value={year} label="Year" variant="outlined" className='w-100' onChange={Validate} />
            {!isyear && <span className='text-danger'>* Invalid input</span>}
          </div>
          <div className='mb-3 d-flex justify-content-between flex-wrap'>
            <Button onClick={handleCalculate} style={{ width: '190px', height: '60px', backgroundColor: '#ff9800', color: 'white' }} variant="contained" disabled={isPrinciple && israte && isyear ? false : true}>Calculate</Button>
            <Button onClick={handleReset} style={{ width: '190px', height: '60px' }} variant="outlined" color="secondary">Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
