type LayoutProps = {
    name: string 
    messageCompte?: number
    isLoggedIn: boolean
}


export const Layout = (props: LayoutProps) => {
    const {messageCompte = 0} = props
    return (
        <div>
            <h1>{
                props.isLoggedIn ?` Weclome ${props.name}! you have ${props.messageCompte} unread msg`
                : `weclom  pingpong`}
            </h1>
        </div>
    );
}

export default Layout;