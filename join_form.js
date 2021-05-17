if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready);
}
else
{
    ready();
}

/*
    Function ready() adds event listeners to the form's Reset and Submit inputs.
    Precondition: The webpage's fully loaded.
    Postcondition: The Reset and Submit button have respective event listeners.
*/
function ready()
{
    document.querySelector(".btn-reset").addEventListener("click", clearInputs);
    document.querySelector(".btn-submit").addEventListener("click", validateInputs);
}

/*
    Function clearInputs() clears all the text fields.
    Precondition: The webpage's fully loaded.
    Postcondition: All the text fields have no text in them.
*/
function clearInputs()
{
    document.querySelector(".join-form-first-name").value = "";
    document.querySelector(".join-form-last-name").value = "";
    document.querySelector(".join-form-email").value = "";
    document.querySelector(".join-form-password").value = "";
    document.querySelector(".join-form-confirm-password").value = "";
}

/*
    Function validateInputs() validates each input to see if there's an error. If so,
    renderErrorMessage(switchValue) will be called to render an error message related to
    the flawed input. Else, renderConfirmationMessage() is called to render a confirmation
    message.
    Precondition: The user clicked the Submit button.
    Postcondition: Either an error messaged is rendered or a confirmation message is rendered.
*/
function validateInputs()
{
    // Initialize variables w/ the form's inputs.
    let firstNameInput = document.querySelector(".join-form-first-name");
    let lastNameInput = document.querySelector(".join-form-last-name");
    let emailInput = document.querySelector(".join-form-email");
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
    else if (emailInput.value == "")
    {
        renderErrorMessage(3);
    }
    else if (!emailInput.value.contains == "@" || !emailInput.value.contains == ".com")
    {
        renderErrorMessage(4);
    }
    else if (passwordInput.value == "")
    {
        renderErrorMessage(5);
    }
    else if (confirmPasswordInput.value == "")
    {
        renderErrorMessage(6);
    }
    else if (!(confirmPasswordInput.value == passwordInput.value))
    {
        renderErrorMessage(7);
    }
    else
    {
        renderConfirmationMessage();
    }
}

/*
    Function renderErrorMessage(switchValue) renders a modal displaying an error message to the user.
    Precondition: The user clicked the Submit button and an input was incorrectly filled.
    Postcondition: A modal displaying an error message is rendered.
*/
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
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
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
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
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
                        Email field cannot be empty.
                    </p>
                </div>
            </div>`;
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
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
                        Email field either doesn't contain '@' or ".com".
                    </p>
                </div>
            </div>`;
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
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
                        Password cannot be empty.
                    </p>
                </div>
            </div>`;
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
            break;

        case 6:
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
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
            break;

        case 7:
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
            modal.style.display = "block";
            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
            window.onclick = (event) => {
                if (event.target == modal)
                {
                    modal.style.display = "none";
                }
            }
            break;
    }
}

/*
    Function renderConfirmationMessage() renders a modal confirming to the user that their account
    has been created.
    Precondition: The user clicked the Submit button and all the inputs are correctly filled.
    Postcondition: A modal displaying a confirmation message is rendered.
*/
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
    modal.style.display = "block";
    document.querySelector(".close").addEventListener("click", () => {
        clearInputs();
        modal.style.display = "none";
    });
    window.onclick = (event) => {
        if (event.target == modal)
        {
            modal.style.display = "none";
        }
    }
}