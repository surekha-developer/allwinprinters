

"use client";

import { useState } from "react";
import { sendEmail } from "../action";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const services = [
    "Solvent Printing Machines",
    "Eco Solvent Printing Machines",
    "UV Printing Machines",
    "DTF Printing Machines",
    "Laser Cutting & Engraving Machines",
    "CNC Router Machines",
    "Fiber Laser Machines",
    "Letter Bending Machines",
    "Sheet Cutters",
    "Lamination Machines",
    "Vinyl Cutting Plotters",
    "Printing Inks",
    "Printer Spare Parts",
    "Printer Heads",
    "Other Services",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as any;
    const checked = (e.target as HTMLInputElement).checked;

    if (name === "mobile") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length > 10) return;
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validate()) {
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      data.append(key, val as string);
    });

    const res = await sendEmail(data);

    if (res.success) {
      setStatus({
        type: "success",
        message: "✅ Message sent successfully! We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: res.message || "❌ Failed to send message. Please contact us at +91-8712413159.",
      });
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Let's Do Great Work Together
        </h1>
        <p className="text-lg text-gray-600">
          Get in touch with our experts today
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-1/3 bg-slate-50 p-8 lg:p-10 border-r border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-600 w-6 h-6" />
                <span className="font-semibold text-lg text-gray-900">Hyderabad</span>
              </div>
              {/* <span className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded-full bg-white">
                Corporate Office
              </span> */}
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-3">Location :</h4>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    #11-126, Opp IDPL Colony,<br/> Sumitra Nagar, Hyderabad-37
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-3">Email :</h4>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <a href="mailto:Jke.jayaram@gmail.com" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Jke.jayaram@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-3">Sales Enquiry :</h4>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <a href="tel:8712413159" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    +91-8712413159
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-between items-center pt-6 border-t border-gray-200">
             <Link href="#" className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                Get Direction &rarr;
             </Link>
             <Link href="#" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
                View All &rarr;
             </Link>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info*</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className={`w-full border rounded-lg p-3 text-sm outline-none transition-colors ${
                    errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } focus:ring-1`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id *"
                  className={`w-full border rounded-lg p-3 text-sm outline-none transition-colors ${
                    errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } focus:ring-1`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Mobile input */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="Mobile No*"
                  className={`w-full border rounded-lg p-3 text-sm outline-none transition-colors ${
                    errors.mobile ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } focus:ring-1`}
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>

              {/* Services Dropdown */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-3 text-sm outline-none transition-colors bg-white ${
                    formData.service ? "text-gray-900" : "text-gray-500"
                  } ${
                    errors.service ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } focus:ring-1`}
                >
                  <option value="" disabled>
                    Choose Services
                  </option>
                  {services.map((svc) => (
                    <option key={svc} value={svc} className="text-gray-900">
                      {svc}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message"
                rows={5}
                className={`w-full border rounded-lg p-3 text-sm outline-none transition-colors resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                } focus:ring-1`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Checkbox */}
            {/* <div className="flex items-start gap-3">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
              </div>
              <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                By registering here, I agree to JK Enterprises' {" "}
                <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link> and {" "}
                <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </label>
            </div> */}
            {/* {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>} */}

            {/* Status Messages */}
            {status.message && (
              <div className={`p-4 rounded-lg text-sm ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm flex items-center justify-center min-w-[160px]"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit Now ➔"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}