if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready);
}
else
{
    ready();
}

/*
    Function ready() adds an event listener to the Send button which calls validateInput() when clicked.
    Precondition: The webpage's fully loaded.
    Postcondition: The Send button has an event listener.
*/
function ready()
{
    document.querySelector(".btn-send").addEventListener("click", validateInputs);
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
    let nameInput = document.querySelector(".contact-form-name");
    let emailInput = document.querySelector(".contact-form-email");
    let textarea = document.querySelector(".contact-form-textarea");

    // Validate all the inputs.
    if (nameInput.value == "")
    {
        renderErrorMessage(1);
    }
    else if (emailInput.value == "")
    {
        renderErrorMessage(2);
    }
    else if (!emailInput.value.includes("@") || !emailInput.value.includes(".com"))
    {
        renderErrorMessage(3);
    }
    else if (textarea.value == "")
    {
        renderErrorMessage(4);
    }
    else
    {
        renderConfirmationMessage();
    }
}

/*
    Function renderErrorMessage(switchValue) renders a modal displaying an error message to the user.
    Precondition: The user clicked the Send button and an input was incorrectly filled.
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
                        Name field cannot be empty.
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

        case 3:
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
            
        case 4:
            modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Input Error</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Textarea field cannot be empty.
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
    Function renderConfirmationMessage() renders a modal confirming to the user that their contact info
    has been sent and clears the inputs.
    Precondition: The user clicked the Send button and all the inputs are correctly filled.
    Postcondition: A modal displaying a confirmation message is rendered.
*/
function renderConfirmationMessage()
{
    // Initialize variables w/ the form's inputs.
    let nameInput = document.querySelector(".contact-form-name");
    let emailInput = document.querySelector(".contact-form-email");
    let textarea = document.querySelector(".contact-form-textarea");

    // Render a modal displaying a confirmation message.
    let modal = document.querySelector(".modal");
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Confirmation</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Your message has been sent!.
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

    // Clear all the inputs.
    nameInput.value = "";
    emailInput.value = "";
    textarea.value = "";
}