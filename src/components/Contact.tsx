import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ArrowRight } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: Partial<FormState> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Please provide your full name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide an email address.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address format is invalid.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Please supply a subject line.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please input your message details.';
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Please write at least 15 characters.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission timeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success dialog banner after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Visual background designs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-purple-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono"
          >
            06. CONVERSATION GATE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            Let's Start A{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Content Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Left: Metadata Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-white font-sans">
              Contact Coordinates
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Have an exciting remote opportunity, internship, or full-stack project? Reach out anytime! I respond promptly within 24 hours.
            </p>

            <div className="h-[1px] bg-white/10" />

            <div className="space-y-4">
              {/* Location Card */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">Location</div>
                  <div className="text-xs font-semibold text-white font-sans">{DEVELOPER_PROFILE.location}</div>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/25 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">Mail Me</div>
                  <div className="text-xs font-semibold text-white font-sans group-hover:text-blue-300 transition-colors">{DEVELOPER_PROFILE.email}</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/25 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">WhatsApp Call</div>
                  <div className="text-xs font-semibold text-white font-sans group-hover:text-purple-300 transition-colors">{DEVELOPER_PROFILE.whatsapp}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Right: Stateful Validation Form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Visual feedback success overlay */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-xs flex items-center space-x-2.5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Thank you!</span> Your communication has been dispatched. {DEVELOPER_PROFILE.name} will follow up with you shortly.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name / Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5 animate-relative">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 bg-black/40 rounded-xl text-xs text-white border transition-all placeholder-slate-500 focus:outline-none ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                      placeholder="e.g. Peterson  Chinedu"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 bg-black/40 rounded-xl text-xs text-white border transition-all placeholder-slate-500 focus:outline-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                      placeholder="liam.anderson@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Subject Line
                    <span className="text-slate-500 font-normal"> (Option)</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 bg-black/40 rounded-xl text-xs text-white border transition-all placeholder-slate-500 focus:outline-none ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder="Subject of interest..."
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-3 bg-black/40 rounded-xl text-xs text-white border transition-all placeholder-slate-500 focus:outline-none resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder="Explain your project goals or specific internship role details here..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Button Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:scale-101 active:scale-99 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer text-white font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 animate-spin" />
                      <span>Transmitting secure session ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message Session</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
