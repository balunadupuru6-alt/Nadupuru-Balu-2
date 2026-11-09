export interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

export const MAX_TABLES_PER_SLOT = 3;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateBookingInput(data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}): ValidationResult {
  if (!data.name || !data.name.trim()) {
    return { isValid: false, error: 'Customer name is required.' };
  }
  if (!data.phone || !data.phone.trim()) {
    return { isValid: false, error: 'Contact phone number is required.' };
  }
  if (!data.date || !data.date.trim()) {
    return { isValid: false, error: 'Reservation date is required.' };
  }
  if (!data.time || !data.time.trim()) {
    return { isValid: false, error: 'Time slot is required.' };
  }
  if (!data.guests || !data.guests.trim()) {
    return { isValid: false, error: 'Guest count is required.' };
  }
  return { isValid: true };
}

export function isSlotOverbooked(
  bookings: Booking[],
  date: string,
  time: string,
  maxTables: number = MAX_TABLES_PER_SLOT
): boolean {
  const existingCount = bookings.filter((b) => b.date === date && b.time === time).length;
  return existingCount >= maxTables;
}

export function addBooking(
  currentBookings: Booking[],
  newBookingData: Omit<Booking, 'id'>,
  maxTables: number = MAX_TABLES_PER_SLOT
): { success: boolean; booking?: Booking; error?: string } {
  const validation = validateBookingInput(newBookingData);
  if (!validation.isValid) {
    return { success: false, error: validation.error };
  }

  if (isSlotOverbooked(currentBookings, newBookingData.date, newBookingData.time, maxTables)) {
    return {
      success: false,
      error: `Overbooking stopped: The ${newBookingData.time} slot on ${newBookingData.date} has reached full capacity (${maxTables} tables reserved). Please select another time slot.`,
    };
  }

  const newBooking: Booking = {
    id: `TB-${Math.floor(100 + Math.random() * 900)}`,
    ...newBookingData,
    name: newBookingData.name.trim(),
    phone: newBookingData.phone.trim(),
  };

  return {
    success: true,
    booking: newBooking,
  };
}

export function removeBooking(
  bookings: Booking[],
  bookingId: string
): { updatedBookings: Booking[]; cancelledBooking?: Booking } {
  const cancelledBooking = bookings.find((b) => b.id === bookingId);
  const updatedBookings = bookings.filter((b) => b.id !== bookingId);
  return { updatedBookings, cancelledBooking };
}
