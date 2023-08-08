console.log('hello')


function collectData(form) {
    if (form.email.value === undefined) {
        alert("Email is invalid");
    } else {
        var email = form.email.value;
        if (form.phoneNum.value === undefined) {
            alert("Phone Number is invalid");
        } else {
            var phoneNum = form.phoneNum.value;
            if (form.childName.value === undefined) {
                alert("Child Name is invalid");
            } else {
                var childName = form.childName.value;
                if (form.childAge.value === undefined) {
                    alert("Child Age is invalid")
                } else if (childAge > 6) {
                    alert("Child is too old. Try Lisa's Preschool")
                } else {
                    var childAge = form.childAge.value;
                    var childInfo = form.childInfo.value;
                }
            }
        }
    }




}