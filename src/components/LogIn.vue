<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
        <form v-on:submit.prevent="processLogInUser">
            <h1>Iniciar Sesión</h1>
            <label id="user_username">
                   <input type="text" v-model="user.username" placeholder="Usuario" required> 
            </label>
            <br>
            <label id="user_password">
                   <input type="password" v-model="user.password" placeholder="Contraseña" required> 
            </label>
            <br>
            <button type="submit">Iniciar Sesion</button>  
        </form>
        
        </div>
    </div>
</template>


<script>
    import jwt_decode from 'jwt-decode';
    import axios from 'axios';
    export default {
        data:function(){
            return{
                user:{
                    username:"",
                    password:"",
                    perfil:""
                }
            }
        },
        methods:{
            processLogInUser: function(){
                axios.post("https://hospitalhome-be.herokuapp.com/login/",this.user, {header:{}})
                .then((result)=>{
                    let dataLogIn={
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    } 
                
                    let userId= jwt_decode(dataLogIn.token_access).user_id.toString();

                    axios.get(`https://hospitalhome-be.herokuapp.com/ConsultaUsuario/${userId}`)
                    .then((result)=>{
                        console.log(result)
                        let perfil = result.data.perfil
                        this.$emit('completedLogIn', dataLogIn,perfil)  
                    }).catch((error)=>{
                        console.log(error)
                    });
                    
                }).catch((error)=>{
                    console.log(error)
                    if(error.response.status=="401")
                        alert("ERROR 401: Credenciales Incorrectas");
                }
                );
                
            }

        }
    }
    </script>
    

<style>

h1 {
    color: #000000
}

.logIn_user {
    height: 450px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.container_logIn_user {
    margin-top: 8rem;
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    width: 25%;
    height: 60%;
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
}

.logIn_user form {
    padding: 30px;
    width: 100%;
}

.logIn_user input {
    height: 30px;
    width: 80%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #bfbfbf;
}

.logIn_user button {
    width: 80%;
    height: 40px;
    color: #ffffff;
    background: #007bff;
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    padding: 10px 25px;
    margin: 5px 0;
    font-family: "Poppins", sans-serif;
}

.logIn_user button:hover {
    background: #025cf7;
    cursor: pointer;
}

</style>