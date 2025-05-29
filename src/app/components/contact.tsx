import { Button, Card, CardBody, Divider, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Kontakt & Anfahrt</h2>
                    <p className="text-default-600 max-w-2xl mx-auto font-light text-lg">
                        Wir freuen uns auf Ihren Besuch. Hier finden Sie alle Informationen, wie Sie uns erreichen können.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-none shadow-sm apple-card h-full">
                            <CardBody className="gap-8 p-8">
                                <h3 className="text-2xl font-semibold text-primary">Kontaktinformationen</h3>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon icon="lucide:map-pin" className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Adresse</h4>
                                        <p className="text-default-600">
                                            Urbanus Ärztehaus<br />
                                            Roßbachstraße 12<br />
                                            44369 Dortmund
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon icon="lucide:phone" className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Telefon</h4>
                                        <p className="text-default-600">
                                            <a href="tel:+4923112345678" className="hover:text-primary transition-colors">
                                                +49 231 12345678
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon icon="lucide:mail" className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">E-Mail</h4>
                                        <p className="text-default-600">
                                            <a href="mailto:info@zahnaerztedortmund.de" className="hover:text-primary transition-colors">
                                                info@zahnaerztedortmund.de
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <Divider className="my-4" />

                                <h3 className="text-2xl font-semibold text-primary">Öffnungszeiten</h3>

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <p className="font-medium">Montag - Donnerstag</p>
                                        <p className="text-default-600">08:00 - 18:00 Uhr</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Freitag</p>
                                        <p className="text-default-600">08:00 - 16:00 Uhr</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-none shadow-sm apple-card">
                            <CardBody className="gap-6 p-8">
                                <h3 className="text-2xl font-semibold text-primary">Nachricht senden</h3>
                                <p className="text-default-600 font-light">
                                    Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Schreiben Sie uns!
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="Vorname"
                                        placeholder="Ihr Vorname"
                                        variant="bordered"
                                        radius="sm"
                                    />
                                    <Input
                                        label="Nachname"
                                        placeholder="Ihr Nachname"
                                        variant="bordered"
                                        radius="sm"
                                    />
                                </div>

                                <Input
                                    label="E-Mail"
                                    placeholder="Ihre E-Mail-Adresse"
                                    variant="bordered"
                                    radius="sm"
                                />

                                <Input
                                    label="Telefon"
                                    placeholder="Ihre Telefonnummer"
                                    variant="bordered"
                                    radius="sm"
                                />

                                <Textarea
                                    label="Nachricht"
                                    placeholder="Wie können wir Ihnen helfen?"
                                    variant="bordered"
                                    radius="sm"
                                    minRows={4}
                                />

                                <div className="mt-4">
                                    <Button
                                        color="primary"
                                        className="w-full md:w-auto font-medium apple-button"
                                        radius="full"
                                        size="lg"
                                    >
                                        Nachricht senden
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="border-none shadow-sm overflow-hidden">
                        <CardBody className="p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39438.13420785868!2d7.4399566!3d51.5135872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91760bff07a11%3A0x427f28131548750!2sDortmund!5e0!3m2!1sen!2sde!4v1654682301232!5m2!1sen!2sde"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Praxisstandort"
                            />
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}