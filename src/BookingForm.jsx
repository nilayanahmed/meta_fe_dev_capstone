import { useFormik } from "formik";
import {
  Box,
  Button ,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';

export default function BookingForm(props) {
    const availableTimes = props.availableTimes;
    const dispatch = props.reducer;
    const submitForm = props.submitForm;

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
          date: Yup.string().required("Required"),
          time: Yup.string().required("Required"),
          guests: Yup.number().min(1).max(10).required("Required"),
          occasion: Yup.string().required("Required")
        })
      });

    const handleDateChange = (e) => {
        dispatch({type: 'fetch', date: e.target.value});
    };

    return (  
        <div className="res-form">
          <Box>
          <VStack gap={4}>
            <Heading as="h1">
              Reserve a Table
            </Heading>
            <form role="form" aria-label="reservation-form" onSubmit={formik.handleSubmit}>
              <VStack>
              <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input id="date" name="date" type="date" {...formik.getFieldProps("date")} data-testid="date"
                  onBlur={e => handleDateChange(e)}/>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select placeholder="Select Time" id="time" name="time" {...formik.getFieldProps("time")} data-testid="time">
                    {availableTimes.map((time) => <option key={time}> {time} </option>)}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.guests && formik.touched.guests > 0}>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Input type="number" placeholder="1" min="1" max="10" name="guests" id="guests" {...formik.getFieldProps("guests")} data-testid="guests" />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Your message</FormLabel>
                <Select placeholder="Select Occasion" id="occasion" name="occasion" {...formik.getFieldProps("occasion")} data-testid="occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>
              <Button id="res-submit" type="submit" aria-label="submit" colorScheme="purple" width="full" data-testid="res-submit">
                Submit
              </Button>
              </VStack>
          </form>
          </VStack>
          </Box>
        </div>
    );
}
