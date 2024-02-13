import {Link} from "@inertiajs/react";
export default function HeaderLayout() {
    return (
        <header className="myHeader">
            <img className="p-4 h-full" src="images/sleppy.jpg" alt="logo"/>
            <h1 className="text-4xl font-bold">Proyecto de Laravel</h1>
            <div>
                <Link href={route('login')} className="btn glass text-white">Acceder</Link>
                <Link href={route('register')} className="btn glass">Registrarme</Link>
                {/*<form action="#" method="post">*/}
                {/*    <button className="btn glass text-white" type="submit">Logout</button>*/}
                {/*</form>*/}
            </div>
        </header>
    )
}
