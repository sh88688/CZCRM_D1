import Link from 'next/link';

const Sidebar = () => (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link href="/"><a className="list-group-item list-group-item-action bg-light">Ticket Details</a></Link>
        <Link href="./create_ticket"><a className="list-group-item list-group-item-action bg-light">Create Ticket</a></Link>
        {/* <Link href="./update_ticket"><a className="list-group-item list-group-item-action bg-light">Update Ticket</a></Link> */}
      </div>
    </div>
);

export default Sidebar;