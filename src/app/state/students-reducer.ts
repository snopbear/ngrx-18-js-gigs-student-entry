import { StudentsRecords } from "./students-records";
import { createReducer } from "@ngrx/store";

export  const initState:ReadonlyArray<StudentsRecords> =[{
  name: "John Doe",
  city: "New York",
  country: "USA",
  subject: "JavaScript",
  passportDeclaration: "Yes", 
  fitnessDeclaration: "Yes",
  courseName: "JavaScript Gigs",
  date: "2022-09-01",
  state: "NY",
  street: "123 Main St", 
  email: "johndoe@example.com",
  phone: "123-456-7890",
  postalCode: 12345
}];

export const studentReducer=createReducer(initState,
    
);