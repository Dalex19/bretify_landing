"use client"

import { useClientMediaQuery } from "../hook/useClientMediaQuery"
import NavbarDesk from "./NavbarDesk";
import NavbarMob from "./NavbarMob";

export default function Navbar() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
    return (
    <>
        {
        isMobile ? <NavbarMob /> : <NavbarDesk />
    }
    </>
  )
}
