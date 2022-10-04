import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import SignUpMedico from './components/SignUpMedico.vue'
import SignUpEnfermero from './components/SignUpEnfermero.vue'

const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/login',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signup',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/user/home',
        name: "home",
        component: Home
    },
    {
        path: '/user/signupmedico',
        name: "signUpMedico",
        component: SignUpMedico
    },
    {
        path: '/user/signupenfermero',
        name: "signUpEnfermero",
        component: SignUpEnfermero
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;