import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Thank you! We'll contact you soon.");

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">

        <label htmlFor="name" className="font-medium">
                   Your Name
        </label>
          <input required id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>


        <label htmlFor="email" className="font-medium">
                   Your Email
        </label>
          <input required id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <label htmlFor="textarea" className="font-medium">
                   Your Message
        </label>

          <textarea  required id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Your Message" className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;