function About() {
  return (
    <section className="bg-[#042C54] text-white px-10 py-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 border-t-3 border-[#FF8A71] w-5 pt-2">
            What is GPT-3
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-[#81AFDD] leading-relaxed">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought.
            His defective nor convinced residence own. Connection has put impossible own apartments
            boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance
            to on by.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <h3 className="text-3xl md:text-4xl font-bold text-[#AE67FA] text-gradient">
          The possibilities are beyond <br /> your imagination
        </h3>
        <p
          href="#"
          className="text-[#FF8A71] font-medium mt-6 md:mt-0"
        >Explore The Library</p>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-t-3 border-[#FF8A71] w-5 pt-2">Chatbots</h4>
          <p className="text-[#81AFDD]">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-t-3 border-[#FF8A71] w-5 pt-2">Knowledgebase</h4>
          <p className="text-[#81AFDD]">
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As
            put impossible own apartments b
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-t-3 border-[#FF8A71] w-5 pt-2">Education</h4>
          <p className="text-[#81AFDD]">
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As
            put impossible own apartments b
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

