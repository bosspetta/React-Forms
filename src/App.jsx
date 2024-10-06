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

    // console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label className="form--label">
                    <span className="label">Email address</span>
                    <input
                        type="email"
                        className="form--input"
                    />
                </label>
                <label className="form--label">
                    <span className="label">Password</span>
                    <input
                        type="password"
                        className="form--input"
                    />
                </label>
                <label className="form--label">
                    <span className="label">Confirm password</span>
                    <input
                        type="password"
                        className="form--input"
                    />
                </label>

                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input
                        type="radio"
                        id="part-time"
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input
                        type="radio"
                        id="full-time"
                    />
                    <label htmlFor="full-time">Full-time</label>
                </fieldset>

                <label className="form--label">Your comments</label>
                <textarea />

                <label className="form--label">Your favorite color is…</label>
                <select
                    id="favColor"
                    title="Select your favorite color"
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
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}
