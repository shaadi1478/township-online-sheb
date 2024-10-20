import { CiLocationOn } from 'react-icons/ci';
import { IoIosCall } from 'react-icons/io';

const Contact = () => {
    return (
        <div>
            <h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gray-100 ">

                    {/* Contact Information */}
                    <div className="space-y-6 px-24">
                        <div className='md:flex items-center gap-4'>
                            <div className='text-4xl bg-orange-400 text-white rounded-md'>
                                <CiLocationOn />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Corporate Office:</h3>
                                <p>Rupayan Trade Centre<br />Bangla Motor, Khulna</p>
                            </div>
                        </div>

                        <div className='md:flex items-center gap-4'>
                            <div className='text-4xl bg-orange-400 text-white rounded-md'>
                                <CiLocationOn />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Head Office:</h3>
                                <p>Razzak Plaza <br />Shibbari, Khulna</p>
                            </div>
                        </div>

                        <div className='md:flex items-center gap-4'>
                            <div className='text-4xl bg-orange-400 text-white rounded-md'>
                                <CiLocationOn />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Boikali Branch:</h3>
                                <p>House - 88 <br />Boikali, Jashor Road, Khulna</p>
                            </div>
                        </div>

                        <div className='md:flex items-center gap-4'>
                            <div className='text-4xl bg-orange-400 text-white rounded-md'>
                                <IoIosCall />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Boikali Branch:</h3>
                                <p>House - 88 <br />Boikali, Jashor Road, Khulna</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-6 mr-24">
                        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Your name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Your email address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Message</label>
                                <textarea className="w-full border border-gray-300 rounded-lg p-2" placeholder="Write your message..." rows="4"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </h1>

        </div>
    );
};

export default Contact;