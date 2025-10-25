import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Plus, Minus } from 'lucide-react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
interface Property {
  property_name: string;
}

const BookingForm = ({ propertyData }: { propertyData: Property }) => {
  const [checkIn, setCheckIn] = useState('2025-05-16');
  const [checkOut, setCheckOut] = useState('2025-05-18');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showGuestDetails, setShowGuestDetails] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isServiceAnimal, setIsServiceAnimal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate number of nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Calculate total price (mock calculation)
  const calculatePrice = () => {
    const nights = calculateNights();
    const basePrice = 3321; // Base price per night in rupees
    return basePrice * nights;
  };

  const totalGuests = adults + children + infants;
  const nights = calculateNights();
  const totalPrice = calculatePrice();

  const validateEmail = (email: string) => {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!contactNumber.trim()) {
      alert('Please enter your contact number.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    const templateParams = {
      to_email: 'atlashomeskphb@gmail.com',
      to_name: 'Property Owner',
      from_name: name,
      contact_number: contactNumber,
      from_email: email,
      check_in: checkIn,
      check_out: checkOut,
      nights,
      adults,
      children,
      infants,
      pets,
      service_animal: isServiceAnimal ? 'Yes' : 'No',
      total_guests: totalGuests,
      // total_price: `₹${totalPrice.toLocaleString()}`,
      property_name: propertyData?.property_name || 'Property',
      message: `New booking request for ${nights} nights from ${checkIn} to ${checkOut}. 
Guests: ${adults} adults, ${children} children, ${infants} infants, ${pets} pets.
Total Price: ₹${totalPrice.toLocaleString()}`
    };
    try {
      // Replace the following with your actual EmailJS credentials
      const serviceId = '';
      const templateId = '';
      const publicKey = '';
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('Booking request sent successfully!');
      // Optionally clear the form or keep data as is
      setName('');
      setContactNumber('');
      setEmail('');
      setCheckIn('2025-05-16');
      setCheckOut('2025-05-18');
      setAdults(1);
      setChildren(0);
      setInfants(0);
      setPets(0);
      setIsServiceAnimal(false);
      setShowGuestDetails(false);
      setIsLoading(false);
      // Resetting the form fields after successful submission
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send booking request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 space-y-4">
        {/* Input Fields for Name, Contact Number, and Email */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        {/* Price Display */}
        {/* <div className="text-2xl font-semibold text-gray-900">
                    ₹{totalPrice.toLocaleString()} <span className="text-base font-normal text-gray-600">for {nights} nights</span>
                </div> */}

        {/* Check-in/Check-out */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="flex">
            <div className="flex-1 p-3 border-r border-gray-300">
              <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">CHECK-IN</div>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-sm font-medium text-gray-900 bg-transparent border-none outline-none"
              />
            </div>
            <div className="flex-1 p-3">
              <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">CHECKOUT</div>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm font-medium text-gray-900 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Guests Selector */}
        <div className="border border-gray-300 rounded-lg">
          <button
            type="button"
            onClick={() => setShowGuestDetails(!showGuestDetails)}
            className="w-full p-3 flex justify-between items-center text-left"
          >
            <div className='flex items-center justify-between w-full'>
              <div>
                <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">GUESTS</div>
                <div className="text-sm font-medium text-gray-900">{totalGuests} guest{totalGuests !== 1 ? 's' : ''}</div>
              </div>
              <div className='transition duration-150 ease-in-out transform active:scale-95  text-white px-4 py-2 rounded '>
                {showGuestDetails ? (
                  <FaAngleUp size={20} className="text-gray-600" />
                ) : (
                  <FaAngleDown size={20} className="text-gray-600" />
                )}
              </div>
            </div>
          </button>

          {showGuestDetails && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              {/* Adults */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">Adults</div>
                  <div className="text-sm text-gray-500">Age 13+</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50"
                    disabled={adults <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">Children</div>
                  <div className="text-sm text-gray-500">Ages 2-12</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50"
                    disabled={children <= 0}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">Infants</div>
                  <div className="text-sm text-gray-500">Under 2</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50"
                    disabled={infants <= 0}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{infants}</span>
                  <button
                    type="button"
                    onClick={() => setInfants(infants + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Pets */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">Pets</div>
                  <button
                    type="button"
                    onClick={() => setIsServiceAnimal(!isServiceAnimal)}
                    className="text-sm text-gray-600 underline hover:text-gray-800"
                  >
                    Bringing a service animal?
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setPets(Math.max(0, pets - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50"
                    disabled={pets <= 0}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{pets}</span>
                  <button
                    type="button"
                    onClick={() => setPets(pets + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-600 pt-2 border-t border-gray-200">
                This place has a maximum of 2 guests, not including infants. If you're bringing more than 2 pets, please let your Host know.
              </div>
            </div>
          )}
        </div>

        {/* Reserve Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Reserve'}
        </button>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-600">
          You won't be charged yet
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
