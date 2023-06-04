import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  let total;
  let getTotal = cartItem.map((item, index) => {
    return item.price * item.quantity;
  });
  if (getTotal.length > 0) {
    total = getTotal.reduce((acc, item) => {
      return acc + item;
    });
  }
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };
  if (paidFor) {
    alert('thank you for your purchase');
  }
  if (error) {
    alert('Error: ' + error);
  }
  return (
    <main className="flex justify-center items-center h-[100vh] relative -z-0">
      <div>
        <h3 className="my-3">Click on the button to proceed </h3>
        <PayPalScriptProvider
          options={{
            'client-id':
              'Acj5kjFQ7y66qJuwuObNFbgPyU8mh10lddnv1Z_a9TKa_cvZJbZiQGIvgfcn5ERj4zQCG-vlYWSC-SaW',
          }}
        >
          <PayPalButtons
            onClick={(data, action) => {
              const hasAlreadyBought = false;
              if (hasAlreadyBought) {
                setError('has already bought!');
                return action.reject();
              } else {
                return action.resolve();
              }
            }}
            createOrder={(data, action) => {
              return action.order.create({
                purchase_units: [
                  {
                    description: 'Purchase',
                    amount: {
                      value: total,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, action) => {
              const order = await action.order.capture();
              console.log('Order', order);
              handleApprove(data.orderID);
            }}
            onError={(error) => {
              setError(error);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </main>
  );
};

export default Checkout;
