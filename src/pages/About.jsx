import React from "react";

const About = () => {
    return (
        <>
            <div className="w-full  flex  items-center justify-center mt-10 mb-10">
                <div className="flex flex-col gap-5 xl:gap-20 md:flex-row max-w-[1440px] p-3">
                    <div className="flex flex-col gap-2 flex-1 lg:gap-5">
                        <h3 className="font-bold text-2xl sm:text-3xl uppercase">
                            Get to know me
                        </h3>
                        <hr />
                        <p className="text-textColor xl:text-xl ">
                            I'm a Mern Stack Web Developer building the Front-end & Back-end
                            of Websites and Web Applications that leads to the success of the
                            overall product. Check out some of my work in the Projects
                            section. I also like sharing content related to the stuff that I
                            have learned over the years in Web Development so it can help
                            other people of the Dev Community. Feel free to Connect or Follow
                            me on my Linkedin where I post useful content related to Web
                            Development and Programming I'm open to Job opportunities where I
                            can contribute, learn and grow. If you have a good opportunity
                            that matches my skills and experience then don't hesitate to
                            contact me.
                        </p>

                        <button className="bg-ctaColor text-white py-1 lg:text-xl max-w-[150px] lg:max-w-[250px]">
                            Contact
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col gap-2 lg:gap-5">
                        <h3 className="font-bold text-2xl sm:text-3xl uppercase">Skills</h3>
                        <hr />
                        <div className="flex w-full">
                            <div className="flex flex-col gap-3 flex-1 font-semibold  xl:text-xl">
                                <span>React Js</span>
                                <span>Javascript</span>
                                <span>Tailwind</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div className="flex flex-col gap-3 flex-1 font-semibold  xl:text-xl">
                                <span>Node Js</span>
                                <span>Express Js</span>
                                <span>Mongo DB</span>
                                <span>Prisma</span>
                                <span>Git</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default About;
