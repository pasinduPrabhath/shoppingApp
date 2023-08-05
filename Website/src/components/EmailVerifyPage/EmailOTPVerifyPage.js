import React, { useState } from "react";

const EmailVerify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e, index) => {
    const newOtp = otp.split("");
    newOtp[index] = e.target.value;
    setOtp(newOtp.join(""));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Enter OTP Code</h2>
        <div className="flex items-center">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index] || ""}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Verify
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
