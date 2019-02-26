import React from "react";

class Login extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <input type="email" placeholder="Enter your email" name="email" required autoFocus/>
                    <br/>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required autoFocus/>
                    <br/>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;