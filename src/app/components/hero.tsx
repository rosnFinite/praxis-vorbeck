import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
    return(
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.heroui.chat/image/places?w=1920&h=1080&u=dental1" 
          alt="Moderne Zahnarztpraxis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full tooth-logo" viewBox="0 0 100 100">
                <path d="M10,10 L90,10 L90,90 L50,90 L10,90 Z" />
                <path d="M35,25 C40,20 60,20 65,25 C70,30 70,40 65,50 C60,60 55,75 50,90 C45,75 40,60 35,50 C30,40 30,30 35,25 Z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Moderne Zahnmedizin mit Herz
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Willkommen bei Zahnärzte im Urbanus Ärztehaus. Wir verbinden modernste Technologie mit persönlicher Betreuung für Ihr strahlendes Lächeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              color="primary" 
              variant="solid"
              radius="full"
              className="font-medium text-sm px-8 py-6 bg-white text-primary apple-button"
              as="a"
              href="#appointment"
            >
              Termin vereinbaren
            </Button>
            <Button 
              size="lg" 
              variant="flat"
              radius="full"
              className="font-medium text-sm px-8 py-6 text-white border-white/30 bg-white/10 apple-button"
              as="a"
              href="#services"
            >
              Unsere Leistungen
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-light">Mehr entdecken</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
    )
}