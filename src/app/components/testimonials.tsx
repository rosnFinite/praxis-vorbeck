import { Avatar, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
  imageId: number;
  delay: number;
}

function Testimonial({name, text, rating, imageId, delay}: TestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="border-none shadow-sm apple-card">
                <CardBody className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Avatar src={`https://img.heroui.chat/image/avatar?w=200&h=200&u=${imageId}`} size="lg" />
                        <div>
                            <h4 className="font-semibold">{name}</h4>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Icon 
                                        key={i} 
                                        icon="lucide:star" 
                                        className={`text-sm ${i < rating ? 'text-warning' : 'text-default-300'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-default-600 font-light">{text}</p>
                </CardBody>
            </Card>
        </motion.div>
    );
}

export default function Testimonials() {
    const testimonials = [
        {
        name: "Julia Müller",
        text: "Ich hatte immer Angst vor dem Zahnarzt, aber das Team hat mich so gut betreut und mir alle Schritte erklärt. Jetzt gehe ich ohne Sorgen zur Kontrolle.",
        rating: 5,
        imageId: 25
        },
        {
        name: "Thomas Schneider",
        text: "Die Behandlung mit Implantaten hat meine Lebensqualität deutlich verbessert. Dr. Becker hat alles perfekt erklärt und die Ergebnisse sind fantastisch.",
        rating: 5,
        imageId: 30
        },
        {
        name: "Sarah Wagner",
        text: "Meine Kinder gehen gerne zum Zahnarzt! Das hätte ich nie gedacht. Die kindgerechte Betreuung ist wirklich hervorragend.",
        rating: 5,
        imageId: 35
        },
        {
        name: "Michael Hoffmann",
        text: "Die professionelle Zahnreinigung war gründlich und angenehm. Das Praxisteam ist freundlich und die Terminvergabe unkompliziert.",
        rating: 4,
        imageId: 40
        },
        {
        name: "Lisa Krause",
        text: "Nach meinem Umzug nach Dortmund habe ich lange nach einem guten Zahnarzt gesucht. Hier fühle ich mich bestens aufgehoben und gut beraten.",
        rating: 5,
        imageId: 45
        },
        {
        name: "Jan Fischer",
        text: "Die moderne Ausstattung und die digitalen Röntgenbilder haben mich beeindruckt. Alles auf dem neuesten Stand und trotzdem persönlich.",
        rating: 5,
        imageId: 50
        }
    ];

    return (
        <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-primary/5">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Das sagen unsere Patienten</h2>
                    <p className="text-default-600 max-w-2xl mx-auto font-light text-lg">
                        Erfahren Sie, wie wir unseren Patienten zu einem gesunden und strahlenden Lächeln verholfen haben.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial 
                        key={index}
                        name={testimonial.name}
                        text={testimonial.text}
                        rating={testimonial.rating}
                        imageId={testimonial.imageId}
                        delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}