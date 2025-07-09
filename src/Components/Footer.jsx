import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Dileswar Sahu</h2>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Dilesh333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FE3D0C] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dileswar-sahu-050866349/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FE3D0C] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dilesh.dev333@gmail.com"
            className="hover:text-[#FE3D0C] transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dileswar Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
