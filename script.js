// form validation #1

// document.getElementById('registration').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let errors = {};
//     let form = event.target;
    
//     //username
//     let username = document.getElementById('username').value;
//     // let username = document.querySelector('[name = "username"]');

//     if (username.length < 4 || username == " " ){
//         errors.username = 'Username can not be empty and must be more then 4 characters';
//     }

//     //password
//     let password = document.getElementById('password').value;
//     let password2 = document.getElementById('password2').value;

//     if (password != password2) {
//         errors.password = 'Passwords do not match';
//     }

//     //checkbox
//     let checkbox = document.getElementById('agreecheckbox').checked;

//     if (!checkbox) {
//         errors.agree = 'You must agree our terms and conditions';
//     }

//     //radio
//     let age = false;

//     form.querySelectorAll('[name = "age"]').forEach( item => {
//         if (item.checked) {
//             age = true;
//         }
//     });

//     if (!age) {
//         errors.age = 'Please select your Age';
//     }


//     console.log(errors);

//     form.querySelectorAll('.error-text').forEach(item => {
//         item.textContent = '';
//     })

//     for (let item in errors) {
//         let errorPlaceholder = document.getElementById('error_' + item);

//         if (errorPlaceholder) {
//             errorPlaceholder.textContent = errors[item];
//         }
//     }

//     if(Object.keys(errors).length == 0) {
//         form.submit();
//     }

// })



// #2 show/hide password
// let password = document.getElementById('showpassword');
// let toggleIcon = document.getElementById('toggle-icon');


// toggleIcon.addEventListener('click', function() {
//     if (password.type == 'password') {
//         password.setAttribute('type', 'text');
//         toggleIcon.classList.add('fa-eye-slash');
//     } else {
//         toggleIcon.classList.remove('fa-eye-slash');
//         password.setAttribute('type', 'password');
//     }
// })

// #3 Accordion

// let accordition = document.getElementsByClassName('container');

// for (let i = 0; i < accordition.length; i++) {
//     accordition[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     })
// }

// $4 filter
let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItems = [];

function getUsers() {
    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(item => {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = `${item.first_name} ${item.last_name}`;

            let img = document.createElement('img');
            img.src = item.avatar;
            li.appendChild(img);
            li.appendChild(span);
            listItems.push(li);


            result.appendChild(li);
        });
    })
    .catch(function(e) {
        console.log(e);
    })
}
getUsers();


function filterData(searchItem) {
    listItems.forEach( (item) => {
        console.log(item);
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() ) ) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

filter.addEventListener('input', (event) => filterData(event.target.value));