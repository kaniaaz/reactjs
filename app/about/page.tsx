"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [dark, setDark] = useState(false);

  const theme = {
    background: dark ? "#2c0d0d" : "#f9f9f9", 
    text: dark ? "white" : "black",
    cardBg: dark ? "#6b2c2c" : "white", 
    accent: dark ? "pink" : "maroon", 
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "40px 20px",
        maxWidth: 1000,
        margin: "0 auto",
        background: theme.background,
        color: theme.text,
        minHeight: "100vh",
      }}
    >
      {/* Toggle Mode */}
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid",
            cursor: "pointer",
            background: "transparent",
            color: theme.text,
          }}
        >
          {dark ? "🌙 dark" : "☀️ light"}
        </button>
      </div>

      <h1
        style={{
          textAlign: "center",
          color: theme.accent,
          marginBottom: 40,
        }}
      >
        About Me
      </h1>

      {/* Biodata */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
          alignItems: "center",
          background: theme.cardBg,
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          marginBottom: 40,
        }}
      >
        <div>
          <h2 style={{ color: theme.accent }}>Biodata Thania</h2>
          <p>
            Hi guys, aku Adristy Nathania K, biasa dipanggil
            Thania. Aku lahir di 21 Desember 2008. Aku suka
            bgt bgt sm mingyu, scoups, dst.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Image
            src="/thania.jpg"
            alt="Profil Kaniaaz"
            width={220}
            height={250}
            style={{
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>

      {/* Hal yang disuka */}
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Hal yang aku suka
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
          marginBottom: 40,
        }}
      >
        {[
          {
            title: "KOPIII",
            desc: "I LOVE KOPI SO MUCHH soalnya bisa naikin mood bgt aplg butterscoth sea salt latte...",
          },
          {
            title: "Mingyu",
            desc: "suka mingyu soalny gtg ofc! greenflag aplg, berbakat btul..",
          },
          {
            title: "FILMMM",
            desc: "FILM SPANISHHH OR INGGRIS asli.... ganteng bgt.....",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: theme.cardBg,
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              color: theme.text,
            }}
          >
            <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Hal yang aku tidak suka
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {[
          {
            title: "Org yg ngagetin",
            desc: "km gpp kh kek gt.. cpt tobat yh",
          },
          {
            title: "Matcha",
            desc: "klean mkn rmput kah?????????",
          },
          {
            title: "Tidur lampu nyala",
            desc: "Sakit MATA.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: theme.cardBg,
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              color: theme.text,
            }}
          >
            <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
