// import RevealOnScroll from './modules/RevealOnScroll';
import Validator from './modules/Validator';
import SwapContent from './modules/SwapContent';
import $ from 'jquery'; 
import 'bootstrap';
import 'popper.js';
import 'jquery-validation';
import { log } from 'util';

// var mobileMenu = new MobileMenu();
// new RevealOnScroll($(".feature-item"), '85%');
// new RevealOnScroll($(".testimonial"), '85%');
// new StickyHeader();
new Validator();
new SwapContent();

$("#login-id").validate();

$("#register-id").validate({
    rules: {
        agree: "required"
    },
    messages: {
        agree: "Please indicate that you accept the Terms and Conditions."
    }
});

