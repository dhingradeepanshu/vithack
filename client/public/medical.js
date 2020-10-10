let contact_button = document.getElementsByClassName("button_new")[0]

async function contact_details(){
    // e.preventDefault();
    const contact_data = await axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
    console.log(contact_data)
}
