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
        
    },
       loginUser:async(Payload)=>{
       try {
         let data=await axiosInstance.post("/login",Payload)
        return data
       } catch (error) {
        return error
       }

        
    },
    addbill:async (Payload,token) => {
      try {
         let data =await axiosInstance.post("/add-bill",Payload,{
     headers:{
      "Authorization":`Bearer${token}`
     }
         })
         // console.log(data);
         return data
         
      } catch (error) {
         return error
      }
    },
    allBills:async(token)=>{
     try {
      let data=await axiosInstance.get("/get-bill-by-user",{
         headers:{
            "Authorization":`Bearer${token}`
         }
      })
      // console.log(data);
      
      return data
     } catch (error) {
      return error
     }
    }
}
export default empServices