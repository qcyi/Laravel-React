export default function NavLayout() {
    return (
        <nav className="h-10v bg-nav flex flex-row space-x-3 p-3 justify-center">
            <a href="#" className="btn btn-neutral">Home</a>
            <a href="#" className="btn btn-primary">About</a>
            <a href="#" className="btn btn-info">Contacta</a>
            <a href="#" className="btn">Proyectos</a>
            <a href="#" className="btn">Alumnos</a>
            <a href="profesores" className="btn">Profesores</a>
        </nav>
    )
}
