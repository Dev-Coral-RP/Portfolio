"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// 🔹 Define types properly
interface FormData {
  name: string;
  email: string;
  message: string;
}

// 🔹 Typing animations for placeholders
const typingSequences = {
  name: ["Enter your name", "What's your name?", "Full Name"],
  email: ["Enter your email", "Your best email", "Example: user@example.com"],
  message: ["Write your message", "How can I help?", "Type something meaningful"],
};

const typingSpeed = 100;

const useTypingEffect = (texts: string[]) => {
  const [placeholder, setPlaceholder] = useState(texts[0]);
  const showCursor = useRef(true);

  useEffect(() => {
    let i = 0, j = 0, currentText = "";
    
    const interval = setInterval(() => {
      if (j < texts[i].length) {
        currentText += texts[i][j];
        setPlaceholder(currentText + (showCursor.current ? " |" : ""));
        j++;
      } else {
        setTimeout(() => {
          i = (i + 1) % texts.length;
          j = 0;
          currentText = "";
        }, 2000);
      }
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      showCursor.current = !showCursor.current;
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [texts]); // ✅ Removed `showCursor` from dependencies

  return placeholder;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const namePlaceholder = useTypingEffect(typingSequences.name);
  const emailPlaceholder = useTypingEffect(typingSequences.email);
  const messagePlaceholder = useTypingEffect(typingSequences.message);

  const onSubmit = async (data: FormData) => {
    setSubmitted(true);
    console.log("Form Data:", data);

    setTimeout(() => {
      setSubmitted(false);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white p-10 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700 
                   shadow-green-400/40 transition-all duration-500 hover:shadow-green-300/60"
      >
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder={namePlaceholder}
            className="w-full p-3 bg-gray-800 rounded-lg mt-1 text-white border border-gray-600 
                       focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-300"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
            })}
            placeholder={emailPlaceholder}
            className="w-full p-3 bg-gray-800 rounded-lg mt-1 text-white border border-gray-600 
                       focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-300"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Message</label>
          <textarea
            {...register("message", { required: "Message cannot be empty" })}
            rows={4}
            placeholder={messagePlaceholder}
            className="w-full p-3 bg-gray-800 rounded-lg mt-1 text-white border border-gray-600 
                       focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-300"
          ></textarea>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={submitted}
          className={`w-full py-3 rounded-lg font-semibold transition-all 
                      ${submitted ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-green-500 text-black hover:bg-green-600"}`}
        >
          {submitted ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-center mt-4 font-semibold"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactForm;
