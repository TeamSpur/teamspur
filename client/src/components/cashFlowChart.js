import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'semantic-ui-react';

class CashFlowChart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-md-6">
      <h3>Cash Flow</h3>
      <Table celled className='cash_flow_table'>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Cash Flow</Table.HeaderCell>
             <Table.HeaderCell>${82436-63592}</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
         <Table.Row>
           <Table.Cell>Income</Table.Cell>
           <Table.Cell>$82436</Table.Cell>
         </Table.Row>
         <Table.Row>
           <Table.Cell>Expenses</Table.Cell>
           <Table.Cell>$63592</Table.Cell>
         </Table.Row>
         </Table.Body>
         <Table.Footer>
         <Table.Row>
           <Table.HeaderCell colSpan='3'>
           </Table.HeaderCell>
         </Table.Row>
         </Table.Footer>
       </Table>
      </div>
    )
  }
}

export default CashFlowChart;