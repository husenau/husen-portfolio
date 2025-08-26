import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
          Hussain Hameed
        </motion.h1>
        <p className="text-xl mb-6">IT Support Specialist | Systems Administrator</p>
        <a href="#about" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Learn More
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          I am an IT Support Specialist based in Coburg North, Australia, with hands-on experience in
          cloud platforms, automation, and modern workplace solutions. I enjoy solving complex
          technical issues and ensuring systems run at their best.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {['Azure AD', 'Office 365', 'Windows Server', 'Networking', 'PowerShell', 'Intune', 'Security', 'Automation'].map(skill => (
            <div key={skill} className="p-4 bg-white shadow rounded-xl">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-semibold text-xl">IT Support Specialist</h3>
            <p className="text-gray-600">Providing end-to-end IT support, managing cloud identity solutions, and enhancing system reliability through automation and process improvement.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-semibold text-xl">Systems Administrator</h3>
            <p className="text-gray-600">Administered Microsoft 365, Windows Server, and Intune, focusing on user experience, compliance, and secure identity management.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6">Let’s connect! Reach out to me for opportunities or collaboration.</p>
        <div className="space-x-4">
          <a href="mailto:your-email@example.com" className="px-6 py-3 bg-white text-blue-700 rounded-full shadow hover:bg-gray-200 transition">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/hussain-hameed" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-blue-700 rounded-full shadow hover:bg-gray-200 transition">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
