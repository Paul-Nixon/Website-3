if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready);
}
else
{
    ready();
}


function ready()
{
    document.querySelector(".btn-submit").addEventListener("click", validateInputs);
}


function validateInputs()
{
    // Initialize variables w/ the form's inputs.
    let firstNameInput = document.querySelector(".join-form-first-name");
    let lastNameInput = document.querySelector(".join-form-last-name");
    let passwordInput = document.querySelector(".join-form-password");
    let confirmPasswordInput = document.querySelector(".join-form-confirm-password");

    // Validate all the inputs.
    if (firstNameInput.value == "")
    {
        renderErrorMessage(1);
    }
    else if (lastNameInput.value == "")
    {
        renderErrorMessage(2);
    }
    else if (passwordInput.value == "")
    {
        renderErrorMessage(3);
    }
    else if (confirmPasswordInput.value == "")
    {
        renderErrorMessage(4);
    }
    else if (!(confirmPasswordInput.value == passwordInput.value))
    {
        renderErrorMessage(5);
    }
    else
    {
        renderConfirmationMessage();
    }
}


function renderErrorMessage(switchValue)
{
    let modal = document.querySelector(".modal");

    switch (switchValue)
    {
        case 1:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        First name cannot be empty.
                    </p>
                </div>
            </div>`;
            break;

        case 2:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Last name cannot be empty.
                    </p>
                </div>
            </div>`;
            break;

        case 3:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Password cannot be empty.
                    </p>
                </div>
            </div>`;
            break;

        case 4:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Submit Password field cannot be empty.
                    </p>
                </div>
            </div>`;
            break;

        case 5:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        The Password and Submit Password fields don't match.
                    </p>
                </div>
            </div>`;
            break;
    }
}


function renderConfirmationMessage()
{
    let modal = document.querySelector(".modal");
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Confirmation</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Your account has been created!.
                    </p>
                </div>
            </div>`;
}