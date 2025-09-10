import OrangeButton from "./OrangeButton.jsx"

function Hero(){
    return (
    <section className="flex justify-between items-center">
        <div>
            <h1 className="text-[62px] font-extrabold text-gradient">Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p className="text-[#81AFDD]">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            <div className="text-white">
             <input className="bg-[#052D56] w-[456px] py-4 px-4"  type="email" placeholder="enter your email" />
             <OrangeButton>Get Started</OrangeButton>
            </div>

            <div className="flex mt-4 items-center">
                <img width={181.79} src="/Group 81.png" alt="testimonial" />
                <span className="text-[#FFFFFF]">1,600 people requested access a visit in last 24 hours</span>
            </div>
        </div>
       
        <div>
            <img width={500} src="Header Illustration.png" alt="hero-image" />

        </div>
    </section>
    )
}

export default Hero