import React from 'react';

/*function Celsius({ temperature }): temperature prop'unu alan bir fonksiyonel component olduğunu belirtir.*/
function Celsius({ temperature }) {
  /*Celcius cinsinden verilen sıcaklık değerini Fahrenheit'a dönüştürür ve sonucunu döndürür.*/
  const toFahrenheit = () => {
    return (temperature * 9) / 5 + 32;
  };

  /*Celcius cinsinden verilen sıcaklık değerini Kelvin'e dönüştürür ve sonucunu döndürür.*/
  const toKelvin = () => {
    return temperature + 273.15;
  };

  return (
    <div className="temperature-container">
      <h2>Temperature</h2>
      <p>{temperature} &#8451;</p>
      <p>
        {toFahrenheit().toFixed(2)} &#8457; / {toKelvin().toFixed(2)} K
      </p>
    </div>
  );
}
/*toFixed(2): sonucu iki ondalık basamağa kadar yuvarlar.*/

export default Celsius; /*componentin dışa aktarılmasını sağlar, böylece başka dosyalarda da kullanılabilir.*/
