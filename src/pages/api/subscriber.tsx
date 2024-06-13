import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { renderToStaticMarkup } from 'react-dom/server';

import Subscriber from '@/components/components/Subscriber';

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true, // For example, using Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userEmail } = req.body;

    const emailHtml = renderToStaticMarkup(
      <Subscriber userEmail={userEmail} />
    );

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'kiamhasan267@gmail.com',
      subject: 'Great news you have new subscriber ✨',
      html: emailHtml,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ message: 'Email sent successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error sending email', error });
    }
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'Working...' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
