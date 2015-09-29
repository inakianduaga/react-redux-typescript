import Pagination = require('../pagination/Pagination');
import OrderTable = require('./OrdersTable');

module Orders {

  export class Layout extends React.Component<any, any> {

    render() {
      return (
        <div>
          <Pagination {...this.props} />
          <OrderTable />
        </div>

      );
    }
  };

}

export = Orders;