
const ip = document.getElementById('ip');
const city = document.getElementById('city');
const state = document.getElementById('state');
const cpState = document.getElementById('cpState');
const cp = document.getElementById('cp-country');
const country = document.getElementById('country');
const lat = document.getElementById('lat');
const lon = document.getElementById('lon');
const timezone = document.getElementById('timezone');
const currencyCode = document.getElementById('currencyCode');
const currencySimbol = document.getElementById('currencySimbol');


ip.innerHTML = "IP: " + geoplugin_request();
city.innerHTML = "Ciudad: " + geoplugin_city();
state.innerHTML = "Estado: " + geoplugin_region();
cpState.innerHTML = "Código de Región: " + geoplugin_regionCode();
cp.innerHTML = "Estado: " + geoplugin_regionName();
country.innerHTML = "Código de País: " + geoplugin_countryCode();
lat.innerHTML = "País: " + geoplugin_countryName();
lon.innerHTML = "Latitud: " + geoplugin_latitude();
timezone.innerHTML = "Longitud: " + geoplugin_longitude();
currencyCode.innerHTML = "Zona Horaria: " + geoplugin_timezone();
currencySimbol.innerHTML = "Código de Moneda: " + geoplugin_currencyCode(geoplugin_currencySymbol);




















