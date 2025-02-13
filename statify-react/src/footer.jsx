
/*
    A function to return the footer. The footer includes the copyright statement and a link to the help page
*/
export default function Footer(setPage) {
    return (
    <>
        <button onClick={() => setPage("Help")}>Help</button>
        <p>&copy; Statify 2025</p>
    </>)
}