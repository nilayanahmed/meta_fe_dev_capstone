import { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';

export default function BookingForm(props) {
    const style = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    };
    const availableTimes = props.availableTimes;
    const dispatch = props.reducer;
    const submitForm = props.submitForm;

    // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    // const [time, setTime] = useState(availableTimes.at(0));
    // const [guests, setGuests] = useState(1);
    // const [occasion, setOccasion] = useState('Birthday');

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "13:00",
            guests: 2,
            occasion: "Birthday"
        },
        onSubmit: (values) => {
            console.log('submitting ofrm')
            submitForm(values);
        },
        validationSchema: Yup.object({
          date: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
          time: Yup.string().email("Invalid email address").required("Required"),
          guests: Yup.number().min(1).max(10).required("Required"),
          occasion: Yup.string().required("Required")
        })
      });

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({type: 'fetch', date: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(guests);
        console.log(occasion);
        submitForm(e.target.value);
    }

    return (
        <div className="res-form">
            <h1>Reserve a Table</h1>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select
                  id="time"
                  name="time"
                  {...formik.getFieldProps("time")}>
                    {availableTimes.map((time) => <option key={time}> {time} </option>)}
                    </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Input type="number" placeholder="1" min="1" max="10" name="guests" id="guests" {...formik.getFieldProps("guests")} />
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <select id="occasion" name="occasion" {...formik.getFieldProps("occasion")} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
          </form>
        </div>
    );
}
