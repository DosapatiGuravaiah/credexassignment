import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import ChatWidget from './ChatWidget';

function App() {
  const scrollToForm = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white py-20 text-center relative">
        <motion.h1
          className="text-4xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to SoftSell
        </motion.h1>
        <motion.p
          className="text-xl mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Your go-to solution for software resale.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full transform transition-all hover:scale-105 hover:bg-yellow-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
        >
          Get a Quote
        </motion.button>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-24 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmZr1EM8j5aZVNnxhUSY2OvAnnVELnQSW5g&s', text: 'Upload License' },
            { src: 'data:image/jpeg;base64,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', text: 'Get Valuation' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMqVLseJGNomn7swrLg6AqAiYLq41FGWYJg&s', text: 'Get Paid' },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="step bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg w-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <img src={step.src} alt={step.text} className="icon mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{step.text}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-24 text-center bg-gray-50 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { src: 'https://images.pexels.com/photos/3153208/pexels-photo-3153208.jpeg', title: 'Fast Process', desc: 'Quick and easy process' },
            { src: 'data:image/jpeg;base64,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szXB7XAdJu6/EKYJYLyi7WG0mHMpnRGzeekm/GboQYm7rG3w++3WtcLf2J4NTYhCIKxurQeYqGWE0BPkniN12nQrTu1uy1RhsrY58r45A51PUR/AmaLX03tcLi7T17zvXRjtGtKzDw0RFqgREQEXZjoJHQuma0ljHAE23jW5HYNL9/YV1lM1mNb9UbRfRQKEqEiiKoIiIgqIiAsk2GxFlNLUzy3yso3aDe9xkjDWjtJIWNqgnXt39qpkpGSs1n1VvXijUshdtFVVdVDzry2MzsLYIyWxtF9L+Ue0+xZWTbU6AaknQALX2D/hMH6Zn0r19qcVJcaeM2a376R+M7ye4fT3L0vBXp4fDbUevRhfH70Vhy4ptPYllMA62hlcLj9Uce8rHqqsklN5XueeF9w7gNAuHeoubLnvkn3pbVpFeggKKLFd9exSyiqAsn5PG3rHg/I5v90axi69XZjExTVcUr7830mS2FyI3gtJtxtofMotG4kfoirwmmYznJWi2gvlzHX/AOr69zaWOxIy5m3BEZNx1aD2LlwTEYaiFschje7K2wcQ5srbDK9p3G+9enVODbNErYejoModprrY/wB6LhmfT1XcFFTxEEx62NicpGtr8e8LvCNeeJjb8KbcZgXcy3Um1tOz61yxy9JpNQHAvd0ObAzDUBt9+ht6FExZPJ28iFi+0Vdp0x9+FOc+Rl7MecxNtcvkg9W5YBtXjj8Mm+Bz0RqY454r2LozGXZmHg8WFuB3do2piOIRQNLpHAGxysB6bz1AL898pWNCoqMjSCWvfJNlN2tlOjY7/ki/p7FtijisrZs6LEafwcVrJmGkLc3PE2DetrhvDgdMu+61Nt3tW7Epo8rSynp2uZTtd8N2a2aR3acrdOAHesazuy5czspdmLMxyF9rZrbr20uvldFaRWdq7ERFogREQepDjkzYXRBxvdoZJfpMZrdoPot1a9i8v+yUQq1r2trc9ERER0UqIiqkREKAiBEBERQCIikc9DNzcrJD+I4O77Lhc4kkk3JJLj1k6kqIp3OtGhW6iKBbdSlkVugii+rpog+UV07VdEHqYTtFV0oywyXj196kHORg9YG9vmIXp+Pld1U/zT/trGNFNFWaxPobZMdu67qp/mn/AGlPHit6oPm3/bWNaJonBXsMk8d63/I+bf8AbU8da3/I+bf9pY4icFew9yr2trZGlmdkQO90LSx5HVmJJHmsvCVRTERHQERFIIiICIiAiIgIiICFEQRVEQERFAIiICIikEREBERAREQERRBVFVEFREQRFUQEREBERAREQEREAooiCoiiCoiICIiAiIoBERAREQERFIIiKAREUgiIgIiIIqiICIiAiIgIiICIiAhREAIiICIiAiIgBREQf//Z', title: 'Secure', desc: 'Secure and trusted' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6D1DnHs2O9isr01E6PcRQzxAog80uMfC7g&s', title: 'Customer Support', desc: '24/7 support' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="feature bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg w-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <img src={item.src} alt={item.title} className="icon mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-24 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              text: 'SoftSell made it easy to sell our software licenses!',
              author: 'John Doe, CEO, Software Co.',
            },
            {
              text: 'Great experience! Quick process and smooth transactions.',
              author: 'Jane Smith, CTO, Tech Solutions',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="testimonial bg-white dark:bg-gray-700 p-6 w-80 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.8 }}
            >
              <p className="italic">"{t.text}"</p>
              <p className="mt-4 font-semibold text-right">- {t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-form py-24 text-center bg-gray-50 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <input type="text" name="name" placeholder="Your Name" className="input mb-4 p-4 rounded-lg shadow-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="input mb-4 p-4 rounded-lg shadow-lg" required />
          <input type="text" name="company" placeholder="Your Company" className="input mb-4 p-4 rounded-lg shadow-lg" />
          <select name="license-type" className="input mb-4 p-4 rounded-lg shadow-lg" required>
            <option value="">License Type</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
          </select>
          <textarea name="message" placeholder="Your Message" className="input mb-4 p-4 rounded-lg shadow-lg" required></textarea>
          <button type="submit" className="btn bg-yellow-500 text-black rounded-full px-8 py-3 transform transition-all hover:scale-105 hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
