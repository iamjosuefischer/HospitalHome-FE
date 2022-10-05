<template>
    <div class="signUp_user2">
        <div class="container_signUp_user2">
            <form v-on:submit.prevent="processSignUp">
                <img src="@/assets/logo.png" class="logo2">
                <br>
                <h1>Registro Exitoso</h1>               
            </form>    
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default { 
    data:function(){
        return{
            medico:{
                username:"",
                password:"",
                perfil:"",
                name:"",
                telefono:"",
                genero:""
            }
        }
    },
    methods:{
        processSignUp:function(){
            axios.post("https://hospital-g52-4-be.herokuapp.com/user/", this.user,{headers:{}})
            .then((result)=>{
                
            })
        }
    }
}
</script>

<style>

.signUp_user2 {
    margin: 0;
    padding: 5% 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.container_signUp_user2 {
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo2 {
    width: 50%;
}

.signUp_user h1 {
    color: #000000;
}

.signUp_user2 form {
    width: 70%;
    padding: 10%;
    font-family: "Poppins", sans-serif;
}

.signUp_user2 input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 8px;
    border: 1px solid #000000;
    font-family: "Poppins", sans-serif;
    border-radius: 25px;
}

.signUp_user2 button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #2379e9;
    border: 1px solid #E5E7E9;
    border-radius: 25px;
    padding: 10px 25px;
    margin: 20px 8px;
}

.signUp_user2 button:hover {
    color: #E5E7E9;
    background: rgb(10, 108, 116);
    border: 1px solid #000000;
}

.signUp_user2 select {
    width: 100%;
    border-radius: 25px;
    height: 40px;
    border: 1px solid #000000;
    margin: 10px 8px;
    padding: 10px 20px;
    font-family: "Poppins", sans-serif;
    }

</style>