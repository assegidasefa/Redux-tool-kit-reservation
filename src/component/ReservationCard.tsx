import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../app/features/custmerSlice";
import { removeReservation } from "../app/features/reservationSlices";
import { v4 as uuid } from "uuid";


interface ReservationCardType {
  name: string;
  index:number;
}

function ReservationCard({ name,index }: ReservationCardType) {
  const dispatch = useDispatch()
  return<div 
  onClick={()=>{
     dispatch(removeReservation(index))
     dispatch(addCustomer({
       id:uuid(),
       name,
       food:[]
     }))
  }}
  className="reservation-card-container">{name}</div>
}

export default ReservationCard;
