import { useRouter } from 'next/router';
import React, { useState } from 'react';

import calculation from '@/lib/calculation';

function Form() {
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhonenNumber] = useState('+1');
  const [message, setMessage] = useState('');
  const [buttonApprove, setButtonApprove] = useState(false);

  const router = useRouter();
  const handelSubmit = async (e: any) => {
    e.preventDefault();

    const userFirstname = username;
    const userMessage = message;

    const sendWelcomeEmail = async () => {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userFirstname,
          phoneNumber,
          userMessage,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', data);
        return router.push('/thank-you');
      } else {
        console.error('Error sending email:', data);
      }
    };

    await sendWelcomeEmail();
  };

  const calculationViaApproveSubmitButton = (e: any) => {
    const finalNumber =
      calculation.firstNumber + calculation.secondNumber;
    const approveSignal = calculation.getCalculation(
      Number(e.target.value),
      finalNumber
    );
    setButtonApprove(approveSignal);
  };

  return (
    <form action="" onSubmit={handelSubmit}>
      <input
        required
        className="input"
        type="text"
        value={username}
        onChange={e => setUserName(e.target.value)}
        placeholder="Enter Your Name "
      />
      <input
        required
        className="input"
        type="text"
        value={phoneNumber}
        onChange={e => setPhonenNumber(e.target.value)}
        placeholder="Enter Your Phone Number"
      />
      <textarea
        required
        className="textarea"
        name=""
        placeholder="Share your plan ✨"
        id=""
        rows={5}
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
        <div>
          <span
            className="text-black fw-bold "
            dangerouslySetInnerHTML={{
              __html: calculation.firstNumber,
            }}
          ></span>
        </div>
        <div className=" p-3">
          <span className="text-black fw-bold ">+</span>
        </div>
        <div>
          <span
            className="text-black fw-bold "
            dangerouslySetInnerHTML={{
              __html: calculation.secondNumber,
            }}
          ></span>
        </div>
        <div className=" p-3">
          <span className="text-black fw-bold ">=</span>
        </div>
        <div className="mt-1">
          <input
            onChange={calculationViaApproveSubmitButton}
            accept="number"
            type="text"
            className="text-black fw-bold rounded-4 border border-black py-3 px-2  "
            style={{
              background: 'none',
              maxWidth: '100px',
              width: '40%',
            }}
          />
        </div>
      </div>
      <button
        disabled={!buttonApprove}
        type={'submit'}
        className="btn btn--primary  w-75 d-block mt-3 m-auto  py-2  "
        style={{
          border: !buttonApprove ? '2px solid #000' : '',
          color: !buttonApprove ? '#000' : '',
        }}
      >
        {' '}
        Submit
      </button>
    </form>
  );
}

export default Form;
