import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Video, Check, Loader2, Globe } from 'lucide-react';
import { scheduleMeeting } from '../services/api';

const TalkWithUs = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingStep, setBookingStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Get user's timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    return () => clearInterval(timer);
  }, []);

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, disabled: true });
    }
    
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isPast = currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      days.push({ 
        day: i, 
        disabled: isPast || isWeekend,
        date: currentDate,
        isToday: currentDate.toDateString() === today.toDateString()
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  // All time slots
  const allTimeSlots = [
    { time: '9:00 AM', hour: 9, minute: 0 },
    { time: '9:30 AM', hour: 9, minute: 30 },
    { time: '10:00 AM', hour: 10, minute: 0 },
    { time: '10:30 AM', hour: 10, minute: 30 },
    { time: '11:00 AM', hour: 11, minute: 0 },
    { time: '11:30 AM', hour: 11, minute: 30 },
    { time: '12:00 PM', hour: 12, minute: 0 },
    { time: '12:30 PM', hour: 12, minute: 30 },
    { time: '2:00 PM', hour: 14, minute: 0 },
    { time: '2:30 PM', hour: 14, minute: 30 },
    { time: '3:00 PM', hour: 15, minute: 0 },
    { time: '3:30 PM', hour: 15, minute: 30 },
    { time: '4:00 PM', hour: 16, minute: 0 },
    { time: '4:30 PM', hour: 16, minute: 30 },
    { time: '5:00 PM', hour: 17, minute: 0 },
    { time: '5:30 PM', hour: 17, minute: 30 }
  ];

  // Filter available time slots based on selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];

    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();

    if (!isToday) {
      return allTimeSlots;
    }

    // If today, filter out past times (with 30 min buffer)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    return allTimeSlots.filter(slot => {
      if (slot.hour > currentHour) return true;
      if (slot.hour === currentHour && slot.minute > currentMinute + 30) return true;
      return false;
    });
  };

  const availableTimeSlots = getAvailableTimeSlots();

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prevMonthDate);
    }
  };

  const handleDateSelect = (dayObj) => {
    if (!dayObj.disabled && dayObj.day) {
      setSelectedDate(dayObj.date);
      setSelectedTime(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const bookingData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        timezone: timezone
      };

      await scheduleMeeting(bookingData);
      setBookingStep(3);
    } catch (err) {
      setError(err.error || 'Failed to schedule meeting. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  const formatCurrentTime = () => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center space-x-2">
            <img src="/logo.png" alt="bharatmcp" className="h-7 w-auto" />
            <span className="font-serif font-bold text-lg text-gray-900">bharatmcp</span>
          </Link>
          
          {/* Current Time Display */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4" />
            <span>{formatCurrentTime()}</span>
            <span className="hidden sm:inline">({timezone})</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {bookingStep === 3 ? (
            /* Confirmation Screen */
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Meeting Scheduled!
              </h1>
              <p className="text-gray-600 mb-2">
                Your meeting has been booked for
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                {formatDate(selectedDate)}
              </p>
              <p className="text-lg font-semibold text-orange-500 mb-2">
                {selectedTime}
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Timezone: {timezone}
              </p>
              <p className="text-gray-600 mb-8">
                A confirmation email has been sent to <span className="font-medium">{formData.email}</span>
              </p>
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              {/* Title */}
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
                  Schedule a Meeting
                </h1>
                <p className="text-gray-600">
                  Book a 30-minute call with our team to discuss how bharatmcp can help you.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
                  {error}
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left - Meeting Info */}
                <div className="lg:w-1/3 bg-gray-50 rounded-2xl p-6 h-fit">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/logo.png" alt="bharatmcp" className="h-10 w-auto" />
                    <div>
                      <h3 className="font-semibold text-gray-900">bharatmcp Team</h3>
                      <p className="text-sm text-gray-500">Product Demo</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Video className="w-5 h-5" />
                      <span>Google Meet</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="w-5 h-5" />
                      <span className="text-sm">{timezone}</span>
                    </div>
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">Selected Time</p>
                      <p className="font-semibold text-gray-900">{formatDate(selectedDate)}</p>
                      <p className="text-orange-500 font-medium">{selectedTime}</p>
                    </div>
                  )}
                </div>

                {/* Right - Calendar or Form */}
                <div className="lg:w-2/3">
                  {bookingStep === 1 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h2>
                        <div className="flex gap-2">
                          <button 
                            onClick={prevMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={nextMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 mb-6">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                            {day}
                          </div>
                        ))}
                        {days.map((dayObj, index) => (
                          <button
                            key={index}
                            onClick={() => handleDateSelect(dayObj)}
                            disabled={dayObj.disabled}
                            className={`
                              aspect-square flex items-center justify-center rounded-lg text-sm transition-all relative
                              ${!dayObj.day ? 'invisible' : ''}
                              ${dayObj.disabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-orange-50 cursor-pointer'}
                              ${selectedDate && dayObj.date?.toDateString() === selectedDate.toDateString() 
                                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                                : ''}
                              ${dayObj.isToday && (!selectedDate || dayObj.date?.toDateString() !== selectedDate.toDateString())
                                ? 'ring-2 ring-orange-300 ring-offset-1' 
                                : ''}
                            `}
                          >
                            {dayObj.day}
                            {dayObj.isToday && (
                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Time Slots */}
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-sm font-medium text-gray-700 mb-3">
                            Available times for {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </h3>
                          
                          {availableTimeSlots.length > 0 ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                              {availableTimeSlots.map((slot) => (
                                <button
                                  key={slot.time}
                                  onClick={() => setSelectedTime(slot.time)}
                                  className={`
                                    py-2 px-3 rounded-lg text-sm font-medium transition-all border
                                    ${selectedTime === slot.time 
                                      ? 'bg-orange-500 text-white border-orange-500' 
                                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'}
                                  `}
                                >
                                  {slot.time}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 text-gray-500">
                              <p>No available time slots for today.</p>
                              <p className="text-sm mt-1">Please select another date.</p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Continue Button */}
                      {selectedDate && selectedTime && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <button
                            onClick={() => setBookingStep(2)}
                            className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all"
                          >
                            Continue
                          </button>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    /* Step 2: Enter Details */
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6"
                    >
                      <button
                        onClick={() => setBookingStep(1)}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back
                      </button>

                      <h2 className="text-lg font-semibold text-gray-900 mb-6">Enter Your Details</h2>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="you@company.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Your company"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            What would you like to discuss?
                          </label>
                          <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all mt-6 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            'Schedule Meeting'
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TalkWithUs;