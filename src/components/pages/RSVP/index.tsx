import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import axios from "axios";
import {Reservation} from "../../../types/Reservation";
import GuestForm from "../../subcomponents/GuestForm";
import {Guest} from "../../../types/Guest";

type BooleanChecker = {
  plusOneChecked: boolean;
  hotelChecked: boolean;
};

const RSVP = () => {
  const [guests, setGuests] = React.useState<Guest[]>([
    {
      guestName: '',
      guestFoodChoice: '',
    },
  ])
  const [booleanChecker, setBooleanChecker] = React.useState<BooleanChecker>({
    plusOneChecked: false,
    hotelChecked: false,
  });
  const [reservation, setReservation] = React.useState<Reservation | null>(null);

  const addGuest = (e: Event | any) => {
    var newState:Guest[] = guests;
    newState.push({
      guestName: '',
      guestFoodChoice: '',
    });
    setGuests([...newState]);
    console.log(guests);
  }

  const changeChildren = (e: Event | any) => {
    setReservation({ ...reservation, children: e.target.value });
  };

  const changeBedsNeeded = (e: Event | any) => {
    setReservation({ ...reservation, bedsNeeded: e.target.value });
  };

  const changeHotelCheckbox = (e: Event | any) => {
    setBooleanChecker({ ...booleanChecker, hotelChecked: e.target.checked });
  };

  const submitData = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/weddingguestrsvp", reservation, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("Made it here!");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Col md={6}>
        <Row>
          <Card className="card">
            <header className="headertitle">RSVP</header>
            <Form onSubmit={submitData}>
              { guests.map((guest, index) => {
                return(
                    <GuestForm key={index} />
                    )
              })}
              
              <Form.Label className="name">Add People In Your Party (Plus 1s And Children Aged 12+)</Form.Label>
              <Button size="sm" id="addperson" onClick={addGuest} variant="outline-primary">+</Button>{' '}

              <Form.Group className="children" controlId="Children">
                <Form.Label> Bringing Young Children?</Form.Label>
                <Form.Control
                  max="5"
                  min="0"
                  type="number"
                  placeholder="Number of Young Children (Aged 0-11) You're Bringing?"
                  value={reservation?.children}
                  onChange={changeChildren}
                />
                <Form.Text className="text-muted">
                  Children Will Receive Chicken Fingers As Their Dinner.
                </Form.Text>
              </Form.Group>

              <Form.Group className="hotel" controlId="HotelCheckBox">
                <Form.Check
                  type="checkbox"
                  label="Should We Reserve A Hotel Room(s) For You?"
                  onChange={changeHotelCheckbox}
                />
              </Form.Group>

              {booleanChecker.hotelChecked && (
                <Form.Group className="hotelbeds" controlId="Beds">
                  <Form.Label></Form.Label>
                  <Form.Control
                    max="4"
                    min="0"
                    type="number"
                    placeholder="Number of Beds?"
                    value={reservation?.bedsNeeded}
                    onChange={changeBedsNeeded}
                  />
                </Form.Group>
              )}
              <Button
                id="button-group"
                variant="outline-primary"
                type="submit"
                onClick={submitData}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Row>
      </Col>
      <Col></Col>
    </div>
  );
};

export default RSVP;
