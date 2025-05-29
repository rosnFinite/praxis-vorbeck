import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageId: number;
  delay: number;
}

function TeamMember({name, role, bio, imageId, delay}: TeamMemberProps){
    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        >
            <Card className="border-none shadow-sm apple-card">
                <CardBody className="overflow-visible pt-0 p-0">
                    <div className="mb-6">
                        <img 
                            src={`https://img.heroui.chat/image/avatar?w=400&h=400&u=${imageId}`} 
                            alt={name} 
                            className="w-full h-80 object-cover object-top"
                        />
                    </div>
                    <div className="px-8 pb-8">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <p className="text-primary text-sm font-medium mb-3">{role}</p>
                        <p className="text-default-600 font-light">{bio}</p>
                        
                        <Button 
                            color="primary" 
                            variant="light" 
                            radius="full" 
                            className="font-medium text-sm mt-4 apple-button"
                            endContent={<Icon icon="lucide:arrow-right" />}
                        >
                            Profil ansehen
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    )
}

export default function Team() {
    const team = [
        {
        name: "Dr. Sophia Weber",
        role: "Zahnärztin & Praxisinhaberin",
        bio: "Spezialisiert auf ästhetische Zahnheilkunde mit über 15 Jahren Erfahrung.",
        imageId: 10
        },
        {
        name: "Dr. Markus Becker",
        role: "Zahnarzt & Implantologe",
        bio: "Experte für Implantologie und digitale Zahnmedizin.",
        imageId: 15
        },
        {
        name: "Dr. Laura Schmidt",
        role: "Kieferorthopädin",
        bio: "Spezialistin für unsichtbare Zahnspangen und Kieferfehlstellungen.",
        imageId: 20
        },
        {
        name: "Dr. Thomas Müller",
        role: "Zahnarzt für Parodontologie",
        bio: "Fachmann für Zahnfleischbehandlungen und Prophylaxe mit 12 Jahren Erfahrung.",
        imageId: 25
        }
    ];

    return (
        <section id="team" className="py-32">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Unser Team</h2>
                    <p className="text-default-600 max-w-2xl mx-auto font-light text-lg">
                        Lernen Sie unser erfahrenes Team kennen, das sich mit Leidenschaft um Ihre Zahngesundheit kümmert.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <TeamMember 
                        key={index}
                        name={member.name}
                        role={member.role}
                        bio={member.bio}
                        imageId={member.imageId}
                        delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}