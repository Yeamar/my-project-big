const Btn_Login = document.querySelector('.nav_btn_login');
const Form_Login = document.querySelector('.conteiner_form_Login');
const Form_login_data = document.querySelector('.form_login');
const Body_home = document.querySelector('.body_home');
const x_login = document.getElementById("x");
const Sub_login = document.querySelector('.btn_login');

// function login() {

//     Btn_Login.addEventListener('click', function () {
//         Form_Login.style.display = 'block';

//     }
//     );

// }
// login();

function close_login() {
    x_login.addEventListener('click', function () {
        Form_Login.style.display = 'none';

       
        window.location = "http://localhost:3121/";
        


    }
    );
}
close_login();

    Form_login_data.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {}
        const Data_login = new FormData(Form_login_data);

        for (const [key, value] of Data_login.entries()) {
            data[key] = value;
            const DatJSON = JSON.stringify(data);

            console.log(DatJSON);
       
        
        }

    //     const remember = data.remember
    // if (remember) {
        
    //    window.localStorage.setItem("data", data.email)


    // }

          fetch('http://localhost:3121/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        
       
    
    }
    );


