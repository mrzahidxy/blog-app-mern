
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
    return (
        <div className='w-screen h-screen'>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout