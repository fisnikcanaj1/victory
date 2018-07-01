import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery'; 
import 'bootstrap';
import 'popper.js';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), '85%');
new RevealOnScroll($(".testimonial"), '85%');
// new StickyHeader();
new Modal();
