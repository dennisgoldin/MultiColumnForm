*What does it do?*
Its a media screen responsive webpage that collects user data when the button is clicked.
*What interactive elements exist?*
Text input, text area, drop down selector, button
*How do you interact with them?*
The user enters small text data into a text input such as name, and large text data such as biographical information into text areas.  The dropdown selector is accessed with a pointing device and clicked and possibly scrolled for selecting a single data item from a dropdown list.  
*What visual effects are produced by interacting?*
The outline of the form element the user clicks on to interact with will highlight to a darker shade of blue except for the dropdown selectors which open when clicked.  The 'Send Data button' highlights to a lighter shade of blue when the pointer hovers over.
*How does it do it?*
The author used CSS styles to produce the visual effects.  The form data submission and input elements are HTML.  We will add JavaScript to send the submitted user data to browser console. After submission the form will reset.
*What existing HTML elements are changed?*
Various input data from the user is entered into form elements.  Since we are using JavaScript to process the user data instead of the default form action, we must use the `Event.preventDefault()` to block the page reload.  Also `Form.reset()` is used to clear the form after the event in the case the submission.
*What new HTML elements are created?*
An event handler is created for the submission event.  A form object  is created which has a collection of form data.
*What CSS styles are used to produce the effect?*
Pseudo selectors `::hover` is used to create the hover effect on the button, and `::focus` is used for highlight effects on various input borders.
