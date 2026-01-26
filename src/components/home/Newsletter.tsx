function Newsletter() {
    return (
        <section className="newsletter">
            <img src="" alt="newsletter icon" />
            <h2>Recibe inspiración diaria</h2>
            <p>Suscríbete a nuestro boletín para recibir historias de santos y reflexiones directamente en tu correo.</p>
            <form className="newsletter_form">
                <input type="text" name="email" placeholder="Tu correo electrónico" />
                <button type="submit">Suscribirme</button>
            </form>
        </section>
    );
}

export default Newsletter;