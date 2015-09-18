var mocker = require('casual');
var fs = require('fs');
var path = require('path');

function generateMockOrderData(count) {
  var orders = [];
  for (var index = 0; index < count; index++) {
    orders.push({
        id: mocker.integer(1, 100000),
        firstName: mocker.first_name,
        lastName: mocker.first_name,
        email: mocker.email,
        orderNumber: mocker.integer(1, 100000),
        amount: mocker.integer(10, 1000),
        currency: mocker.random_element(['EUR', 'USD', 'CHF']),
        taxRate: mocker.integer(10, 22),
        items: (function() {
          return [1, 2, 3].map(function () {
              return {
                sku: mocker.word,
                name: mocker.title,
                quantity: mocker.integer(1, 99),
                amount: mocker.integer(1, 150),
            }
          });
        })(),
        shipping: {
            provider: mocker.random_element(['dhl', 'fedex', 'ups']),
            type: mocker.random_element(['parcel', 'express', 'overnight']),
            amount: mocker.integer(1, 15),
        },
        discount: {
            'name': mocker.word,
            'amount': mocker.integer(1, 50),
            'isPercent': true
        }
    });
  }

  return orders;
};

fs.writeFileSync(path.join(__dirname, 'mocks.json'), JSON.stringify(generateMockOrderData(100), null, '\t'));
