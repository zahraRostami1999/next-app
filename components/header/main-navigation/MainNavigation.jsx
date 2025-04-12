import NavLink from "../nav-link/NavLink";
function MainNavigation() {
    return (
        <>
            <div className="flex justify-center gap-10 font-semibold">
                <div className="hover:text-yellow-300"><NavLink href="/meals">Browse Meals</NavLink></div>
                <div className="hover:text-yellow-300"><NavLink href="/community">Foodies Community</NavLink></div>
            </div>
        </>
    )
}

export default MainNavigation;