let contact_button = document.getElementsByClassName("button_new")[0]

async function contact_details(){
    // e.preventDefault();
    const contact_data = await axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
    console.log(contact_data.data.data)
    var i;
    var table=document.getElementsByClassName('table-fill')[0];
    var tbody=document.getElementsByClassName('table-hover')[0].innerHTML="";
    
    for(i=0;i<contact_data.data.data.medicalColleges.length;i++)
    {
        var loc="<td>"+contact_data.data.data.medicalColleges[i].state+"</td>";
        var name="<td>"+contact_data.data.data.medicalColleges[i].name+"</td>";
        var city="<td>"+contact_data.data.data.medicalColleges[i].city+"</td>";
        var ownership="<td>"+contact_data.data.data.medicalColleges[i].ownership+"</td>";
        var admissionCapacity="<td>"+contact_data.data.data.medicalColleges[i].admissionCapacity+"</td>";
        var hospitalBeds="<td>"+contact_data.data.data.medicalColleges[i].hospitalBeds+"</td>";
        var fdata=loc+name+city+ownership+admissionCapacity+hospitalBeds;
        var ffdata="<tr>"+fdata+"</tr>";
        $(table).find('tbody').append(ffdata);

    }

}
