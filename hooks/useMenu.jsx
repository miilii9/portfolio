
'use client'
import { useState } from "react";
export default function useMenu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return {
        open,
        toggleMenu
    };
}
