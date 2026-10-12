import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Order Status & Tracking',
    categoryTarget: 'All Categories',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Mobile phone number is required for SMS updates';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide details of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTicketId(`CS-${Math.floor(10000 + Math.random() * 90000)}`);
    }, 1000);
  };

  const faqs = [
    {
      q: 'How long does nationwide delivery take?',
      a: 'Deliveries to major metropolitan hubs (Lahore, Karachi, Islamabad, Rawalpindi) typically arrive in 2 business days. Outlying districts and other cities take 3 to 4 business days.',
    },
    {
      q: 'Can I pay via Cash on Delivery (COD)?',
      a: 'Yes, absolutely! Cash on Delivery is available across all serviceable tehsils and cities in Pakistan. You only pay when you receive and inspect your package.',
    },
    {
      q: 'Are the products authentic and original?',
      a: '100% yes. Meridian Pantry is the official consolidated online destination of Quill Organics, Italiano Gourmet, and The Earth\'s Pure Naturals. Products are fulfilled straight from their central certified ateliers.',
    },
    {
      q: 'How do I unlock Free Shipping?',
      a: 'Simply ensure your cart subtotal equals or exceeds Rs. 3,000 across any combination of items from Quill Organics, Italiano Gourmet, and The Earth\'s Naturals.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFB] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
            Customer Care & Order Concierge
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-neutral-900 tracking-tight">
            We Are Here to Assist Your Kitchen
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            Have questions about dosage for Quill Shilajit, baking ratios for Italiano chocolate, or courier tracking? Send us a message or reach us directly on WhatsApp.
          </p>
        </div>

        {/* Quick Contact Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200/80 hover:border-emerald-500 transition-colors flex flex-col justify-between space-y-4 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-widest block font-bold">Fastest Response</span>
              <h4 className="text-sm font-bold text-emerald-950 mt-0.5">WhatsApp Concierge</h4>
              <p className="text-xs text-emerald-800/80 mt-1">{siteConfig.supportPhone}</p>
            </div>
            <span className="text-xs font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
              Chat on WhatsApp &rarr;
            </span>
          </a>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">Direct Phone</span>
              <h4 className="text-sm font-bold text-neutral-900 mt-0.5">Telephone Inquiries</h4>
              <p className="text-xs text-stone-600 mt-1">{siteConfig.supportPhone} (9 AM - 9 PM)</p>
            </div>
            <span className="text-[11px] text-stone-400">Available Monday through Saturday</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">Email Desk</span>
              <h4 className="text-sm font-bold text-neutral-900 mt-0.5">Formal Inquiries</h4>
              <p className="text-xs text-stone-600 mt-1">{siteConfig.supportEmail}</p>
            </div>
            <span className="text-[11px] text-stone-400">Replies within 12 business hours</span>
          </div>
        </div>

        {/* Contact Form & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 p-8 shadow-sm">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                    Ticket Ref: {ticketId}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 mt-3 font-display">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you, {formData.name}. Our pantry support team will review your message and reply via SMS/call to <strong>{formData.phone}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      inquiryType: 'Order Status & Tracking',
                      categoryTarget: 'All Categories',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-900 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  Send an Inquiry or Order Tracking Request
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayesha Tariq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                        errors.name ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                        errors.phone ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    >
                      <option value="Order Status & Tracking">Order Status & Tracking</option>
                      <option value="Product Usage / Ingredients">Product Usage / Ingredients</option>
                      <option value="Wholesale / Bulk Orders">Wholesale / Bulk Orders</option>
                      <option value="Return / Damaged Item">Return / Damaged Item</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Category Concerned
                    </label>
                    <select
                      value={formData.categoryTarget}
                      onChange={(e) => setFormData({ ...formData, categoryTarget: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    >
                      <option value="All Categories">Entire Pantry (Combined)</option>
                      <option value="Quill Organic Superfoods">Quill Organic Superfoods</option>
                      <option value="Italiano Gourmet & Baking">Italiano Gourmet & Baking</option>
                      <option value="The Earth's Pure Naturals">The Earth's Pure Naturals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Your Message / Order Reference # *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your order number if applicable, or questions about specific product formulation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                      errors.message ? 'border-rose-400' : 'border-stone-200'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-neutral-900 hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQs Accordion (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 font-display">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-xs font-bold text-neutral-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-2">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
