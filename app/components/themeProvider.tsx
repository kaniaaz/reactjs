"use client";
import React, { createContext, useContext, useEffect, useState } from "react";


type Ctx = { theme: "light" | "dark"; toggle: () => void };
const ThemeCtx = createContext<Ctx | null>(null);


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
const [theme, setTheme] = useState<"light" | "dark">("dark");


// apply class on <html>
useEffect(() => {
const saved = (localStorage.getItem("theme") as "light" | "dark") || "dark";
setTheme(saved);
}, []);
useEffect(() => {
const root = document.documentElement;
root.classList.remove("light", "dark");
root.classList.add(theme);
localStorage.setItem("theme", theme);
}, [theme]);


return (
<ThemeCtx.Provider value={{ theme, toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")) }}>
{children}
</ThemeCtx.Provider>
);
}


export const useTheme = () => {
const ctx = useContext(ThemeCtx);
if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
return ctx;
};