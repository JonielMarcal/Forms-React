import React from 'react'
import FormLogo from './assets/form-logo.png'
import {useForm} from 'react-hook-form'
import './App.css';

function App() {
  const { register, handleSubmit, watch, formState:{ errors }} = useForm();

  const onSubmit = (userData) => {
    console.log(userData)
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="logo-forms"/>
      <label>
        Nome
        <input {...register("Name")}/>      
      </label>
      <label>
        Sobre Nome
        <input {...register("First Name")}/>      
      </label>
      <label>
        CPF
        <input {...register("CPF")}/>      
      </label>
      <label>
        Email
        <input {...register("Email")}/>      
      </label>
      <label>
        Numero Telefone
        <input type="tel" placeholder="(xx) xxxxx-xxxx" {...register("Phone Number")}/>      
      </label>
      <label>
       Senha
        <input {...register("Password")}/>      
      </label>

      <button type='submit'>Cadastrar Usuário</button>
   </form>
  );
}

export default App;
