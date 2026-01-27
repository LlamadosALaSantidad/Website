import { Helmet } from "react-helmet-async";
import { SOCIAL_LINKS } from "../constants/social-links";
import Button from "../components/ui/Button";
import { NewsletterIcon, WhatsAppIcon } from "../components/icons/SocialIcons";

function Contact() {
    const WHATSAPP_LINK = SOCIAL_LINKS.find((link) => link.name === "WhatsApp")?.url || "";

    return (
        <>
            <Helmet>
                <title>Contacto | Llamados a la Santidad</title>
                <meta name="description" content="Ponte en contacto con nosotros para dudas, sugerencias o unirte a la comunidad." />
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
                        <Button variant="ws"><a href={WHATSAPP_LINK} target="_blank">Abrir Chat</a></Button>
                    </article>

                    <article className="contact_newsletter">
                        <NewsletterIcon />
                        <h3>Newsletter</h3>
                        <p>Déjanos tu correo para recibir las últimas actualizaciones.</p>
                        <form action="">
                            <label htmlFor="newsletter_contact">Correo Electrónico</label>
                            <input type="email" name="email" id="newsletter_contact"/>
                            <Button variant="primary" type="submit">Suscribirse</Button>
                        </form>
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