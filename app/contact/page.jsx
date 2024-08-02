"use client";

import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      console.log("EmailJS response:", response);
      setStatus("Message sent successfully!");
      reset(); // Reset form fields
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-1">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              {...register("name", { required: true })}
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white font-medium mb-1"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", { required: true })}
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-white font-medium mb-1"
            >
              Service:
            </label>
            <select
              id="service"
              name="service"
              {...register("service", { required: true })}
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white font-medium mb-1"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              {...register("message", { required: true })}
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-300"
          >
            Send
          </button>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
