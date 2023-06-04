import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div>
        <h3 className="my-3">Click on the button to proceed </h3>
        <PayPalScriptProvider>
          <PayPalButtons
            style={{
              color: 'sliver',
              layout: 'horizontal',
              height: 49,
              tagline: false,
              shape: 'pill',
                      }}
                      createOrder={(data, action) => {
                          return action.order.create({
                              purchase_units: [
                                  
                                  {
                                      description: 'Purchase',
                                      amount:{
                                          value:"2000"
                                      }
                                  }
                              ]
                          })
                      }}
          />
        </PayPalScriptProvider>
      </div>
    </main>
  );
};

export default Checkout;
