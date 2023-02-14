Quiz!

1. What is a React component?

son funciones que pueden recibir props como parametros y devuelven elementos react

2. What's wrong with this code?

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

el nombre del componente debe iniciar en mayuscula 'MyComponent'

3. What's wrong with this code?

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))

al llamar el componente se debe hacer sin parentesis y con una apertura y cierre de etiqueta html