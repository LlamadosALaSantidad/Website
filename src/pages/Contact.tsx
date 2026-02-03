import { Helmet } from "react-helmet-async";
import { SOCIAL_LINKS } from "../constants/social-links";
import Button from "../components/ui/Button";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../components/icons/SocialIcons";
import "./contact.scss";

function Contact() {
    const WHATSAPP_LINK = SOCIAL_LINKS.find((link) => link.name === "WhatsApp")?.url || "";
    const FACEBOOK_LINK = SOCIAL_LINKS.find((link) => link.name === "Facebook")?.url || "";
    const INSTAGRAM_LINK = SOCIAL_LINKS.find((link) => link.name === "Instagram")?.url || "";

    return (
        <>
            <Helmet>
                <title>Contacto | Llamados a la Santidad</title>
                <meta key="description" name="description" content="Ponte en contacto con nosotros para dudas, sugerencias o unirte a la comunidad." />
            </Helmet>
            <main className="contact">
                <section className="contact_header">
                    <h1>Hablemos</h1>
                    <p>¿Tienes alguna pregunta sobre el proyecto o quieres compartir una historia?</p>
                </section>

                <section className="contact_content">
                    <article className="contact_whatsapp">
                        <WhatsAppIcon />
                        <h3>WhatsApp</h3>
                        <p>Escríbenos directamente para una respuesta rápida.</p>
                        <a href={WHATSAPP_LINK} target="_blank"><Button variant="ws">Abrir Chat</Button></a>
                    </article>

                    <article className="contact_community">
                        <h3>Únete a la Comunidad</h3>
                        <p>Mantente actualizado con las últimas historias a través de nuestras redes sociales.</p>

                        <a href={FACEBOOK_LINK} target="_blank">
                            <Button variant="fb">
                                <FacebookIcon />
                                <span>Grupo de Facebook</span>
                            </Button>
                        </a>
                        <a href={INSTAGRAM_LINK} target="_blank">
                            <Button variant="ig">
                                <InstagramIcon />
                                <span>Instagram</span>
                            </Button>
                        </a>
                    </article>
                </section>

                <section className="contact_institutional">
                    <h3>Información Institucional</h3>
                    <p>Llamados a la Santidad</p>
                    <p>Colombia</p>
                    <p>alasantidadllamados@gmail.com</p>
                </section>
            </main>
        </>
    );
}

export default Contact;