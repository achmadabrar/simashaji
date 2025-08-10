const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getSpaces(type?: string) {
  const query = type ? `?type=${type.toUpperCase()}` : "";
  const res = await fetch(`${API_URL}/spaces${query}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch spaces");
  return res.json();
}

export async function createBooking(payload: {
  spaceId: number;
  userEmail: string;
  checkIn: string;
  checkOut: string;
}) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create booking");
  return res.json();
}
