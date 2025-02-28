import "./Footer.css"

/*
    A function to return the footer. The footer includes the copyright statement and a link to the help page
*/
//<button className={""} onClick={() => setPage("Help")}>Help</button>
export default function Footer(setPage) {
    return (
    <footer>
        <a href="https://github.com/Tony58321/Statify/blob/main/user_manual.md" target="_blank" className="link-button">Help</a>
        <a href="https://github.com/Tony58321/Statify/" target="_blank" className="link-button">GitHub</a>
        <p>&copy; Statify 2025</p>
    </footer>
    );
}