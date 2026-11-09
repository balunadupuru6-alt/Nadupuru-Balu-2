import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingInput,
  isSlotOverbooked,
  addBooking,
  removeBooking,
  Booking,
} from './booking';

test('validateBookingInput rejects empty fields', () => {
  const result = validateBookingInput({
    name: '',
    phone: '9988776655',
    date: '2026-11-09',
    time: '07:30 PM',
    guests: '2',
  });
  assert.equal(result.isValid, false);
  assert.match(result.error || '', /Customer name is required/i);
});

test('validateBookingInput accepts valid data', () => {
  const result = validateBookingInput({
    name: 'Balu Nadupuru',
    phone: '+91 98765 43210',
    date: '2026-11-09',
    time: '07:30 PM',
    guests: '2',
  });
  assert.equal(result.isValid, true);
});

test('isSlotOverbooked detects capacity limit correctly', () => {
  const existing: Booking[] = [
    { id: 'TB-101', name: 'User 1', phone: '111', date: '2026-11-09', time: '07:30 PM', guests: '2' },
    { id: 'TB-102', name: 'User 2', phone: '222', date: '2026-11-09', time: '07:30 PM', guests: '4' },
    { id: 'TB-103', name: 'User 3', phone: '333', date: '2026-11-09', time: '07:30 PM', guests: '2' },
  ];

  // At capacity for 07:30 PM
  assert.equal(isSlotOverbooked(existing, '2026-11-09', '07:30 PM', 3), true);

  // Different slot is not overbooked
  assert.equal(isSlotOverbooked(existing, '2026-11-09', '01:30 PM', 3), false);

  // Different date is not overbooked
  assert.equal(isSlotOverbooked(existing, '2026-11-10', '07:30 PM', 3), false);
});

test('addBooking stops overbooking and adds valid booking', () => {
  const existing: Booking[] = [
    { id: 'TB-101', name: 'User 1', phone: '111', date: '2026-11-09', time: '07:30 PM', guests: '2' },
    { id: 'TB-102', name: 'User 2', phone: '222', date: '2026-11-09', time: '07:30 PM', guests: '4' },
    { id: 'TB-103', name: 'User 3', phone: '333', date: '2026-11-09', time: '07:30 PM', guests: '2' },
  ];

  const overbookedResult = addBooking(existing, {
    name: 'New Guest',
    phone: '444',
    date: '2026-11-09',
    time: '07:30 PM',
    guests: '2',
  });
  assert.equal(overbookedResult.success, false);
  assert.match(overbookedResult.error || '', /Overbooking stopped/i);

  const validResult = addBooking(existing, {
    name: 'New Guest',
    phone: '444',
    date: '2026-11-09',
    time: '09:00 PM',
    guests: '2',
  });
  assert.equal(validResult.success, true);
  assert.ok(validResult.booking);
  assert.equal(validResult.booking?.name, 'New Guest');
  assert.match(validResult.booking?.id || '', /^TB-\d{3}$/);
});

test('removeBooking correctly removes booking by id', () => {
  const existing: Booking[] = [
    { id: 'TB-101', name: 'Aarav', phone: '111', date: '2026-11-09', time: '07:30 PM', guests: '4' },
    { id: 'TB-102', name: 'Priya', phone: '222', date: '2026-11-09', time: '07:30 PM', guests: '2' },
  ];

  const { updatedBookings, cancelledBooking } = removeBooking(existing, 'TB-101');
  assert.equal(updatedBookings.length, 1);
  assert.equal(updatedBookings[0].id, 'TB-102');
  assert.equal(cancelledBooking?.name, 'Aarav');
});
