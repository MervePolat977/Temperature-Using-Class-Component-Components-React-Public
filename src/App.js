import React, { useState } from 'react'; /*useState fonksiyonunu ve React modülünü içe aktarır */
import Celsius from './Celsius'; /*componentler */
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import './App.css'; // CSS dosyasını projeye dahil edin




function App() {
  /*sıcaklık durumunu depolamak için bir temperature değişkeni ve bu değişkeni güncellemek için 
  setTemperature fonksiyonunu tanımlar. Başlangıçta sıcaklık 0 olarak ayarlanır.*/
  const [temperature, setTemperature] = useState(0);

  /*sıcaklık durumunu bir artırır.*/
  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  /*sıcaklık durumunu bir azaltır.*/
  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  /* Bu satır, ana div bileşenini oluşturur ve className özelliği ile App sınıfını tanımlar.*/
  /*<Celsius temperature={temperature} />: Bu satır, Celsius bileşenini oluşturur ve temperature değişkeninin güncel 
    değerini props olarak geçirir.*/
  /*<button onClick={increaseTemperature}>increase the temperature</button>: Bu satır, "increase the temperature" 
  yazısı olan bir buton oluşturur ve tıklama olayını increaseTemperature fonksiyonuna bağlar.*/
  return (
    <div className="App"> {/* Ana div */} 
      <h1>Temperature Measurement in 3 Units</h1>
      <Celsius temperature={temperature} />
      <Fahrenheit temperature={temperature} />
      <Kelvin temperature={temperature} /><br></br>
      <button onClick={increaseTemperature}>increase the temperature</button>
      <button onClick={decreaseTemperature}>increase the temperature</button>
    </div>
  );
}


export default App;

