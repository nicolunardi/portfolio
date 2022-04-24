import React from "react";

const ContactForm = () => {
  return (
    <form
      className="w-full"
      action="https://getform.io/f/8c3eff86-f42e-415d-a9db-0818e81c5ce4"
      method="POST"
    >
      <div className="grid grid-cols-2 gap-10">
        <div className="border-b border-orange-300 py-2">
          <input
            type="text"
            name="name"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white"
            placeholder="Name"
            required
          />
        </div>
        <div className="border-b border-orange-300 py-2">
          <input
            type="email"
            name="email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white"
            placeholder="Email"
            required
          />
        </div>
        <div className="border-b border-orange-300 py-2 col-span-2">
          <input
            type="text"
            name="subject"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white"
            placeholder="Subject"
            required
          />
        </div>
        <div className="border-b border-orange-300 pt-2 col-span-2">
          <textarea
            name="message"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-20 focus:bg-white"
            placeholder="Message"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-32 h-10 m-auto block mt-10 border rounded-full shadow-md bg-orange-300 border-orange-300 hover:bg-orange-100 hover:scale-105"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
