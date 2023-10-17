import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css"

export default function GalleryNavigation(props) {
    const { galleries } = props;
    return (

        <nav>
            <h1>Galleries </h1>
            <NavLink exact to="/" >Home</NavLink>
            <ul>
                {galleries.map((gallery) => (
                <li key={gallery.id}>
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </li>
                ))}
            </ul>
        </nav>
    )
}
