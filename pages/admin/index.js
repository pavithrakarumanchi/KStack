import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/link';

const Admin = ({ user }) => (
    <Layout>
        <h1>Admin Dashboard</h1>
        <br />
        <div className="row">
            <div className="col-md-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button href="/admin/category/create" className="nav-link btn-info mb-4">Create category</button>

                    </li>
                    <li className="nav-item">
                        <Link href="/admin/category/read">
                            <button className="nav-link btn-info mb-4">All Categories</button>
                        </Link>
                    </li>
                     <li className="nav-item">
                        <Link href="/admin/link/read">
                            <button className="nav-link btn-info mb-4">All Links</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/profile/update">
                            <button className="nav-link btn-info mb-4">Profile Update</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-8"></div>
        </div>
    </Layout>
);

export default withAdmin(Admin);
