/*active button class onclick*/
$('.nav a').click(function(e) {
    e.preventDefault();
    $('.nav a').removeClass('active');
    $(this).addClass('active');
    if(this.id === !'profile'){
      $('.profile').addClass('noshow');
      $('.noshow').css('z-index',1);
    }
    else if(this.id === 'profile') {
      $('.profile').removeClass('noshow');
      $('.rightbox').children().not('.profile').addClass('noshow');
      $('.noshow').css('z-index',1);
      $('.profile').css('z-index',2);
    }
    else if (this.id === 'account') {
      $('.account').removeClass('noshow');
       $('.rightbox').children().not('.account').addClass('noshow');
       $('.noshow').css('z-index',1);
       $('.account').css('z-index',2);
    }
    else if(this.id === 'personal') {
      $('.personal').removeClass('noshow');
      $('.rightbox').children().not('.personal').addClass('noshow');
      $('.noshow').css('z-index',1);
      $('.personal').css('z-index',2);
    }
      else if(this.id === 'body') {
      $('.body').removeClass('noshow');
      $('.rightbox').children().not('.body').addClass('noshow');
      $('.noshow').css('z-index',1);
      $('.body').css('z-index',2);
    }
  });


const content = document.querySelector('#main')
const accountContainer = document.querySelector("#account_container")
const personalContainer = document.querySelector("#personal_detail_container")
const bodyContainer = document.querySelector("#body_container")
const imgContainer = document.querySelector('#img_container')
const accountBtn = document.querySelector('#account_edit')
const personalBtn = document.querySelector('#personal_edit')
const bodyBtn = document.querySelector('#body_edit')
const iconBtn = document.querySelector('#icon_edit')
const imgPreview = document.querySelector('#img_preview')
const iconForm = document.querySelector('#icon_form')

let emailData,
    passwordData,
    imgData,
    firstNameData,
    lastNameData,
    genderData,
    dobData,
    heightData,
    weightData;

loadDetails()


async function getDetails() {
    const res = await fetch('/users/userDetails')
    let resData = await res.json()
    console.log('resData')
    console.log(resData)
    emailData = resData.email;
    passwordData = 'AAATK3!7';
    imgData = `/user_upload/${resData.icon}`;
    firstNameData = resData.first_name;
    lastNameData = resData.last_name;
    genderData = resData.gender;
    dobData = resData.dob;
    console.log(dobData);
    heightData = resData.height;
    weightData = resData.weight;
    return resData
}

async function loadDetails() {
    await getDetails()

    refreshContent('img')
    refreshContent('account')
    refreshContent('personal')
    refreshContent('body')
}

content.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target == accountBtn) {
        accountContainer.innerHTML = `
        <form id="account_form">
                    <div>Email:</div><input id="email" name="email" type="email" value="${emailData}">
                    <br>
                    <div>Password:</div><input id="password" name="password" type="password" value="${passwordData}">
                    <br>
                    <div>Confirm Password:</div><input id="confirm" name="confirm" type="password" value="${passwordData}">
                    <br>
                    <button id="account_submit" type="button">
                        Submit
                    </button>
                    <input type="reset">
                    <button id="account_cancel" type="button">
                        Cancel
                    </button>
                </form>
        `
    } else if (event.target == personalBtn) {
        if (genderData == "male") {
            personalContainer.innerHTML = `
            <form id="personal_form">
                        <div>First Name:</div><input id="first_name" name="first_name" type="text" value="${firstNameData}">
                        <br>
                        <div>Last Name:</div><input id="last_name" name="last_name" type="text" value="${lastNameData}">
                        <br>
                        <div>Gender:</div>
                        <input id="male" value="male" name="gender" type="radio" checked> <label for="male">Male</label>
                        <br>
                        <input id="female" value="female" name="gender" type="radio"><label for="female">Female</label>
                        <br>
                        <div>Date of Birth:</div><input id="dob" name="dob" type="date" value="${dobData}">
                        <br>
                        <button id="personal_submit" type="button">
                            Submit
                        </button>
                        <input type="reset">
                        <button id="personal_cancel" type="button">
                            Cancel
                        </button>
                    </form>
            `
        } else if (genderData == "female") {
            personalContainer.innerHTML = `
            <form id="personal_form">
                        <div>First Name:</div><input id="first_name" name="first_name" type="text" value="${firstNameData}">
                        <br>
                        <div>Last Name:</div><input id="last_name" name="last_name" type="text" value="${lastNameData}">
                        <br>
                        <div>Gender:</div>
                        <input id="male" value="male" name="gender" type="radio"> <label for="male">Male</label>
                        <br>
                        <input id="female" value="female" name="gender" type="radio" checked><label for="female">Female</label>
                        <br>
                        <div>Date of Birth:</div><input id="dob" name="dob" type="date" value="${dobData}">
                        <br>
                        <button id="personal_submit" type="button">
                            Submit
                        </button>
                        <input type="reset">
                        <button id="personal_cancel" type="button">
                            Cancel
                        </button>
                    </form>
            `
        } else {
            personalContainer.innerHTML = `
            <form id="personal_form">
                        <div>First Name:</div><input id="first_name" name="first_name" type="text" value="${firstNameData}">
                        <br>
                        <div>Last Name:</div><input id="last_name" name="last_name" type="text" value="${lastNameData}">
                        <br>
                        <div>Gender:</div>
                        <input id="male" value="male" name="gender" type="radio"> <label for="male">Male</label>
                        <br>
                        <input id="female" value="female" name="gender" type="radio"><label for="female">Female</label>
                        <br>
                        <div>Date of Birth:</div><input id="dob" name="dob" type="date" value="${dobData}">
                        <br>
                        <button id="personal_submit" type="button">
                            Submit
                        </button>
                        <input type="reset">
                        <button id="personal_cancel" type="button">
                            Cancel
                        </button>
                    </form>
            `
        }

    } else if (event.target == bodyBtn) {
        bodyContainer.innerHTML = `
        <form id="body_form">
        <div>Height:</div><input id="height" name="height" type="number" value="${heightData}">
        <br>
        <div>Weight:</div><input id="weight" name="weight" type="number" value="${weightData}">
        <br>
        <button id="body_submit" type="button">
            Submit
        </button>
        <input type="reset">
        <button id="body_cancel" type="button">
            Cancel
        </button>
    </form>
        `
    } else if (event.target == iconBtn) {
        iconForm.classList.toggle('shown')
    }
})

