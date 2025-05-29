import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <svg className="w-full h-full tooth-logo" viewBox="0 0 100 100">
                                    <path d="M10,10 L90,10 L90,90 L50,90 L10,90 Z" />
                                    <path d="M35,25 C40,20 60,20 65,25 C70,30 70,40 65,50 C60,60 55,75 50,90 C45,75 40,60 35,50 C30,40 30,30 35,25 Z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-white text-xl">Zahnärzte im Urbanus Ärztehaus</p>
                        </div>
                        <p className="text-white/80 mb-6 font-light">
                            Moderne Zahnmedizin mit Herz im Herzen von Dortmund.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" aria-label="Facebook">
                                <Icon icon="lucide:facebook" className="text-white/80 hover:text-white transition-colors text-xl" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Icon icon="lucide:instagram" className="text-white/80 hover:text-white transition-colors text-xl" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <Icon icon="lucide:twitter" className="text-white/80 hover:text-white transition-colors text-xl" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Leistungen</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Prophylaxe</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Ästhetische Zahnheilkunde</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Zahnersatz</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Parodontologie</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Kinderzahnheilkunde</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Nützliche Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Über uns</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Unser Team</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Karriere</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/80 hover:text-white transition-colors">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-2">
                                <Icon icon="lucide:map-pin" className="text-primary shrink-0 mt-1" />
                                <span className="text-default-600">
                                    Urbanus Ärztehaus<br />
                                    Musterstraße 123<br />
                                    44137 Dortmund
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <Icon icon="lucide:phone" className="text-primary shrink-0" />
                                <Link href="tel:+4923112345678" className="text-default-600 hover:text-primary transition-colors">
                                    +49 231 12345678
                                </Link>
                            </li>
                            <li className="flex gap-2">
                                <Icon icon="lucide:mail" className="text-primary shrink-0" />
                                <Link href="mailto:info@zahnaerztedortmund.de" className="text-default-600 hover:text-primary transition-colors">
                                    info@zahnaerztedortmund.de
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Divider className="my-8 bg-white/20" />

                <div className="flex items-start gap-3 mb-4">
                    <Icon icon="lucide:map-pin" className="text-white/80 shrink-0 mt-1" />
                    <span className="text-white/80">
                        Roßbachstraße 12<br />
                        44369 Dortmund
                    </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/70 text-sm font-light">
                        &copy; {new Date().getFullYear()} Zahnärzte im Urbanus Ärztehaus. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                            Datenschutz
                        </Link>
                        <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                            Impressum
                        </Link>
                        <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}