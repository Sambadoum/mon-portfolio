

// src/Composants/Footer.jsx

"use client";

import { Footer as FlowbiteFooter } from "flowbite-react"; // Renommer l'import

export function CustomFooter() {  // Renommer le composant ici
    return (
        <FlowbiteFooter container>  {/* Utiliser le nom renommer ici */}
            <FlowbiteFooter.Copyright href="#" by="Samba Doumbia™" year={2024} />
            <FlowbiteFooter.LinkGroup>
                <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
        </FlowbiteFooter>

    );
}


