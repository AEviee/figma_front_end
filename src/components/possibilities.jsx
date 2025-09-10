function Possibilities() {
  return (
    <section className="bg-[#031B34] text-white px-10 py-20">

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/Feature Image.png" 
            alt="Possibility"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h4 className="text-[#71E5FF] text-sm font-medium mb-3">
            Request Early Access to Get Started
          </h4>
          <h3 className="text-3xl font-bold leading-snug mb-6 text-gradient">
            The possibilities are <br /> beyond your imagination
          </h3>
          <p className="text-[#81AFDD] leading-relaxed mb-6">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts 
            all exercise blessing. Indulgence way everything joy alteration boisterous 
            the attachment. Party we years to order allow asked of. 
          </p>
          <p className="text-[#FF8A71] font-medium cursor-pointer hover:underline">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </section>
  );
}

export default Possibilities;
