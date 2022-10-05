<template>
  <div id="app" class="app">
    <div class="header">
      <img src="@/assets/logo.png" class="logo">
      <div class="buttons">
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
        <button v-if="is_auth" v-on:click="loadConsulPer">Información Personal</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="perfil=='Medico'" v-on:click="loadSignUp">Registrar Personal</button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
      </nav>
      </div>
    </div>

  </div>
  <div class="main-component">
    <router-view 
      v-on:completedLogIn= "completedLogIn"
      v-on:completedSignUp= "completedSignUp"
      v-on:logOut="logOut"
      ></router-view>
  </div> 
</template>

<script>
  export default({
  
    data: function(){
        return{
          is_auth: false,
          perfil: "",
        }
    },
  
    methods:{
      veryAuth: function(){
        this.is_auth= localStorage.getItem("isAuth") || false;
        this.perfil = localStorage.getItem("perfil")

      if(this.is_auth== false)
        this.$router.push({name:"logIn"});
      else
        this.$router.push({name:"home"});
      },  
      loadLogIn: function(){
          this.$router.push({name:"logIn"})
      },
      loadSignUp: function(){
          this.$router.push({name:"signUp"})
      },
      completedLogIn: function(data,perfil){
          localStorage.setItem("isAuth", true)
          localStorage.setItem("perfil", perfil)
          localStorage.setItem("username", data.username);
          localStorage.setItem("token_access", data.token_access);
          localStorage.setItem("token_refresh", data.token_refresh);
          alert("¡Bienvenido de nuevo a Hospital Home!");
          this.veryAuth();
      },
      completedSignUp: function(data){
          alert("Registro Exitoso");
      },
      logOut:function(){
        localStorage.clear();
        alert("Sesion cerrada, vuelve pronto");
        this.veryAuth();
      },
      loadHome:function(){
        this.$router.push({name:"home"});
      },
      loadConsulPer:function(){
        this.$router.push({name:"consultPer"});
      },
      verySalud:function(){
        load =  true;
      }
    },
  
    created:function(){
      this.load= localStorage.getItem("load") || false;
    }
  })
  </script>


<style>

* {
  font-family: "Poppins", sans-serif;
}

body {
    margin: 0 0 0 0; 
  }

.header {
    margin: 0;
    padding: 0;
    width:100%;
    min-height: 80px;
    background-color: #ffffff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 5%;
    padding-left: 2rem;
  }

  .buttons {
    margin: 0;
    padding: 0% 2%;
    width:96%;
    height: 10vh;
    min-height: 10px;
    color: #007bff;
    display: flex;
    justify-content: flex-end;
    align-items:center;
  }

.buttons nav button {
    color: #ffffff;
    background: #007bff;
    border: 1px solid #bfbfbf;
    border-radius: 25px;
    padding: 10px 20px;
    margin-left: 10px;
  }

.buttons button:hover {
  background: #025cf7;
  cursor: pointer;
}

::-webkit-scrollbar {
    width: .60rem;
    background-color: transparent;
    border-radius: .5rem;
}

::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: gray;
}
</style>