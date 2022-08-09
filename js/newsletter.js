function send_form ()
{
    let form = document.forms[0];
    console.log(form);
    form.elements.email.value;
    console.log(form.elements.email.value);
    validateEmail(form.elements.email.value);
    console.log(validateEmail(form.elements.email.value));

    if(validateEmail(form.elements.email.value))
    {
        let okey_text = document.getElementById("error_text");
        okey_text.style.color = "green";
        okey_text.innerText = "ok"
        okey_text.style.opacity = 1;
        let red_border = document.getElementById("email");
        red_border.classList.remove("error_border");
        let error_icon = document.getElementById("mistakes_icon");
        error_icon.style.opacity = 0;
    }
    else
    {
        let exclamation = document.getElementById("mistakes_icon");
        exclamation.style.opacity = 1;
        let change_border = document.getElementById("email");
        change_border.classList.add("error_border");
        let add_error_text = document.getElementById("error_text");
        add_error_text.innerText = "Please provide a valid email"
        add_error_text.style.opacity =1;
        add_error_text.style.color = "#F96262";
    }

    return false;
}
function validateEmail(email) 
    {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
