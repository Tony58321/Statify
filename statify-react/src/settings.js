let settingsModal = document.getElementById("settingsModal")

export async function toggleModal() {
    let settingsModal = document.getElementById("settingsModal"); 
    if (settingsModal) {
        settingsModal.classList.toggle("hidden"); 
    } else {
        console.error("Settings modal not found!");
    }
}

export default toggleModal