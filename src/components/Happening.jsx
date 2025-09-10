function Happening() {
  return (
    <section className="bg-[#031B34] text-white px-10 py-20">
      {/* Section Header */}
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text mb-12 text gradient">
        A lot is happening, <br /> We are blogging about it.
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-[#042C54] p-5 rounded-lg hover:scale-105 transition">
          <img
            src="Rectangle 20.png"
            alt="Blog post"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-xs text-[#81AFDD] mb-2">Sep 26, 2025</p>
          <h3 className="font-bold text-lg mb-3">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h3>
          <p className="text-[#FF8A71] text-sm cursor-pointer hover:underline">
            Read Full Article
          </p>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-[#042C54] p-5 rounded-lg hover:scale-105 transition">
          <img
            src="Rectangle 21.png"
            alt="Blog post"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-xs text-[#81AFDD] mb-2">Sep 26, 2025</p>
          <h3 className="font-bold text-lg mb-3">
            How GPT-3 is revolutionizing the world of AI
          </h3>
          <p className="text-[#FF8A71] text-sm cursor-pointer hover:underline">
            Read Full Article
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-[#042C54] p-5 rounded-lg hover:scale-105 transition">
          <img
            src="Rectangle 23.png"
            alt="Blog post"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-xs text-[#81AFDD] mb-2">Sep 26, 2025</p>
          <h3 className="font-bold text-lg mb-3">
            AI is transforming industries faster than ever
          </h3>
          <p className="text-[#FF8A71] text-sm cursor-pointer hover:underline">
            Read Full Article
          </p>
        </div>
      </div>
    </section>
  );
}

export default Happening;

