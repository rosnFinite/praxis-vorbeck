import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

type NavigationProps = {
    isScrolled: boolean;
}

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navigation({isScrolled}: NavigationProps) {
    return(
        <Navbar className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/70 apple-blur shadow-sm' : 'bg-transparent'}`}height="4.5rem">
            <NavbarBrand>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <div className="relative w-10 h-10 flex items-center justify-center bg-primary">
                        <svg className="w-9 h-9 tooth-logo" viewBox="0 0 100 100">
                        <path d="M10,10 L90,10 L90,90 L50,90 L10,90 Z" />
                        <path d="M35,25 C40,20 60,20 65,25 C70,30 70,40 65,50 C60,60 55,75 50,90 C45,75 40,60 35,50 C30,40 30,30 35,25 Z" />
                        </svg>
                    </div>
                    <p className={`font-medium text-lg tracking-tight navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        Zahnärzte im Urbanus Ärztehaus
                    </p>
                </motion.div>
            </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-8" justify="center">
            <NavbarItem>
            <Link 
                color={isScrolled ? "foreground" : "primary"}
                href="#services" 
                className={`font-medium text-sm navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
                Leistungen
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link 
                color={isScrolled ? "foreground" : "primary"}
                href="#team" 
                className={`font-medium text-sm navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
                Team
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link 
                color={isScrolled ? "foreground" : "primary"}
                href="#testimonials" 
                className={`font-medium text-sm navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
                Erfahrungen
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link 
                color={isScrolled ? "foreground" : "primary"}
                href="#contact" 
                className={`font-medium text-sm navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
                Kontakt
            </Link>
            </NavbarItem>
        </NavbarContent>
        
        <NavbarContent justify="end">
            <NavbarItem className="hidden sm:flex">
            <Link href="tel:+4923112345678" className={`flex items-center gap-2 text-sm font-medium navbar-text ${isScrolled ? 'text-primary' : 'text-white'}`}>
                <Icon icon="lucide:phone" className={isScrolled ? "text-primary" : "text-white"} />
                <span>+49 231 12345678</span>
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Button 
                as={Link} 
                color="primary" 
                href="#appointment" 
                variant={isScrolled ? "solid" : "flat"}
                radius="full"
                className={`font-medium text-sm px-6 apple-button ${!isScrolled && "bg-white/20 text-white border-white/30"}`}
            >
                Termin vereinbaren
            </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
    )
}