import axios from "axios"
import axiosInstance from "../Axiosinstance/Instance";

let empServices={
    regiUser:async(Payload)=>{
       try {
         let data=await axiosInstance.post("/register",Payload)
        return data
       } catch (error) {
        return error
       }
        
    }
}
export default empServices