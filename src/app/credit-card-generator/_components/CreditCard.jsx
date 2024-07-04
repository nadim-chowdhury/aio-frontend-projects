const CreditCard = ({ name, number, expiry, cvc }) => {
  return (
    <div className="w-80 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-xl text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Credit Card</div>
        <div className="text-sm">{cvc}</div>
      </div>
      <div className="my-6 text-2xl tracking-wider">{number}</div>
      <div className="flex justify-between">
        <div>
          <div className="text-xs uppercase">Card Holder</div>
          <div className="text-lg">{name}</div>
        </div>
        <div>
          <div className="text-xs uppercase">Expires</div>
          <div className="text-lg">{expiry}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
