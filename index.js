let emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're getting closer to your dream destination</p>
        <p>You will get weekly deals sent to: ${userEmailAddress}</p>
    `
    let ourMainContent = document.getElementById("main-content")
    ourMainContent.innerHTML = updatedHtmlContent
})