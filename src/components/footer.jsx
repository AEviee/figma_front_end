function Footer() {
  return (
    <footer className="bg-[#031B34] text-white px-10 py-20">
      {/* Top Call to Action */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text mb-8">
          Do you want to step into the <br /> future before others
        </h2>
        <button className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
          Request Early Access
        </button>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / About */}
        <div>
          <h3 className="font-bold text-2xl mb-4">GPT-3</h3>
          <p className="text-[#81AFDD] text-sm">
            Crechterwoord K12 182 DK <br />
            Alknjkcb, All Rights Reserved
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-[#81AFDD] text-sm">
            <li className="cursor-pointer hover:text-white">Overons</li>
            <li className="cursor-pointer hover:text-white">Social Media</li>
            <li className="cursor-pointer hover:text-white">Counters</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-[#81AFDD] text-sm">
            <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Links 3 */}
        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2 text-[#81AFDD] text-sm">
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-16 text-[#81AFDD] text-sm">
        © 2025 GPT-3. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
