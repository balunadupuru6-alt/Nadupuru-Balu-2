import React, { useState } from 'react';
import { X, ExternalLink, Calendar, Clock, Users, Phone, User, CheckCircle2, AlertTriangle, Trash2 } from 'lucide-react';
import { Booking, addBooking, removeBooking, MAX_TABLES_PER_SLOT } from '../utils/booking';

interface RestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'TB-101',
    name: 'Aarav Sharma',
    phone: '+91 98765 43210',
    date: '2026-11-09',
    time: '07:30 PM',
    guests: '4',
  },
  {
    id: 'TB-102',
    name: 'Priya Patel',
    phone: '+91 98123 45678',
    date: '2026-11-09',
    time: '07:30 PM',
    guests: '2',
  },
];

export const RestaurantModal: React.FC<RestaurantModalProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-09');
  const [time, setTime] = useState('07:30 PM');
  const [guests, setGuests] = useState('2');
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addBooking(bookings, { name, phone, date, time, guests }, MAX_TABLES_PER_SLOT);

    if (!result.success) {
      setAlert({ message: result.error || 'Booking failed.', type: 'error' });
      return;
    }

    if (result.booking) {
      setBookings([result.booking, ...bookings]);
      setAlert({
        message: `✓ Reservation confirmed for ${result.booking.name}! Ref #${result.booking.id} (${guests} guests on ${date} at ${time}).`,
        type: 'success',
      });
      setName('');
      setPhone('');
    }
  };

  const handleFillSample = () => {
    setName('Vikram Malhotra');
    setPhone('+91 99887 76655');
    setTime('06:00 PM');
    setGuests('2');
    setAlert(null);
  };

  const handleCancelBooking = (bookingId: string) => {
    const { updatedBookings, cancelledBooking } = removeBooking(bookings, bookingId);
    setBookings(updatedBookings);
    setAlert({
      message: `Reservation #${bookingId} for ${cancelledBooking ? cancelledBooking.name : 'guest'} has been cancelled. Slot capacity restored.`,
      type: 'success',
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="restaurant-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0b0e1c] border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#0284c7] dark:text-[#22d3ee] uppercase block">
              Interactive Live Demo
            </span>
            <h3 id="restaurant-modal-title" className="text-xl sm:text-2xl font-bold text-[var(--text)] font-heading">
              Restaurant Table Booking App
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo"
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-slate-200 dark:hover:bg-white/15 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0284c7] dark:text-[#22d3ee] bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 border border-[#0284c7]/25 dark:border-[#22d3ee]/25">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] dark:bg-[#22d3ee] animate-pulse" />
              <span>Live Interactive Simulation</span>
            </span>

            <a
              href="https://github.com/balunadupuru6-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
            >
              <span>GitHub @balunadupuru6-alt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Choose a date, time slot, and number of guests. The app validates inputs in real time,
            prevents overbooking (maximum 3 tables per time slot), and lets you manage and cancel upcoming bookings.
          </p>

          {/* Alert Message */}
          {alert && (
            <div
              className={`p-4 rounded-xl text-sm flex items-start gap-3 border ${
                alert.type === 'success'
                  ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                  : 'bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/30 text-rose-700 dark:text-rose-300'
              }`}
            >
              {alert.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              )}
              <div className="flex-1 font-medium">{alert.message}</div>
              <button
                onClick={() => setAlert(null)}
                className="text-slate-500 dark:text-white/60 hover:text-slate-800 dark:hover:text-white text-xs underline cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50/80 dark:bg-white/[0.02] p-5 rounded-2xl border border-slate-200/80 dark:border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Customer Name */}
              <div className="space-y-1.5">
                <label htmlFor="book-name" className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Customer Name</span>
                </label>
                <input
                  id="book-name"
                  type="text"
                  placeholder="e.g. Balu Nadupuru"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] placeholder-slate-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1.5">
                <label htmlFor="book-phone" className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Number</span>
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] placeholder-slate-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label htmlFor="book-date" className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservation Date</span>
                </label>
                <input
                  id="book-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-1.5">
                <label htmlFor="book-time" className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time Slot</span>
                </label>
                <select
                  id="book-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#0b0e1c] border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                >
                  <option value="12:00 PM">12:00 PM (Lunch)</option>
                  <option value="01:30 PM">01:30 PM (Lunch)</option>
                  <option value="06:00 PM">06:00 PM (Dinner)</option>
                  <option value="07:30 PM">07:30 PM (Dinner - Popular)</option>
                  <option value="09:00 PM">09:00 PM (Dinner)</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="book-guests" className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Number of Guests</span>
                </label>
                <select
                  id="book-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#0b0e1c] border border-slate-300 dark:border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Guests (Couples table)</option>
                  <option value="4">4 Guests (Family table)</option>
                  <option value="6">6 Guests (Large table)</option>
                  <option value="8">8 Guests (Party)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] hover:from-[#1d4ed8] hover:to-[#6d28d9] transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Confirm Reservation ↗
              </button>
              <button
                type="button"
                onClick={handleFillSample}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300/80 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 transition-colors cursor-pointer"
              >
                Fill Sample
              </button>
            </div>
          </form>

          {/* Bookings List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[var(--text)] font-heading uppercase tracking-wider">
                Upcoming Bookings
              </h4>
              <span className="text-xs text-[#0284c7] dark:text-[#22d3ee] font-medium bg-[#0284c7]/10 dark:bg-[#22d3ee]/10 px-2.5 py-0.5 rounded-full border border-[#0284c7]/20 dark:border-[#22d3ee]/20">
                {bookings.length} active
              </span>
            </div>

            {bookings.length === 0 ? (
              <div className="p-6 text-center text-sm text-[var(--text-muted)] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl">
                No active reservations right now. Reserve a table above!
              </div>
            ) : (
              <div className="space-y-2.5">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-[var(--text)]">
                        {booking.name} ·{' '}
                        <span className="text-[#0284c7] dark:text-[#22d3ee] font-normal">{booking.guests} Guests</span>
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">
                        Ref: <strong className="text-[var(--text)]">#{booking.id}</strong> | Date: {booking.date} | Slot:{' '}
                        {booking.time}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCancelBooking(booking.id)}
                      aria-label={`Cancel reservation for ${booking.name}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-rose-600 dark:text-rose-300 hover:text-rose-700 dark:hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Cancel</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
