import firebaseApp from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

import Admin from "./Admin";
import User from "./User";



const Home = ({ user }) => {
    const auth = getAuth(firebaseApp);

    console.log("user en home", user);
    return (
        <div className="container-home">
            <h1>Home</h1>
            <button className="btn-logout"
                variant="dark" onClick={() => signOut(auth)}>
                <img className="icon-logout"
                    src="/assets/icons8-charles-montgomery-burns-48.png"
                    alt="Log out"
                />
                <p className="m-b">Log out</p>
            </button>

            {user.role === "admin" ? (
                <Admin user={user} />
            ) : (
                <User user={user} />
            )}
        </div>
    );
};

export default Home;