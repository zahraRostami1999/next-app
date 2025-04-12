import Logo from "../logo/logo"
import MainNavigation from "../main-navigation/MainNavigation"


function MainHeader() {
    return (
        <>
            <div className="flex bg-red-500 px-10 py-3">
                <div className="w-1/4">
                    <Logo />
                </div>
                <div className="w-1/2">
                    <MainNavigation />
                </div>
            </div>
        </>
    )
}

export default MainHeader
