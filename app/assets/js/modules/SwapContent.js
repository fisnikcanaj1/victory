import $ from 'jquery';
import { log } from 'util';

class SwapContent {
    constructor () {
        this.registerClicked = $('#register');
        this.loginClicked = $('#login');
        this.swapToRegister();
        this.swapToLogin();
    }

    swapToRegister() {
        let $registerClicked = this.registerClicked;

        $registerClicked.on('click', () => {
            $('.login-wrapper').addClass('d-none');
            $('.register-form-wrapper').removeClass('d-none');
             $('.register-form-wrapper').addClass('animation');
        });
    }

    swapToLogin() {
        let $loginClicked = this.loginClicked;

        $loginClicked.on('click', () => {
            $('.login-wrapper').removeClass('d-none');
            $('.register-form-wrapper').addClass('d-none');
            $('.register-form-wrapper').addClass('animation');
        });
        
    }
}

export default SwapContent;