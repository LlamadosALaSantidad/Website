import Button from "../ui/Button";

function Newsletter() {
    return (
        <section className="newsletter">
            <img src="" alt="newsletter icon" />
            <h2>Recibe inspiración diaria</h2>
            <p>Suscríbete a nuestro boletín para recibir historias de santos y reflexiones directamente en tu correo.</p>
            <form className="newsletter_form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="email" placeholder="Tu correo electrónico" />
                <Button variant="white" type="submit">Suscribirme</Button>
            </form>
        </section>
    );
}

export default Newsletter;