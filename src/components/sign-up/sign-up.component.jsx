import { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [ name ] : value
        })

    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName })
            this.setState({ displayName:'', email: '', password: '', confirmPassword: ''})

        } catch (error) {
            console.error(error);
        }
        
    }
    render() {
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text'
                        label='Display Name'
                        value={this.state.displayName} 
                        handleChange={this.handleChange}
                        required 
                        />
                    <FormInput 
                        name='email' 
                        type='email'
                        label='Email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                        />
                    <FormInput 
                        name='password' 
                        type='password'
                        label='Password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required 
                        />
                    <FormInput 
                        name='confirmPassword' 
                        type='password'
                        label='Confirm Password'
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} 
                        required 
                        />
                        <div className='buttons'>
                        <CustomButton type="submit" >Sign Up</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
 }

 export default SignUp;