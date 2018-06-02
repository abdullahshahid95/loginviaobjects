function submitForm()
{
    document.querySelector('form.loginform').addEventListener('submit', function (e){
        e.preventDefault();
    });

    var user = {};

    var name = document.getElementById("name").value;
    var fullName = document.getElementById("fullname").value;
    var nic = document.getElementById("nic").value;
    var contact = document.getElementById("contact").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var picture = document.getElementById("picture").value;

    user.name = name;
    user.fullName = fullName;
    user.nic = nic;
    user.contact = contact;
    user.city = city;
    user.country = country;
    user.picture = picture;

    console.log(user);
}