
/*
    A function to return the footer. The footer includes the copyright statement and a link to the help page
*/
export default function Footer(setPage) {
    return (
    <footer style={{marginTop: "auto"}}>
        <hr/>
        <button onClick={() => setPage("Help")}>Help</button>
        <p style={{color: "white"}}>&copy; Statify 2025</p>
    </footer>
    );
}