import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

class Datagrid extends React.Component {
	constructor(props){
				super(props);

			}

  render() {
  	
    return (
         <BootstrapTable  keyField={this.props.keyField} data={ this.props.data }  columns={this.props.columns} striped hover condensed/>
          // <React.Fragment>
       
        
       
    );
  }
}

export default Datagrid;