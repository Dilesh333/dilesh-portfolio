// ContactSection.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1vz5x8s", 
        "template_flisipa", 
        form.current,
        "clZd_BMU3L-gjfXlz" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0F172A] text-white py-30 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Talk</h2>
        <p className="text-gray-300 mb-8">
          I'm open to opportunities, collaborations, or just a friendly chat.
          Drop me a message below!
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-xl mx-auto">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#1E293B] p-3 rounded-md outline-none text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-[#1E293B] p-3 rounded-md outline-none text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-[#1E293B] p-3 rounded-md outline-none text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FE3D0C] hover:bg-orange-600 transition py-3 rounded-md font-semibold"
          >
            Send Message 🚀 
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
