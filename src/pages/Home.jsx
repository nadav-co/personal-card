import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom'

export function Home() {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <section className="home-page">
            <div>
                <h1>Task Management Have Never Been Easier</h1>
            </div>
            <Link to="/card/edit">Let's Start!</Link>
            <GoogleLogout
                clientId="117899711408-bve78v8sl6hni1o7aiu7lcbvbvoodt1a.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={responseGoogle}
                onFailure={responseGoogle}
            />

        </section >
    )
}








