


export default function Help(goBack) {
    /*
    Help - returns component for help page
    Parameters:
        goBack - function to call to return to previous page
    */
    return (
    <>
        <h3>This is the help page</h3>
        <p>There's nothing here yet.</p>
        <button onClick={goBack}>Back</button>
    </>)
}