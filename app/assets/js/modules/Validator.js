import $ from 'jquery';
import { log } from 'util';

// console.log('Hello');
class Validator {
    constructor() {
        this.inputs = $('.login-inputs');
        this.validationMessage = $('.validation-message');
        this.validator();
    }

    validator () {
        this.inputs.on('change', function () {
            let emailValue = $(this).val();
            // let passwodValue = $()
            let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            console.log(emailValue);
            
            if (emailValue == '') {
                $('.validation-message').html(`<p class='alert-message'>Type your email and password!</p>`);
            }
            else {
                $('.validation-message').html('');
            }
        });
    }
}

export default Validator;