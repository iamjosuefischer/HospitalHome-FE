<template>
    <div class="signUp_user">
    <div class="container_signUp_user">
    <h2>Registrarse</h2>
    <form v-on:submit.prevent="processSignUp" >
    <input type="text" v-model="user.username" placeholder="Nombre de Usuario">
    <br>
    <br>
    <input type="password" v-model="user.password" placeholder="Contraseña">
<br>
<br>
<input type="text" v-model="user.name" placeholder="Nombre">
<br>
<br>
<input type="email" v-model="user.email" placeholder="Correo Electronico">
<br>
<br>
<input type="number" v-model="user.account.balance" placeholder="Celular">
<br>
<br>
<button type="submit">Registrate</button>
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
    user: {
    username: "",
    password: "",
    name: "",
    email: "",
    account: {
    lastChangeDate: (new Date()).toJSON().toString(),
    balance: 0,
    isActive: true
    }
    }
    }
    },
    methods: {
        processSignUp: function(){
axios.post(
"https://hospitalhome-be.herokuapp.com/user/",
this.user,
{headers: {}}
)
.then((result) => {
let dataSignUp = {
username: this.user.username,
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
    border-radius: 12px;
   

    }
.container_signUp_user {
border: 3px solid #5372F0;
border-radius: 80px;
width: 25%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 12px;


}

.signUp_user h2
{
color: #5372F0;
 border-radius: 12px;
}.signUp_user form{
width: 70%;
}
.signUp_user input{
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px0;
border: 1px solid #5372F0;
border-radius: 12px;
font: oblique bold 100% cursive;



}
.signUp_user button
{
width: 100%;
height: 40px;
color: #E5E7E9;
background: #5372F0;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 25px;
margin: 5px0 25px0;
border-radius: 12px;
font: oblique bold 100% cursive;

}
.signUp_user button:hover
{
color: #E5E7E9;
background: crimson;
border: 1px solid #5372F0;

}
</style>