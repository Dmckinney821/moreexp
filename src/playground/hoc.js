
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuth ?(
            <p>you are authenticated</p>
        ): (
            <p>Please log in to view</p>
        ) }
        <WrappedComponent {...props} />
        </div>
    )
}
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is private info so don't share</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }
// const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='this are the detail'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info='this are the detail'/>, document.getElementById('app'))