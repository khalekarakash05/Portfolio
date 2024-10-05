"use client";
import React, { useState } from "react";
import Title from "./Title";
import { BsSend } from "react-icons/bs";
import toast from "react-hot-toast";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      const data = await res.json();
      setResponse(data.message);
      setFullName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent Successfully")
    } catch (error) {
      setResponse("Something went wrong, please try again.");
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white p-8 w-full mx-auto rounded-lg shadow-lg">
        <Title  text="Contact" className='relative p-4 flex flex-col 
        items-center justify-center '  width="32"></Title>


      <h1 className="text-3xl mb-4 text-center">Get in Touch</h1>
      <p className="text-base mb-8 text-gray-400 text-center ">
      Feel free to reach out with any questions or ideas!{" "}
        <a
          href="https://twitter.com/khalekarakash05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Drop me a message on Twitter
        </a>{" "}
        and I'll <br></br> get back to you as soon as I can.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-6">
        <div className="flex lg:flex-row flex-col gap-10">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="bg-gray-800 text-white p-4 mb-4 border border-gray-600 rounded w-80"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 text-white p-4 mb-4 border border-gray-600 rounded  w-80"
        />
        </div>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className=" bg-gray-800 text-white p-4 mb-4 border border-gray-600 rounded w-80 lg:w-7/12 h-36 resize-none"
        />
        <button
          type="submit"
          className="flex justify-center items-center gap-3 bg-white text-black p-4 w-full max-w-xs rounded transition duration-300 ease-in-out hover:bg-gray-300"
        >
          {loading ? "Sending..." : `Send Message`}
          <BsSend className={`${loading && "hidden"} text-black `} /> 
        </button>
      </form>
      {/* {response && <p className="mt-4 text-white">{response}</p>} */}
    </div>
  );
};

export default Contact;
