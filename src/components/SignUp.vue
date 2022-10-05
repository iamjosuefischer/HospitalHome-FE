<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <form v-on:submit.prevent="processSignUp">
                <img src="@/assets/logo.png" class="logo1">
                <h1>Registrar Usuario</h1>
        
                <label id="user_username">
                    <input type="text" v-model="user.username" placeholder="Usuario" required>
                </label>
                <label id="user_password">
                    <input type="password" v-model="user.password" placeholder="Contraseña" required>
                </label>
                <label id="user_name">
                    <input type="text" v-model="user.name" placeholder="Nombre completo" required>
                </label>
                <label id="user_perfil"><span class="span_signup">Perfíl</span>
                    <br>
                    <select id="cajon" v-model="user.perfil">
                        <option>Paciente</option>
                        <option>Familiar</option>
                        <option>Medico</option>
                    </select>
                </label>
                <br>
                <label id="user_telefono">
                    <input type="text" v-model="user.telefono" placeholder="Teléfono" required>
                </label>
                <label id="genero"><span class="span_signup">Género</span>
                    <br>
                    <select id="cajon" v-model="user.genero">
                        <option>Masculino</option>
                        <option>Femenino</option>
                    </select>
                </label>
                <button type="submit">Registrar Usuario</button>
            </form>    
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default { 
    data:function(){
        return{
            user:{
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
            axios.post("https://hospitalhome-be.herokuapp.com/user/", this.user,{headers:{}})
            .then((result)=>{
                localStorage.setItem( "regPerfil",result.data.perfil)
                alert("Registro en progreso")
                this.$router.push({name:"signUp2"});

            })
        }
    }
}
</script>

<style>

.signUp_user {
    margin: 0;
    padding: 5% 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_signUp_user {
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo1 {
    width: 50%;
    padding-left: 6rem;
    padding-bottom: 1rem;
}

.signUp_user h1 {
    color: #000000; 
}

h1 {
    text-align: center;
}

.span_signup {
    padding-left: 10px;
    font-size: 14px;
}

.signUp_user form {
    width: 70%;
    padding: 10%;
    font-family: "Poppins", sans-serif;
}

.signUp_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 8px;
    border: 1px solid #bfbfbf;
    font-family: "Poppins", sans-serif;
    border-radius: 25px;
}

.signUp_user button {
    width: 100%;
    height: 45px;
    color: #ffffff;
    background: #007bff;
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    padding: 10px 25px;
    margin: 20px 8px;
}

.signUp_user button:hover {
    background: #025cf7;
    cursor: pointer;
}

.signUp_user select {
    width: 100%;
    border-radius: 25px;
    height: 40px;
    border: 1px solid #bfbfbf;
    margin: 10px 8px;
    padding: 10px 20px;
    font-family: "Poppins", sans-serif;
}

</style>