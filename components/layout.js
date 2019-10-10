import Head from 'next/head';
// import Navbar from './Navbar';
import Sidebar from './sideBar';
const Layout = (props) => (
    <div>
        <Head>
            <title>C-Zentrix</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
            <link rel="stylesheet" href="../static/css/simple-sidebar.css"></link>
            {/* <link rel="stylesheet" href="https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css"></link> */}
        </Head>
        {/* <Navbar /> */}
        <div className="wrapper">
            <Sidebar />
            <div className="container">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
        <style jsx>{`
        .wrapper {
            display: flex;
            width: 100%;
            align-items: stretch;
        }
        `}
        </style>
    </div>
);

export default Layout;