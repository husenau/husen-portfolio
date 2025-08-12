import React from "react";

export default function Portfolio() {
  const navLinks = ["Home", "About", "Skills", "Experience", "Achievements", "Contact"];
  return (
    <div className="bg-[#0a192f] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/90 z-50 flex justify-center py-4 space-x-6">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#3fa9f5]">
            {link}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hussain Hameed</h1>
        <p className="text-lg md:text-xl text-[#ccd6f6] mb-6">
          IT Support Specialist | Cloud Solutions | Problem Solver
        </p>
        <div className="flex space-x-4">
          <a href="mailto:your-email@example.com" className="border-2 border-[#3fa9f5] px-4 py-2 rounded hover:bg-[#3fa9f5] hover:text-[#0a192f]">Email Me</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="border-2 border-[#3fa9f5] px-4 py-2 rounded hover:bg-[#3fa9f5] hover:text-[#0a192f]">LinkedIn</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p>
          I’m an IT Support Specialist based in Melbourne with experience in Microsoft 365, Azure AD,
          SharePoint, and user support. I help businesses enhance productivity through secure, reliable
          technology solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Microsoft 365 Admin","Azure AD","SharePoint","Active Directory","Windows Server","Networking","PowerShell","Intune","Teams","Exchange Online"].map((skill) => (
            <div key={skill} className="bg-[#112240] p-3 rounded text-center">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="border-l-2 border-[#3fa9f5] pl-4 space-y-6">
          <div>
            <h3 className="font-semibold">IT Support Specialist</h3>
            <p>Delivered user-focused IT support, managed Microsoft 365, and implemented security measures.</p>
          </div>
          <div>
            <h3 className="font-semibold">Senior Systems Engineer / SharePoint Specialist</h3>
            <p>Led SharePoint migrations and optimised collaboration platforms.</p>
          </div>
          <div>
            <h3 className="font-semibold">IT Administrator & Support (Casual)</h3>
            <p>Provided IT support and systems management for a small business environment.</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#112240] p-4 rounded">Migrated 250+ users to Microsoft 365 without disruption.</div>
          <div className="bg-[#112240] p-4 rounded">Reduced support ticket resolution time by 30%.</div>
          <div className="bg-[#112240] p-4 rounded">Implemented compliance measures for sensitive data.</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Your Name" className="p-2 rounded text-black" />
          <input type="email" placeholder="Your Email" className="p-2 rounded text-black" />
          <textarea placeholder="Your Message" rows="4" className="p-2 rounded text-black"></textarea>
          <button className="bg-[#3fa9f5] text-[#0a192f] font-bold py-2 rounded">Send</button>
        </form>
        <p className="mt-4">Or connect on <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-[#3fa9f5]">LinkedIn</a></p>
      </section>
    </div>
  );
}
