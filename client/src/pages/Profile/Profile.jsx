import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="h-full bg-gray-200 p-4">
            <div className="bg-white rounded-lg shadow-xl pb-8">

                <div className="w-full h-[250px]">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"/>
                </div>
                <div className="flex flex-col items-center -mt-20">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-white rounded-full"/>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl text-black">Amanda Ross</p>
                        <span className="bg-blue-500 rounded-full p-1" title="Verified">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                    </div>
                    <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
                    <p className="text-sm text-gray-500">New York, USA</p>
                </div>
                <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    <div className="flex items-center space-x-4 mt-2">
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            <span>Connect</span>
                        </button>
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Message</span>
                        </button>
                    </div>
                </div>
            </div >
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex flex-col w-full 2xl:w-2/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">About</h4>
                            <p className="mt-2 text-gray-700 text-justify">Greetings,

I'm Amanda Ross, and I'm all about the artistry of code. As a Senior Software Engineer at Tailwind CSS, my mission is to sculpt digital experiences that blend functionality with elegance.

My journey is one of continuous exploration, where each line of code is a brushstroke on the canvas of the internet. From the intricacies of front-end design to the logic of back-end systems, I revel in the dance between creativity and technology.

When I'm not immersed in the digital realm, you might find me chasing sunsets, savoring a good book, or experimenting in the kitchen. Life's a tapestry, and I'm always weaving in new threads of curiosity.

Let's connect and weave our stories together. Whether you're a fellow coder, a design enthusiast, or just someone who loves a good conversation, I'm here to collaborate and explore. Feel free to contact me at amanda.ross@email.com. Let's embark on a digital journey together!</p>
                        
                        </div>
                            
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Discover More</h4>
                        <div className="flex justify-between mt-4">
                            <a href="#" className="border border-gray-400 rounded-full p-2">
                                <i class="ri-github-fill"></i>
                            </a>
                            <a href="#" className="border border-gray-400 rounded-full p-2">
                                <i class="ri-linkedin-fill"></i>
                            </a>
                            <a href="#" className="border border-gray-400 rounded-full p-2">
                                <i class="ri-twitter-fill"></i>
                            </a>
                            <a href="#" className="border border-gray-400 rounded-full p-2">
                                <i class="ri-mail-fill"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl my-4 p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
                        <div className="relative px-4">
                            <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm text-black">Profile informations changed.</p>
                                    <p className="text-xs text-gray-500">3 min ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            
                        </div>
                    </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl text-gray-900 font-bold">Connections (532)</h4>
                    <a href="#" title="View All">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
                        <p className="text-xs text-gray-500 text-center">UI/UX Design at Upwork</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Frances Mather</p>
                        <p className="text-xs text-gray-500 text-center">Software Engineer at Facebook</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Carlos Friedrich</p>
                        <p className="text-xs text-gray-500 text-center">Front-End Developer at Tailwind CSS</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Donna Serrano</p>
                        <p className="text-xs text-gray-500 text-center">System Engineer at Tesla</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Randall Tabron</p>
                        <p className="text-xs text-gray-500 text-center">Software Developer at Upwork</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">John McCleary</p>
                        <p className="text-xs text-gray-500 text-center">Software Engineer at Laravel</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Amanda Noble</p>
                        <p className="text-xs text-gray-500 text-center">Graphic Designer at Tailwind CSS</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Christine Drew</p>
                        <p className="text-xs text-gray-500 text-center">Senior Android Developer at Google</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Lucas Bell</p>
                        <p className="text-xs text-gray-500 text-center">Creative Writer at Upwork</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Debra Herring</p>
                        <p className="text-xs text-gray-500 text-center">Co-Founder at Alpine.js</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
                        <p className="text-xs text-gray-500 text-center">Software Engineer Lead at Microsoft</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Maria Heal</p>
                        <p className="text-xs text-gray-500 text-center">Linux System Administrator at Twitter</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Edward Ice</p>
                        <p className="text-xs text-gray-500 text-center">Customer Support at Instagram</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Jeffery Silver</p>
                        <p className="text-xs text-gray-500 text-center">Software Engineer at Twitter</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
                        <p className="text-xs text-gray-500 text-center">Project Manager at Google</p>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg" className="w-16 rounded-full"/>
                        <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                        <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Profile;
