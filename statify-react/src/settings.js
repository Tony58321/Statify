let settingsModal = document.getElementById("settingsModal")

export async function toggleModal() {
    settingsModal.classNameList.toggle("hidden")
}

export default toggleModal