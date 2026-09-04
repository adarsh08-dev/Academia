export async function getCurrentLocation() {
  return {
    latitude: 28.6139,
    longitude: 77.2090,
    city: 'New Delhi',
    country: 'India'
  };
}

export async function detectAccurateLocation() {
  return getCurrentLocation();
}

export function syncLocationAcrossApp(location: any) {
  localStorage.setItem('user_location', JSON.stringify(location));
}

export function normalizeLocationString(loc: string) {
  if (!loc) return '';
  return loc.trim().toLowerCase();
}
