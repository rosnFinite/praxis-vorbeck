import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({icon, title, description} : ServiceCardProps) {
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
        <Card className="border-none shadow-sm h-full apple-card bg-white">
            <CardBody className="gap-4 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon icon={icon} className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="text-default-600 font-light">{description}</p>
            </CardBody>
            <CardFooter className="px-8 pb-8">
            <Button 
                color="primary" 
                variant="light" 
                radius="full" 
                className="font-medium text-sm apple-button"
                endContent={<Icon icon="lucide:arrow-right" />}
            >
                Mehr erfahren
            </Button>
            </CardFooter>
        </Card>
        </motion.div>
    )
}

export default function Services() {
    const services = [
        {
        icon: "lucide:shield-check",
        title: "Prophylaxe",
        description: "Professionelle Zahnreinigung und individuelle Vorsorge für langfristige Zahngesundheit."
        },
        {
        icon: "lucide:sparkles",
        title: "Ästhetische Zahnheilkunde",
        description: "Veneers, Bleaching und Zahnformung für ein strahlendes, natürliches Lächeln."
        },
        {
        icon: "lucide:replace",
        title: "Zahnersatz",
        description: "Hochwertige Kronen, Brücken und Implantate mit modernster Technologie."
        },
        {
        icon: "lucide:heart-pulse",
        title: "Parodontologie",
        description: "Behandlung von Zahnfleischerkrankungen für gesundes Zahnfleisch und stabilen Zahnerhalt."
        },
        {
        icon: "lucide:baby",
        title: "Kinderzahnheilkunde",
        description: "Einfühlsame Behandlung für unsere kleinen Patienten in entspannter Atmosphäre."
        },
        {
        icon: "lucide:zap",
        title: "Schmerzbehandlung",
        description: "Schnelle und effektive Hilfe bei akuten Zahnschmerzen und Notfällen."
        }
    ];

    return (
        <section id="services" className="py-32 bg-content2">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Unsere Leistungen</h2>
                    <p className="text-default-600 max-w-2xl mx-auto font-light text-lg">
                    Wir bieten Ihnen ein umfassendes Spektrum moderner zahnmedizinischer Behandlungen mit höchstem Qualitätsanspruch.
                    </p>
                </motion.div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        delay={index * 0.1}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}