import {Link} from "@inertiajs/react";
import {usePage} from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";


export default function HeaderLayout() {

    const user = usePage().props.auth.user;
    const handleLogout=()=>{
        Inertia.post(route("logout"));
    }

    return (
        <header className="myHeader">
            <img className="p-4 h-full" src="images/sleppy.jpg" alt="logo"/>
            <h1 className="text-4xl font-bold">Proyecto de Laravel</h1>
            {user && (
                <div>
                    <span className="badge mr-3">{user.name}</span>
                    <Link onClick={handleLogout} className="btn glass text-white" type="submit">Logout</Link>
                </div>
            )}
            {!user && (
                <div>
                    <Link href={route('login')} className="btn glass text-white">Acceder</Link>
                    <Link href={route('register')} className="btn glass">Registrarme</Link>
                </div>
            )}

        </header>
    )
}
