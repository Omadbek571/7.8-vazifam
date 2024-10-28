import React, { useState } from 'react';
import Uzbimg from "./images/uzb.jpg";
import Amerkika from "./images/usd.png";
import DubaiEuro from "./images/dubauEuro.jpg";
import Convert from "./images/convert.png"
import Send from "./images/send.png"
import Chart from "./images/chart.png"
import Notification from "./images/notification.png"

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [qiymat, setQiymat] = useState(1);
  const [brinchiValyuta, setBirinchiValyuta] = useState('USD');
  const [ikkinchiValyuta, setIkkinchiValyuta] = useState('EUR');
  const [natijaAylantirda, setNatijaAylantirda] = useState(0);

  //toastify
  const btn = () => toast(`Converted ${qiymat} ${brinchiValyuta} to ${natijaAylantirda} ${ikkinchiValyuta}`);

  const objVal = {
    USD: { EUR: 0.85, UZS: 11600, }, 
    EUR: { USD: 1.18, UZS: 13600, }, 
    UZS: { USD: 0.000086, EUR: 0.000073,}, 
  };

  const handleConvert = function() {
    const rate = objVal[brinchiValyuta][ikkinchiValyuta]; 
    const result = qiymat * rate; 
    
    if (result !== result) {
      setNatijaAylantirda('Xato');
    } else {
      setNatijaAylantirda(result.toFixed(2));
      btn();
    }
  };

  function handleConvertt(e) {
    e.preventDefault();
    alert("Convert pagesda turibsiz");
  }
  function handleSend(e) {
    e.preventDefault();
    alert("Send pages hali tayorlangani yoq");
  }
  function handleCharts(e) {
    e.preventDefault();
    alert("Charts pages hali tayorlangani yoq");
  }
  function handleAlerts(e) {
    e.preventDefault();
    alert("Alerts pages hali tayorlangani yoq");
  }

  return (
    <div className='bg-blue-950 container mx-auto mt-5'>
      <div className="p-4 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 border-2 p-2 rounded-full flex justify-between">
          <div className='rounded-full border-2 py-1 pb-1 px-28 cursor-pointer font-bold text-black hover:bg-blue-950 hover:text-white flex gap-2' onClick={handleConvertt}><img src={Convert} alt="" width={24} height={10}/> Convert</div>
          <div className='rounded-full border-2 py-1 pb-1 px-28 cursor-pointer font-bold text-black hover:bg-blue-950 hover:text-white flex gap-2' onClick={handleSend}><img src={Send} alt="" width={20}/>Send</div>
          <div className='rounded-full border-2 py-1 pb-1 px-28 cursor-pointer font-bold text-black hover:bg-blue-950 hover:text-white flex gap-2' onClick={handleCharts}><img src={Chart} alt="" width={20}/>Charts</div>
          <div className='rounded-full border-2 py-1 pb-1 px-28 cursor-pointer font-bold text-black hover:bg-blue-950 hover:text-white flex gap-2' onClick={handleAlerts}><img src={Notification} alt="" width={20}/>Alerts</div>
        </h2>

        <div className="flex mb-4 gap-2">
          <div className="px-8 pb-4 rounded-xl border-2 flex flex-col w-full mx-auto">
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              value={qiymat}
              onChange={(e) => setQiymat(e.target.value)}
              className="py-2 pb-2 px-20 border rounded bg-white border-none text-black"
            />
          </div>
          <div className="px-8 pb-4 rounded-xl border-2 flex flex-col w-full mx-auto">
            <label className="block text-sm font-medium">From</label>
            <div className="flex items-center">
              <img 
                src={brinchiValyuta === "EUR" ? DubaiEuro : brinchiValyuta === "USD" ? Amerkika : Uzbimg} 
                alt={brinchiValyuta} 
                className="w-6 h-6 mr-2" 
              />
              <select
                value={brinchiValyuta}
                onChange={(e) => setBirinchiValyuta(e.target.value)}
                className="py-2 pb-2 px-20 border rounded bg-white border-none text-black"
              >
                <option value="USD">USD - U.S. Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="UZS">UZS - Uzbek Som</option>
              </select>
            </div>
          </div>
          <div className="px-8 pb-4 rounded-xl border-2 flex flex-col w-full mx-auto">
            <label className="block text-sm font-medium">To</label>
            <div className="flex items-center">
              <img 
                src={ikkinchiValyuta === "EUR" ? DubaiEuro : (ikkinchiValyuta === "USD" ? Amerkika : Uzbimg)} 
                alt={ikkinchiValyuta} 
                className="w-6 h-6 mr-2" 
              />
              <select
                value={ikkinchiValyuta}
                onChange={(e) => setIkkinchiValyuta(e.target.value)}
                className="py-2 pb-2 px-20 border rounded bg-white border-none text-black"
              >
                <option value="USD">USD - U.S. Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="UZS">UZS - Uzbek Som</option>
              </select>
            </div>
          </div>
        </div>

        {natijaAylantirda && (
          <div className="p-4">
            <p className="text-xl font-semibold text-blue-600">
              <span className='text-black'><b>Converted Amount:</b></span> {natijaAylantirda === 'Xato' ? 'Hatolik mavjud' : `${natijaAylantirda} ${ikkinchiValyuta}`}
            </p>
          </div>
        )}
        <button
          onClick={handleConvert}
          className="btn btn-outline btn-info flex ml-auto w-56"
        >
          <b>Convert</b>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
