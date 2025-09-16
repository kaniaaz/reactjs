"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
return (
<motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
<div className="hero">
<Image src="/thania.jpg" alt="Profil Thania" width={120} height={125} style={{ borderRadius: "50%" }}/>
<div>
<h1>Adristy Nathania K.</h1>

<div className="btns">
<Link href="/about" className="btn">Tentang</Link>
<Link href="/projects" className="btn">Proyek</Link>
</div>
</div>
</div>


<div className="grid">
<div className="card">
<h3>kenapa coding?</h3>
<p>karena coding itu bisa mengubah ide sederhana jadi sesuatu yang nyata dan berguna. selain itu, aku juga ingin punya skill yang bisa dipakai untuk karier masa depan, bikin aplikasi sendiri, dan bahkan bantu orang lain lewat teknologi.</p>
</div>
<div className="card">
<h3>target 2025</h3>
<p>memperdalam skill di next.js, react, dan flutter.</p>
</div>
</div>
</motion.section>
);
}