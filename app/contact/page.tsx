"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Pesan berhasil dikirim ke console ");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Kontak Saya</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Pesan"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 text-black"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Kirim
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/kaniaaz?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kkaniaaz?igsh=NGk5dGxxc210YjI4&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@k.4cry?_t=ZS-8zlfiRMao3b&_r=1"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-600"
        >
          <FaTiktok />
        </a>
      </div>
    </motion.section>
  );
}
