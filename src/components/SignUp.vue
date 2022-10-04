<template>

    <div class="signUp_user">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        
        <div class="container_signUp_user">
            <h2>Registro de Paciente</h2>
                     
            <form v-on:submit.prevent="processSignUp" >
                
                <input type="text" v-model="Paciente.username" placeholder="Usuario">
                <br>
                <input type="text" v-model="Paciente.medico" placeholder="Médico">

                <button type="submit">Registrarse</button>
            </form>
        </div>
    
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",
    data: function(){
        return {
            Paciente: {
                usuario: "",
                medico: ""
                }
            }
        },
    

    methods: {
        processSignUp: function(){
            axios.post(
                "https://hospitalhome-be.herokuapp.com/paciente/",
                this.Paciente,
                {headers: {}}

            ).then((result) => {
                    let dataSignUp = {
                        usuario: this.Paciente.username,
                        medico: this.Paciente.medico,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    this.$emit('completedSignUp', dataSignUp)

                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
        }
    }
}


</script>

<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        border: 1px solid #bfbfbf;
        border-radius: 25px;
        width: 25%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .signUp_user h2{
        color: #000000;
    }

    .signUp_user form{
    width: 70%;
    }

    .signUp_user input{
        height: 30px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;     
        border: 1px solid #bfbfbf;
        border-radius: 25px;
    }

    .signUp_user button{
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 40px;  
        color: #E5E7E9;
        background: #1371ab;
        border: 1px solid #E5E7E9;       
        border-radius: 25px;
        padding: 10px 25px;
        margin-top: 10px;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: #84b3d3;
        border: 1px solid #1371ab;
        border-radius: 25px;
        cursor: pointer;
    }

    .logo img{
        width: 300px;
        margin-right: 300px;       
        border-radius: 18px;
    }
    
</style>