import { classNames } from "shared/lib"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={classNames(cls.links, {}, [])}>
            <AppLink to={"/"}>MainPage</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>AboutPage</AppLink>
        </div>
    </div>
)
