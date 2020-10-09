let notif_button = document.getElementsByClassName("button_new")[0]
notif_button.addEventListener("click",async (e) => {
    e.preventDefault();
    const notif_data = await axios.get('https://api.rootnet.in/covid19-in/notifications')
    console.log(notif_data)
})