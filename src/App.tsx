import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import "./App.css";
import { addReservation } from "./app/features/reservationSlices";
import { RootState } from "./app/store";
import CustomerCard from "./component/CustomerCard";
import ReservationCard from "./component/ReservationCard";



function App() {
  const dispatch = useDispatch()
  const [reservationNameInput,setReservationNameInput] = useState("")
  const reservations= useSelector((state:RootState)=>state.reservations.value)
  const customers= useSelector((state:RootState)=>state.customers.value)
  const handleReservationNameInput=()=>{
  
  if(!reservationNameInput) return;
  dispatch(

    addReservation(reservationNameInput)
  )
  setReservationNameInput("")
}
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name,index)=>{
                      return <ReservationCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            
             <input value={reservationNameInput} onChange={(e)=>setReservationNameInput(e.target.value)} />
                <button onClick={handleReservationNameInput}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer)=>{
            return<CustomerCard id={customer.id} food={customer.food} name={customer.name}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
