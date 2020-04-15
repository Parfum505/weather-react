import React from 'react';

function Form(props) {
    function handleSubmitForm (e) {
        e.preventDefault();
        const form = document.querySelector('.needs-validation'),
            city = form.elements["city"].value;
        if (!city.trim()){
            form.classList.add('was-validated');
        } else {
            props.search(city);
            form.classList.remove('was-validated');
        }
    }
    return (
        <div className="row justify-content-center">
            <form className=" col-11 col-sm-10 col-md-7 col-lg-5 mb-3 needs-validation" onSubmit={handleSubmitForm} action="" noValidate>
                <div className="input-group-lg">
                    <input type="text"
                           name="city"
                           className="form-control"
                           placeholder="Search..."
                           id="search" required/>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
            </form>
        </div>
    );
}

export default Form;