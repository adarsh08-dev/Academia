export async function fetchStudentProfile() {
  try {
    const res = await fetch('/api/student');
    if (res.ok) return await res.json();
  } catch (e) {}
  return null;
}

export async function fetchGigs() {
  try {
    const res = await fetch('/api/gigs');
    if (res.ok) return await res.json();
  } catch (e) {}
  return [];
}

export async function fetchMentors() {
  try {
    const res = await fetch('/api/mentors');
    if (res.ok) return await res.json();
  } catch (e) {}
  return [];
}

export async function fetchPassport() {
  try {
    const res = await fetch('/api/passport');
    if (res.ok) return await res.json();
  } catch (e) {}
  return [];
}

export async function fetchJobs() {
  try {
    const res = await fetch('/api/jobs');
    if (res.ok) return await res.json();
  } catch (e) {}
  return [];
}

export async function createGig(data: any) {
  try {
    const res = await fetch('/api/gigs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {}
  return null;
}

export async function applyForGig(gigId: string, data: any) {
  try {
    const res = await fetch(`/api/gigs/${gigId}/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {}
  return { success: true };
}

export async function mintPassportRecord(data: any) {
  try {
    const res = await fetch('/api/passport/mint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {}
  return null;
}
