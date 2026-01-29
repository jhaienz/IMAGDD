import { useEffect, useRef } from "react";

const videos = [
  {
    src: "/ImagAnimatePSD.mp4",
    highlight: "Game On. The Future Starts Here.",
    caption:
      "Get ready to level up and step into a dynamic space where technology meets imagination. The GDAP Academic Roadshow 2026 proudly presents IMAGDD: Innovations in Multimedia, Animation, and Game Design Development—Shaping the Future of Interactive Media.\n\nHappening on April 23–25, 2026, at the Xavier Hall, Ateneo de Naga University, this three-day roadshow brings together creative minds, industry professionals, and future innovators to explore the latest trends, tools, and opportunities in game development and interactive media. Expect inspiring talks, insightful discussions, and meaningful connections that bridge creativity, technology, and industry growth.\n\nWhether you're building games, designing worlds, investing in ideas, or simply passionate about interactive media, IMAGDD 2026 is your chance to learn, connect, and help shape the future of the game and creative tech industry.",
    color: "#ffcc01",
  },
  {
    src: "/ImagAnimatePSD_1.mp4",
    highlight: "IMAGDD is Back!",
    caption:
      "Learn, create, and connect with industry experts—follow us for more exciting announcements.",
    color: "#0133ff",
  },
  {
    src: "/ImagAnimatePSD_2.mp4",
    highlight: "3 Days of Game Development Insights and Innovations!",
    caption:
      "Get ready to dive deep into the world of game design, animation, and interactive media at the GDAP Academic Roadshow 2026 – IMAGDD. Over three action-packed days, you'll gain exclusive insights from industry experts, explore the latest trends in game development, and discover innovations that are shaping the future of interactive entertainment.\n\nWhether you're a game developer, designer, enthusiast, or investor, this is the must-attend annual event to learn, create, and connect with the minds driving the industry forward. Mark your calendars and don't miss your chance to be part of the next big wave in multimedia and game development!\n\nApril 23–25, 2026 | Xavier Hall, Ateneo de Naga University",
    color: "#ff0101",
  },
  {
    src: "/ImagAnimatePSD_3.mp4",
    highlight: "Call for Collaborators and Sponsors!",
    caption:
      "Are you passionate about game development, animation, or interactive media? Do you want to be part of an event that inspires the next generation of innovators? The GDAP Academic Roadshow 2026 – IMAGDD is seeking collaborators and sponsors to join us in shaping the future of multimedia and game design.\n\nPartner with us and gain the opportunity to showcase your brand, connect with talented students and professionals, and contribute to a platform that celebrates creativity, technology, and innovation. Whether you're an industry leader, a startup, or an enthusiast looking to make an impact, we want to work with you to create an unforgettable event.\n\nInterested? Send us a message and let's discuss how we can collaborate and make IMAGDD 2026 a groundbreaking experience together!",
    color: "#ffcc01",
  },
];

export default function VideoShowcase() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      // Fallback: show all sections immediately
      sectionRefs.current.forEach((ref) => {
        if (ref) ref.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "50px 0px 0px 0px",
      },
    );

    // Small delay to ensure DOM is ready on mobile
    const timeoutId = setTimeout(() => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-gray-950">
      {/* Section Header */}
      <div className="py-10 sm:py-12 md:py-16 text-center bg-gray-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
          Experience <span style={{ color: "#ffcc01" }}>IMAGDD</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Scroll down to explore what awaits you at the GDAP Academic Roadshow
          2026
        </p>
        <div className="mt-6 md:mt-8 animate-bounce">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Video Sections */}
      {videos.map((video, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className={`scroll-animate py-8 sm:py-12 md:py-16 lg:py-20 ${
            index % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 lg:gap-12 items-center`}
            >
              {/* Video */}
              <div className="w-full lg:w-3/5">
                <div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-black"
                  style={{ boxShadow: `0 15px 40px -10px ${video.color}40` }}
                >
                  <video
                    className="w-full h-auto object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 text-center lg:text-left px-2 sm:px-0">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                  style={{ backgroundColor: `${video.color}20`, color: video.color }}
                >
                  {index + 1} of {videos.length}
                </div>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                  style={{ color: video.color }}
                >
                  {video.highlight}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {video.caption}
                </p>

                {/* Decorative element */}
                <div className="mt-6 sm:mt-8 flex items-center gap-2 justify-center lg:justify-start">
                  <div
                    className="w-8 sm:w-10 md:w-12 h-1 rounded-full"
                    style={{ backgroundColor: video.color }}
                  />
                  <div
                    className="w-4 sm:w-5 md:w-6 h-1 rounded-full"
                    style={{ backgroundColor: `${video.color}66` }}
                  />
                  <div
                    className="w-2 sm:w-2.5 md:w-3 h-1 rounded-full"
                    style={{ backgroundColor: `${video.color}33` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="py-12 sm:py-16 md:py-20 text-center px-4" style={{ backgroundColor: "#0133ff" }}>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          Ready to be part of IMAGDD 2026?
        </h3>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join us on April 23-25, 2026 at Xavier Hall, Ateneo de Naga University
        </p>
        <a
          href="/register"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-gray-900 font-bold rounded-full text-sm sm:text-base md:text-lg hover:scale-105 transition-transform shadow-xl"
          style={{ backgroundColor: "#ffcc01" }}
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
