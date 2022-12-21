import "./FooterComponent.css"
export const FooterComponent = () =>{
    return(

        <footer>
        <h4>Ponte en contacto con nosotros</h4>

        <p className="texto_final">
            Si quieres obtener mas informacion y saber todo lo refernete a este mundo y aun no tienes claro por donde iniciar contactanos te ayudaremos en este camino
        </p>
    
        <ul className="contactanos">
            <li>
                <a href=".">+54 11 9 2402-6370<img src="images/instagram.svg" alt=""/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/iamgabo22/" title="instagram" alt="">instagram</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/gabriel-torres-431690229/" title="linkedin" alt="">Linkedin</a>
            </li>
        </ul>
        </footer>
    )
}