accountContainer.addEventListener('click', async (event) => {
    if (event.target.id == "account_cancel") {
        refreshContent('account')
    } else if (event.target.id == "account_submit") {
        await alterHandler('account')
    }
})

personalContainer.addEventListener('click', async (event) => {
    if (event.target.id == "personal_cancel") {
        refreshContent('personal')
    } else if (event.target.id == "personal_submit") {
        await alterHandler('personal')
    }
})

bodyContainer.addEventListener('click', async (event) => {
    if (event.target.id == "body_cancel") {
        refreshContent('body')
    } else if (event.target.id == "body_submit") {
        await alterHandler('body')
    }
})

iconForm.addEventListener('change', async (event) => {
    const [file] = event.target.files
    if (file) {
        imgPreview.src = URL.createObjectURL(file)
    }
})

imgContainer.addEventListener('click', async (event) => {
    if (event.target.id == "icon_submit") {
        if (document.querySelector('#icon_input').files[0]) {
            let formData = new FormData(iconForm)
            let res = await fetch('/users/updateImg', {
                method: "Put",
                body: formData
            })
            if (res.ok) {
                await getDetails()
                refreshContent('img')
                iconForm.classList.toggle('shown')
            }
        } else {
            alert('no files provided')
            return
        }
    } else if (event.target.id == 'icon_cancel') {
        iconForm.classList.toggle('shown')
        iconForm.reset()
        refreshContent('img')
    } else if (event.target.id == 'icon_reset'){
        refreshContent('img')
    }
})

async function alterHandler(section) {
    let res,
        form,
        formData;
    switch (section) {
        case 'body':
            form = document.querySelector('#body_form')
            formData = {
                height: form.height.value,
                weight: form.weight.value
            }
            res = await fetch('/users/updateBody', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            await getDetails()
            refreshContent('body')
            break;
        case 'personal':
            form = document.querySelector('#personal_form')
            formData = {
                first_name: form.first_name.value,
                last_name: form.last_name.value,
                gender: form.gender.value,
                dob: form.dob.value.toString()
            }
            res = await fetch('/users/updatePersonal', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            await getDetails()
            refreshContent('personal')
            break;
        case 'account':
            form = document.querySelector('#account_form')
            if (form.password.value != form.confirm.value) {
                alert("password values are not the same")
                return
            }
            formData = {
                email: form.first_name.value,
                password: form.password.value,
                confirm: form.confirm.value,
                dob: form.dob.value
            }
            res = await fetch('/users/updateAccount', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            await getDetails()
            refreshContent('account')
            break;
    }
}

async function refreshContent(section) {
    switch (section) {
        case 'account':
            accountContainer.innerHTML = `
            <div id="email">
                            email: ${emailData}
                        </div>
        
                        <div id="password">
                            password: ********
                        </div>
            `
            break;
        case 'personal':
            personalContainer.innerHTML = `
    <div id="first_name">
                    First Name: ${firstNameData}
                </div>

                <div id="last_name">
                    Last Name: ${lastNameData}
                </div>

                <div id="gender">
                    Gender: ${genderData}
                </div>

                <div id="birth_date">
                    Date of Birth: ${dobData? new Date(dobData).toLocaleDateString('en-GB',{timeZone:'Asia/Hong_Kong'}): ""}
                </div>
    `

            break;
        case 'body':
            bodyContainer.innerHTML = `
    <div id="height">
                    Height: ${heightData} cm
                </div>

                <div id="weight">
                    Weight: ${weightData} kg
                </div>
    `
            break;
        case 'img':
            imgPreview.src = imgData;
            break;
    }
}

