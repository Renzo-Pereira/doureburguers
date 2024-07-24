import { Link } from "react-router-dom"


const Footer = () =>{

    return (
        <footer>
<ul>
    <li><Link to={"/"}><i class="bi bi-house"></i></ Link></li>
    <li><Link to={"/promos"}><i class="bi bi-tag"></i></ Link></li>
    <li><Link to={"/productos"}><i class="bi bi-fire"></i></ Link></li>
    <li><Link to={"/perfil"}><i class="bi bi-person-circle"></i></ Link></li>
</ul>
        </footer>
    )
}

export default Footer