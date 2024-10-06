import { useState } from "react"

export default function App() {

    /*
        Challenge: Connect the form to local state
        1. Create a state object to store the 7 values
           we need to save.
        2. Create a single handleChange function that can
           manage the state of all the inputs and set it
           up correctly.
        3. When the user clicks "Sign up", check if the
           password & confirmation match each other. If so,
           log "Successfully signed up" to the console. If
           not, log "Passwords do not match" to the console.
        4. Also when submitting the form, if the person
           checked the "newsletter" checkbox, log "Thanks
           for signing up for our newsletter!" to the console.
    */

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        employment: '',
        comments: '',
        favColor: '',
        okayToEmail: false
    })

    // console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log('Successfully signed up!')
        } else {
            console.log('Passwords do not match.')
            return
        }
        if (formData.okayToEmail) {
            console.log('Thanks for signing up for our newsletter!')
        }
    }

    function handleChange(event) {
        console.log(event)
        const {type, name, value, checked} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label className="form--label">
                    <span className="label">Email address</span>
                    <input
                        required
                        type="email"
                        className="form--input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label className="form--label">
                    <span className="label">Password</span>
                    <input
                        required
                        type="password"
                        className="form--input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label className="form--label">
                    <span className="label">Confirm password</span>
                    <input
                        required
                        type="password"
                        className="form--input"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </label>

                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        required
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === 'unemployed'}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input
                        required
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === 'part-time'}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input
                        required
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === 'full-time'}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                </fieldset>

                <label className="form--label">Your comments</label>
                <textarea
                    required
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                />

                <label className="form--label">Your favorite color is…</label>
                <select
                    required
                    id="favColor"
                    title="Select your favorite color"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                >
                    <option value="">-- select --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}
