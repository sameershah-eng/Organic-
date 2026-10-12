/**
 * Vercel Serverless Function: /api/contact
 * Handles contact form submissions with validation and response handling.
 * 
 * To connect to an email provider like Resend:
 * 1. npm i resend
 * 2. Set RESEND_API_KEY in your Vercel Environment Variables
 * 3. Uncomment the Resend block below
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, discipline, budget, message, timeline } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide a valid full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters long.' });
    }

    // Log the inquiry to console (Vercel runtime logs)
    console.log('[Meridian Collective] New Inquiry Received:', {
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      discipline: discipline || 'General Studio Inquiry',
      budget: budget || 'Not specified',
      timeline: timeline || 'Flexible',
      message: message.trim(),
    });

    /*
    // PLUG-IN EMAIL SERVICE (e.g., Resend):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'inquiries@meridiancollective.studio',
    //   to: 'atelier@meridiancollective.studio',
    //   subject: `New Atelier Inquiry from ${name} [${discipline || 'Studio'}]`,
    //   text: `Name: ${name}\nEmail: ${email}\nCategory: ${discipline}\nBudget: ${budget}\n\nMessage:\n${message}`,
    // });
    */

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully. Our principal partners will review your project brief within 24 hours.',
      inquiryId: `MC-${Date.now().toString(36).toUpperCase()}`,
      data: {
        name: name.trim(),
        discipline: discipline || 'All Disciplines',
      }
    });
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while processing your request. Please email us directly at atelier@meridiancollective.studio'
    });
  }
}
