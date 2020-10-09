let contact_button = document.getElementsByClassName("button_new")[0]

contact_button.addEventListener("click",async (e) => {
    e.preventDefault();
    const contact_data = await axios.get('https://api.rootnet.in/covid19-in/contacts')
    
})