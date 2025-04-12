# Instruções da Atividade (Pt-Br)

## OBSERVAÇÕES IMPORTANTES!

Antes de começar esta atividade, crie uma pasta com o seu nome e salve todos os arquivos de seu projeto nesta pasta.

Quando for salvar, não precisa compactar todo o projeto pois poderá tornar inviável a postagem, pode postar somente o arquivo App.js (COMPACTADO NO FORMATO ZIP) ou outro arquivo que você tenha alterado, bem como postar no github e enviar o link no AVA.

Lembre-se de executar o comando yarn em seu terminal para instalar as dependências do package.json em seu projeto. 

O React Js tem como objetivo principal, desenvolvimento de componentes, que podem ser reutilizados na composição de telas para o usuário.

Desenvolva uma aplicação React chamada "Gerenciador de Tarefas". O usuário deve ser capaz de adicionar tarefas, marcar tarefas como concluídas e filtrar tarefas por seu status.

## Requisitos

1 - Adicionando Tarefas: Deve haver um campo de entrada (input) onde os usuários podem digitar o nome da tarefa e um botão para adicionar essa tarefa à lista.

2 - Lista de Tarefas: As tarefas adicionadas devem ser listadas na tela, e ao lado de cada tarefa, deve haver uma caixa de seleção (checkbox) que o usuário pode marcar quando a tarefa for concluída.

3 - Filtragem: Adicione botões ou links para permitir que os usuários filtrem as tarefas por seu status: Todas, Concluídas e Pendentes.

4 - Estado Global: Use o contexto do React (useContext e useReducer ou useState) para gerenciar o estado global da aplicação.

## Dicas

Estruture seu aplicativo com, no mínimo, três componentes: App, ListaDeTarefas e Tarefa.

Utilize o hook useState para gerenciar o estado local de cada componente, e useContext combinado com useReducer ou um outro useState para gerenciar o estado global.

Lembre-se de atualizar o estado da lista de tarefas de forma imutável. Não modifique a lista original diretamente.

Adicione event listeners nos botões e campos de entrada para capturar eventos e alterar o estado conforme necessário.

# Activity Instructions (En)

## IMPORTANT OBSERVATIONS!

Before starting this activity, create a folder with your name and save all your project files in this folder.

When saving, you don't need to compress the entire project as it may make posting unfeasible. You can post only the App.js file (COMPRESSED IN ZIP FORMAT) or any other file you have changed, as well as post it on GitHub and send the link on AVA.

Remember to run the yarn command in your terminal to install the dependencies from package.json in your project.

React Js has as its main objective the development of components, which can be reused in the composition of screens for the user.

Develop a React application called "Task Manager". The user must be able to add tasks, mark tasks as completed, and filter tasks by their status.

## Requirements

1 - Adding Tasks: There should be an input field where users can type the task name and a button to add that task to the list.

2 - Task List: Added tasks should be listed on the screen, and next to each task, there should be a checkbox that the user can check when the task is completed.

3 - Filtering: Add buttons or links to allow users to filter tasks by their status: All, Completed, and Pending.

4 - Global State: Use React context (useContext and useReducer or useState) to manage the application's global state.

## Tips

Structure your application with at least three components: App, TaskList, and Task.

Use the useState hook to manage the local state of each component, and useContext combined with useReducer or another useState to manage the global state.

Remember to update the task list state immutably. Do not modify the original list directly.

Add event listeners to buttons and input fields to capture events and change the state as necessary.

# React Instructions

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
