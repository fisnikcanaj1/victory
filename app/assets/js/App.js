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

$("#login-id").validate({
    rules: {
        username: {
            required: true,
            // Using the normalizer to trim the value of the element
            // before validating it.
            //
            // The value of `this` inside the `normalizer` is the corresponding
            // DOMElement. In this example, `this` references the `username` element.
            normalizer: function (value) {
                return $.trim(value);
            }
        }
    }
});

$("#register-id").validate({
    rules: {
        username: {
            required: true,
            // Using the normalizer to trim the value of the element
            // before validating it.
            //
            // The value of `this` inside the `normalizer` is the corresponding
            // DOMElement. In this example, `this` references the `username` element.
            normalizer: function (value) {
                return $.trim(value);
            }
        }
    }
});

