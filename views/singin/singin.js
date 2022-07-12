const Btn_Singin = document.querySelector('.nav_btn_singin');
const Form_Singin = document.querySelector('.conteiner_form_Singin');
const Form_singin_data = document.querySelector('.form_singin');
const x_singin = document.getElementById("xs");





function close_singin() {
    x_singin.addEventListener('click', function () {
        Form_Singin.style.display = 'none';
        window.location = "http://localhost:3121/";

    }
    );
}

close_singin();




Form_singin_data.addEventListener('submit', (e) => {
    e.preventDefault();
    const Data_singin = new FormData(Form_singin_data);
    const data = {}

    for (const [key, value] of Data_singin.entries()) {

        data[key] = value;

        const DatJSON = JSON.stringify(data);
    }
        

    if(data.password === "" || data.email === "" || data.name === "" ){
        alert("Please enter")
    }else {

        fetch('http://localhost:3121/singin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }


        })

            .then((res) => {
                console.log(res);

            }
            )

            

                window.location = 'http://localhost:3121/'


            

    }

           
    








}
);


