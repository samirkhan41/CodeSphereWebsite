import React, { useEffect, useState } from "react";
import hackathonImg from "../assets/hackathonImage.jpeg";
import qrImg from "../assets/qrImage.jpeg";

import Footer from "./Foooter";
import Nav from "../components/Nav";

const Events = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("May 15, 2026 09:30:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
        
        <div className="min-h-screen w-full bg-black text-white overflow-hidden"   >
<Nav/>

            {/* HERO SECTION */}

            <div
                className="relative flex flex-col lg:flex-row
        items-center justify-between
        px-6 md:px-12 lg:px-20
        pt-32 pb-20 gap-14"
            >
                {/* Background Glow */}

                <div
                    className="absolute top-0 left-0
          w-[400px] h-[400px]
          bg-blue-600/20 blur-[120px]
          rounded-full"
                />

                <div
                    className="absolute bottom-0 right-0
          w-[350px] h-[350px]
          bg-purple-600/20 blur-[120px]
          rounded-full"
                />

                {/* LEFT CONTENT */}

                <div className="relative z-10 flex-1">

                    <p
                        className="uppercase tracking-[8px]
            text-blue-400 text-sm md:text-base
            mb-4 animate-pulse"
                    >
                        Codesphere Presents
                    </p>

                    <h1
                        className="text-5xl sm:text-6xl md:text-7xl
            font-black leading-tight"
                    >
                        SPRINT-X
                    </h1>

                    <h2
                        className="text-2xl md:text-3xl
            font-semibold text-gray-300 mt-4"
                    >
                        A 6 Hours Mini Hackathon 🚀
                    </h2>

                    <p
                        className="text-gray-400 mt-8
            leading-8 max-w-2xl"
                    >
                        Build innovative projects, compete with talented developers,
                        showcase your coding skills, and win exciting prizes.
                        Join the ultimate coding sprint with futuristic vibes,
                        networking, teamwork, and creativity.
                    </p>

                    {/* EVENT INFO */}

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2
            gap-6 mt-10"
                    >

                        <div
                            className="bg-white/5 border border-white/10
              rounded-3xl p-6 backdrop-blur-xl
              hover:scale-105 transition duration-500"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                📅 Date & Time
                            </h3>

                            <p className="text-gray-400">
                                15 May 2026
                            </p>

                            <p className="text-gray-400">
                                9:30 AM Onwards
                            </p>
                        </div>

                        <div
                            className="bg-white/5 border border-white/10
              rounded-3xl p-6 backdrop-blur-xl
              hover:scale-105 transition duration-500"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                📍 Venue
                            </h3>

                            <p className="text-gray-400">
                                New Seminar Hall
                            </p>

                            <p className="text-gray-400">
                                Tula's Institute
                            </p>
                        </div>

                    </div>

                    {/* TIMER */}

                    <div className="mt-14">

                        <h2 className="text-3xl font-bold mb-8">
                            ⏳ Event Starts In
                        </h2>

                        <div
                            className="grid grid-cols-2 sm:grid-cols-4
              gap-5"
                        >

                            {Object.entries(timeLeft).map(([label, value]) => (
                                <div
                                    key={label}
                                    className="bg-gradient-to-b
                  from-blue-500/20 to-purple-500/20
                  border border-white/10
                  rounded-3xl p-6 text-center
                  backdrop-blur-xl
                  hover:-translate-y-2
                  transition duration-500"
                                >

                                    <h1 className="text-4xl font-black">
                                        {value}
                                    </h1>

                                    <p className="uppercase text-gray-400 mt-2">
                                        {label}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-5 mt-12">

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfBQ4c6lHX67Iu0ggoBBE2hnNl2TNrA4-8KJ1dGaBffepmdnQ/viewform?usp=header"
                            target="_blank"
                            className="px-8 py-4 rounded-2xl
              bg-blue-600 hover:bg-blue-700
              transition duration-300
              font-semibold shadow-lg shadow-blue-500/30"
                        >
                            Register Now
                        </a>

                        <button
                            className="px-8 py-4 rounded-2xl
              border border-white/10
              bg-white/5 hover:bg-white/10
              transition duration-300"
                        >
                            View Details
                        </button>

                    </div>

                </div>

                {/* RIGHT IMAGE */}

                <div
                    className="relative z-10 flex-1
          flex justify-center"
                >

                    <img
                        src={hackathonImg}
                        alt="hackathon"
                        className="w-full max-w-[500px]
            rounded-[40px]
            border border-white/10
            shadow-[0_0_50px_rgba(59,130,246,0.4)]
            hover:scale-105
            transition duration-700"
                    />

                </div>

            </div>

            {/* REGISTRATION SECTION */}

            <div
                className="px-6 md:px-12 lg:px-20
        pb-24"
            >

                <div
                    className="bg-gradient-to-r
          from-blue-500/10 to-purple-500/10
          border border-white/10
          rounded-[40px]
          p-8 md:p-14
          backdrop-blur-xl"
                >

                    <div
                        className="grid lg:grid-cols-2
            gap-14 items-center"
                    >

                        {/* LEFT */}

                        <div>

                            <h1
                                className="text-4xl md:text-5xl
                font-black mb-6"
                            >
                                Register For Sprint-X
                            </h1>

                            <p
                                className="text-gray-400
                leading-8"
                            >
                                Scan the QR code or click the registration button
                                to participate in the most exciting coding event
                                of the year. Limited seats available.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfBQ4c6lHX67Iu0ggoBBE2hnNl2TNrA4-8KJ1dGaBffepmdnQ/viewform?usp=header"
                                    target="_blank"
                                    className="px-8 py-4 rounded-2xl
                  bg-white text-black font-semibold
                  hover:scale-105 transition duration-300"
                                >
                                    Open Registration Form
                                </a>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="flex justify-center">

                            <div
                                className="bg-white p-5
                rounded-[30px]
                shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                            >

                                <img
                                    src={qrImg}
                                    alt="QR"
                                    className="w-[250px] md:w-[320px]"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* FOOTER */}
            <Footer />

        </div>
        </>
    )}

export default Events