import React, { useState } from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DateSelect from './DateSelect';

const Map = () => {
  const [dateParams, setDateParams] = useState({
    year: 2024,
    month: 11,
    tenDayPeriod: 21,
  });

  const handleDateChange = (date) => {
    setDateParams(date);
  };

  return (
    <div className="flex flex-row rounded-lg overflow-hidden shadow-lg mx-auto justify-center ">
      <div className="mx-10 z-20">
        <DateSelect onDateChange={handleDateChange} />
      </div>
      <MapContainer
        center={[-1.286389, 36.817223]} // Centered on Nairobi, Kenya
        zoom={7} // Adjusted zoom for better visualization
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <WMSTileLayer
          url="https://droughtwatch.icpac.net/mapserver/"
          layers="dekadal_cdi_chirps"
          format="image/png"
          transparent={true}
          version="1.1.1"
          styles=""
          srs="EPSG:4326"
          bbox="33.5,-5.0,42.0,5.5" // BBOX covering Kenya
          params={{
            SELECTED_YEAR: dateParams.year,
            SELECTED_DMONTH: dateParams.month,
            SELECTED_TENDAYS: dateParams.tenDayPeriod,
          }}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
