import { IoSendSharp } from "react-icons/io5"

function ContactContent() {
  return (
    <div className='font-serif mx-[70] md:mx-[100px] mt-4 mb-36'>
      <h2 className='text-[40px] mt-5 text-center'>CONTACT</h2>
      <h2 className='text-[25px] p-2 mt-5 font-bold'>Hi there!</h2>
      <p className='text-[18px] text-gray-600 mt-5 align-justify'>
        <div className="p-2">
            I love hearing from my readers. Nothing makes me happier than reading a heartfelt message from wonderful people!
        </div>
        <div className="p-2">
            <b>Due to the sheer volume of messages I receive these days, sadly I’m not always able to read and respond to every one. </b> With help from my team though, we try to reply to as many as we can. So please don’t hesitate to write in and I will do my very best to get back to you!!
        </div>
        <div className="p-2">
            I just ask two little things ….
        </div>     
      </p>

      <h2 className='text-[25px] p-2 mt-5 font-bold'>Got a question or feedback about a recipe?</h2>
      <p className='text-[18px] text-gray-600 mt-5 align-justify'>
        <div className="p-2">
        Please leave a comment on the recipe page so other readers can read it too! If you have a question about a recipe, I bet others are wondering the same thing!! It’s only fair to share… 😉
        </div>    
      </p>

      <h2 className='text-[25px] p-2 mt-5 font-bold'>Got a business-related enquiry?</h2>
      <h2 className='text-[25px] p-2 mt-5 font-bold flex items-center gap-4'><IoSendSharp/> Product endorsements</h2>
      <p className='text-[18px] text-gray-600 mt-5 align-justify'>
        <div className="p-2">
        As a general rule, I do not do paid product endorsements. However, I am a keen supporter of Australian produce, particularly given the hardships our beautiful country suffers from time to time with severe droughts and catastrophic bushfires. Contact me on <span className="cursor-pointer font-bold">business@recipetineats.com</span> to discuss what you have in mind!
        </div>    
      </p>

      <h2 className='text-[25px] p-2 mt-5 font-bold flex items-center gap-4'><IoSendSharp/> Product endorsements</h2>
      <p className='text-[18px] text-gray-600 mt-5 align-justify'>
        <div className="p-2">
        I am also an advocate of various Australian not-for-profit causes. I have my own food bank, RecipeTin Meals, where we make homemade meals from scratch for donation to support the vulnerable in our community.
        </div>   
        <div className="p-2">
        If you would like to talk to me about your cause, please contact me on hello@recipetinmeals.org.au to discuss what you have in mind!
        </div>    
      </p>

      <h2 className='text-[25px] p-2 mt-5 font-bold flex items-center gap-4'><IoSendSharp/>Media enquiries</h2>
      <p className='text-[18px] text-gray-600 mt-5 align-justify'>
        <div className="p-2">
        For media inquiries, whether digital, radio, TV or print, I can be contacted on business@recipetineats.com.
        </div>    
      </p>
      
    </div>
  )
}

export default ContactContent