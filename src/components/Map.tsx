import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

// Location: Austraße / Rothenburger Straße, Nuremberg area (assuming Nuremberg based on Austraße)
// Approx coordinates for Austraße/Rothenburger Str Ecke
const NUREMBERG_COORDS = { lat: 49.4475, lng: 11.0545 };

export default function MapComponent() {
  if (!hasValidKey) {
    return (
      <div className="w-full h-full bg-bakery-brown/5 flex items-center justify-center p-8 text-center">
        <div className="max-w-md">
          <h3 className="font-serif text-2xl font-bold mb-4">Google Maps API Key Required</h3>
          <p className="text-bakery-brown/70 mb-6">Please add GOOGLE_MAPS_PLATFORM_KEY to secrets to see our location.</p>
          <a
            href="https://console.cloud.google.com/google/maps-apis/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-bakery-brown text-white rounded-full font-medium"
          >
            Get API Key
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={NUREMBERG_COORDS}
          defaultZoom={15}
          mapId="DORA_BAKERY_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          className="w-full h-full"
          disableDefaultUI={true}
        >
          <AdvancedMarker position={NUREMBERG_COORDS}>
            <Pin background="#c5a059" glyphColor="#fff" borderColor="#4a3728" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
