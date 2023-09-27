import { classNames } from "shared/lib"
import cls from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom"
import React, { FC } from "react"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    to: string
    className?: string
    children?: React.ReactNode
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const { to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps } = props

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </Link>
    )
}
