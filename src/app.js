console.log('App js is running')

// const app = {
//     title: 'Indecision App',
//     subtitle: 'This is some info',
//     options: []
// }
const app = {
    title: 'Visibility Toggle',
    details: 'Hey. These are some details you can see now'
}
// const onFormSubmit = (e) => {
//     e.preventDefault();
    
//     const option = e.target.elements.option.value;
//     console.log(option)
//     if(option){
//         app.options.push(option)
//         e.target.elements.option.value = ''
//     }
//     render()
// }
// const whipArray = (option) => {
//     app.options = []
//     render()
// }
// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option)
//     console.log(randomNum)
// }
const appRoot = document.getElementById('app')
// const numbers = [55, 101, 1000]
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
//             <button onClick={whipArray}>Remove All</button>
//             <ol>
//             {
//                 app.options.map((option) => <li key={option}>Option: {option}</li>)
//             }
//             </ol>
//             <form onSubmit={onFormSubmit}> 
//                 <input type='text' name='option'/>
//                 <button>Add options</button>
            
//             </form>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }
// render()
const showDeets = () => {
    visibility = !visibility;
    render()
}
let visibility = false;
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <br/>
            <button onClick={showDeets}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <p>{app.details}</p>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()