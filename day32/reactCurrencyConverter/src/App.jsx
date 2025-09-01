import { useState } from 'react'
import InputBox from './Components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [conversionAmount, setConversionAmount] = useState(0);
  const data = useCurrencyInfo(from);
  //conversion function
  const convertedAmount = () => {
    const result = (data[to] * amount);
    return result;
  }

  // swap currency values function 
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById('result').innerText = convertedAmount();

            }}
          >
            <div className="w-full mb-1">
              <InputBox label='from' amount={amount} setAmount={setAmount} selectedCurrency={from} setSelectedCurrency={setFrom} currencyOptions={Object.keys(data)} />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label='to' selectedCurrency={to} setSelectedCurrency={setTo} currencyOptions={Object.keys(data)} />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <div id='result' className='text-white bg-red-600 w-full flex flex-wrap justify-center items-center'></div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
