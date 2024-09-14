export default function Navbar() {
    return (
        <nav className="w-full h-12 bg-black flex justify-between items-center px-3">
            <a href="/">My Website</a>
            <div className="nav-list">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
            </div>
        </nav>
    )
}