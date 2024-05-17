function App() {
  
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Geolocalización Online</h1>
      <h2 className="text-xl">Por el plugin de <a href="https://www.geoplugin.com/" className='no-underline text-red-500'>www.geoplugin.com</a></h2>

      <div className="w-full sm:w-8/12 lg:6/12 border border-red-500 rounded-md text-2xl gap-3 flex flex-col justify-center items-center">
          
          <p>IP:</p>
          <p>Ciudad: {geoplugin_city()}</p>
          <p>Estado: {geoplugin_region()}</p>
          <p>Código de Región: {geoplugin_regionCode()}</p>
          <p>Estado: {geoplugin_regionName()}</p>
          <p>Código de País: {geoplugin_countryCode()}</p>
          <p>País: {geoplugin_countryName()}</p>
          <p>Latitud: {geoplugin_latitude()}</p>
          <p>Longitud: {geoplugin_longitude()}</p>
          <p>Zona Horaria: {geoplugin_timezone()}</p>
          <p>Código de Moneda:  {geoplugin_currencyCode()}</p>
          <p>Símbolo de Moneda: {geoplugin_currencySymbol()}</p>
          
          <p>
            Costo de Producto: $800 USD 
            ( { geoplugin_currencyCode() != 'USD' && geoplugin_currencyConverter(800) } )
          </p>

        

      </div>

    </div>
  )
}

export default App
