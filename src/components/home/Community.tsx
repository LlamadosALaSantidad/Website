import { SOCIAL_LINKS } from "../../constants/social-links";
import { CommunityIcon, FacebookIcon, InstagramIcon } from "../icons/SocialIcons";
import Button from "../ui/Button";
import "./community.scss";

function Community() {
    const FACEBOOK_LINK = SOCIAL_LINKS.find((link) => link.name === "Facebook")?.url || "";
    const INSTAGRAM_LINK = SOCIAL_LINKS.find((link) => link.name === "Instagram")?.url || "";

    return (
        <section className="community">
            <CommunityIcon className="community_icon" />
            <h2>Únete a nuestra comunidad</h2>
            <p>No te pierdas ninguna actualización. Síguenos en nuestras redes sociales para recibir recordatorios de nuevas historias.</p>
            <div className="community_buttons">
                <a href={FACEBOOK_LINK} target="_blank">
                    <Button variant="fb">
                        <FacebookIcon />
                        <span>Grupo de Facebook</span>
                    </Button>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank">
                    <Button variant="ig">
                        <InstagramIcon />
                        <span>Síguenos en Instagram</span>

                    </Button>
                </a>
            </div>
        </section>
    );
}

export default Community;