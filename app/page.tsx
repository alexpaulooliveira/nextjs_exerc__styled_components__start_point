"use client"

import React, { useState } from 'react'
// import { GlobalStyle, STitle, SForm, SInputRadio, SInput, STextArea, SButton, SFieldSet, SError } from './StyledComponents'
// Crie um arquivo que faça o importe acima funcionar

function Home() {

  // Codificar gerenciamento de estado, e eventos, aqui

  return <>  
           <GlobalStyle/>

           <SForm onSubmit={ e => handleSubmit(e) }>
             <STitle>Formulário de Contato</STitle>
             <SError><p> {error} </p></SError>

             <label htmlFor="name">Nome</label>
             <SInput type="text" name="name" value={state.name}  onChange={ e => setPartOfState(e) } />

             <label htmlFor="email">E-Mail</label>
             <SInput type="email" name="email" value={state.email} onChange={ e => setPartOfState(e) } />

             <SFieldSet>
               <legend>Sexo</legend>

               <label>
                 <SInputRadio type="radio" value="female" name="gender" checked={state.gender === 'female'} onChange={ e => setPartOfState(e) } />
                 Feminino
               </label>

               <label>
                 <SInputRadio type="radio" value="male" name="gender" checked={state.gender === 'male'} onChange={ e => setPartOfState(e) } />
                 Masculino
               </label>                 
             </SFieldSet>

             <label htmlFor="message">Mensagem</label>
             <STextArea name="message" value={state.message} onChange={ e => setPartOfState(e) } />                          
                          
             <SButton fontColor='#9A76B3' backgroundColor='#CCF' center={true}  type="submit"> Enviar Mensagem </SButton>                           
           </SForm>                       
         </>  
}

export default Home;