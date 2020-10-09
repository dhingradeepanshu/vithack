let contact_button = document.getElementsByClassName("button_new")[0]

async function contact_details(){
    // e.preventDefault();
    const contact_data = await axios.get('https://api.rootnet.in/covid19-in/contacts')
    var i;
    var table=document.getElementsByClassName('table-fill')[0];
    var tbody=document.getElementsByClassName('table-hover')[0].innerHTML="";
    console.log(contact_data.data.data.contacts.regional)
    for(i=0;i<contact_data.data.data.contacts.regional.length;i++)
    {
        var loc="<td>"+contact_data.data.data.contacts.regional[i].loc+"</td>";
        var num="<td>"+contact_data.data.data.contacts.regional[i].number+"</td>";
        var fdata=loc+num;
        var ffdata="<tr>"+fdata+"</tr>";
        $(table).find('tbody').append(ffdata);

    }
    console.log("Heyyaaaa")
}
