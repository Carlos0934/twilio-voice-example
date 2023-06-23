import { useState } from "react";
import PhoneInput from "./components/PhoneInput";
import useCall from "./hooks/useCall";
import { parsePhone } from "./utils/parsePhone";

function App() {
  const [phone, setPhone] = useState<string>("");
  const isValidPhone = phone.match(/\d/g)?.length === 10;

  const { call, state } = useCall();
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-5xl text-blue-500">Make a call with twilio</h1>
      <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button
        disabled={!isValidPhone}
        onClick={() => {
          const parsedPhone = parsePhone(phone);

          call(parsedPhone);
        }}
        className="block w-full max-w-xs px-4 py-1 mt-5 text-lg font-bold text-white bg-blue-500 rounded disabled:bg-gray-400 hover:bg-blue-700"
      >
        Call me
      </button>

      <p className="mt-5">
        Twilio status: <span className="text-blue-500">{state}</span>
      </p>
    </main>
  );
}

export default App;
