import React, { useState, useRef } from "react";

const EmailVerify = () => {
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const newOtp = otp.split("");
    newOtp[index] = e.target.value;
    setOtp(newOtp.join(""));

    if (e.target.value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    console.log(otp);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Enter OTP Code</h2>
        <p>Enter the verification code to verify your email address !</p>
        <div className="flex items-center mt-8 mb-8">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index] || ""}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-24 h-24 border border-gray-300 rounded-lg text-center text-2xl mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </div>
        <button
          className="mt-4 w-96 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
