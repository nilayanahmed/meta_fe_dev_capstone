import { Image, VStack } from "@chakra-ui/react";
import thanks from './static/thanks.jpg'

export default function ConfirmedBooking() {
    const style = {
        padding: '10px'
    };
    return (
        <div className="confirmed" style={style}>
            <VStack>
                <h1>Booking Confirmed !</h1>
                <Image src={thanks} alt="Thank you" />
            </VStack>
        </div>
    );
}