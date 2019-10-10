import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

class Datagrid extends React.Component {
	constructor(props){
		super(props);
  }

  render() {	
    const {keyField, data, columns} = this.props;
    return (
         <BootstrapTable  keyField={keyField} data={ data }  columns={columns} striped hover condensed/>
    );
  }
}

export default Datagrid;