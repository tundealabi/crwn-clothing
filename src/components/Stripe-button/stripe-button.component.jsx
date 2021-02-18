import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IMEHnIl3lXsi53jptyVoH1ikEEjahAP4wqGLYxKRvNCldaHcblGowMdgjRQaGRCJCdPIv5WGZTasRd5hugdm3Zl004aRBy7xZ';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }
    
    return (
        <StripeCheckout 
         label='Pay Now' 
         name='CRWN Clothing Ltd.' 
         billingAddress 
         shippingAddress 
         image='https://svgshare.com/i/CUz.svg' 
         description={`Your total is $${price}`} 
         amount={priceForStripe} 
         panelLabel='Pay Now' 
         token={onToken} 
         stripeKey={publishableKey}
         />
    )

}

export default StripeCheckoutButton;