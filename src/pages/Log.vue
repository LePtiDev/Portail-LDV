<template>
  <div class="container">
    <div class="image"></div>
    <div class="login">

      <img src="../assets/LogoPoleBlanc.png" alt="">


      <!-- formulaire -->
      <form action="/Dashboard">
        <fieldset>
          <legend>Identifiant LeoID</legend>
          <input class="input" type="email" name="user_email" id="">
        </fieldset>

        <fieldset>
          <legend>Mot de passe</legend>
          <input class="input" type="password" name="user_password" id="">
        </fieldset>

        <input class="submit" type="submit" value="Connexion">
        
      </form>

      <!-- oublie de mot de passe -->

      <a class="forgot" href="#">Changement de votre mot de passe LeoID</a>
      

      <!-- text info -->

      <p class="info">En cas de perte de votre <b>mot de passe LeoID</b> : <br>
         <br> - Si vous êtes étudiant, apprenant ou intervenant, cliquez ici pour réinitialiser votre mot de passe
         <br> - Si vous êtes salarié (ou dans tout autre cas), contactez le support informatique si@devinci.fr
      </p>

      <p class="copy">ALV Online - 2020 © Léonard de Vinci</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Log',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .image{
    height: 100vh;
    width: calc(100vw - 400px);
    background-image: url("../assets/accueil.jpg");
    background-size: auto 100%;
    background-position: right;
  }

  .login{
    height: 100vh;
    width: 400px;
    background-color:#1C203A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 0px 0px;
  }

  /* style du form */

  form{
    margin: 50px 0px 50px 0px;
  }

  .input{
    background-color: transparent;
    border: none;
    width: 275px;
    margin: -5px 12.5px 10px 12.5px;
    font-size: 16px;
    color: white;
  }

  fieldset{
    color: white;
    border: white solid 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  legend{
    margin: 0px 10px 6px 10px;
    padding: 5px;
    font-size: 12px;
  }

  .submit{
    width: 150px;
    height: 35px;
    background-color: white;
    color: #1C203A;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
  }

  /* style du changement de mot de passe */

  .forgot{
    font-size: 14px;
    color: white;
  }

  .info{
    width: 300px;
    color: white;
    margin: 40px 0px 120px 0px;
    font-size: 15px;
  }

  .copy{
    color: #8E909D;
    font-size: 12px;
  }

  @media screen and (max-width: 450px){

    .image{
      display: none;
    }

    .login{
      width: 100vw;
    }
  }
</style>
