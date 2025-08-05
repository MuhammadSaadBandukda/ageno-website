

const Contact = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <p className="text-gray-600 mb-10">
      Have questions or want to get in touch with us? Fill out the form below and we'll get back to you soon!
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <textarea
        placeholder="Your Message"
        className="w-full border rows-5 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

  )
}

export default Contact