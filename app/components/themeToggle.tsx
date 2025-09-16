"use client";
import { useTheme } from "./themeProvider";


export default function ThemeToggle() {
const { theme, toggle } = useTheme();
return (
<button className="toggle" onClick={toggle} aria-label="Toggle theme">
{theme === "dark" ? "🌙 Dark" : "☀️ Light"}
</button>
);
}