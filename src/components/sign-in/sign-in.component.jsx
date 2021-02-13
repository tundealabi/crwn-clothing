import { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [ name ] : value
        })

    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                        />
                    <FormInput 
                        name='password' 
                        type='password'
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required 
                        />
                        <div className='buttons'>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >sign in with google</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
 }

 export default SignIn;