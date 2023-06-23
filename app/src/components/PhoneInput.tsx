interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const phone = value.replace(/\D/g, "");
    const phoneMask = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    e.target.value = phoneMask;
    onChange?.(e);
  };

  return (
    <div className="mt-5">
      <label
        htmlFor="phone"
        className="text-center uppercase block text-sm font-medium text-gray-700"
      >
        Phone To Call
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="(__) _____-____"
        maxLength={15}
        onChange={handleChange}
        className="mt-1 text-xl  border-b-2 focus:outline-none  focus:border-blue-500 block w-full shadow-sm  border-gray-300 rounded-none"
        {...props}
      />
    </div>
  );
};

export default PhoneInput;
