function GetStarted() {
  return (
    <section className="px-10 py-20">
      <div className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div>
          <p className="text-black font-medium mb-2">
            Request Early Access to Get Started
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug">
            Register today & start exploring <br />
            the endless possibilities.
          </h2>
        </div>

        {/* Right Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
