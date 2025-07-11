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
      // console.log(token);
      
      try {
         let data =await axiosInstance.post("/add-bill",Payload,{
     headers:{
      "Authorization":`Bearer ${token}`
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
            "Authorization":`Bearer ${token}`
         }
      })
      // console.log(data);
      
      return data
     } catch (error) {
      return error
     }
    },
    updateBills:async (payload,token,id)=>{
        console.log(payload);
        
        try {
            let data=await axiosInstance.put(`/update-bill/${id}`,payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            // console.log(data);
            return data
            
        } catch (error) {
            // console.log(error);
            return error
        }
    },
    deleteBills:async (token,id)=>{
        console.log(token);
        
        try {
            let data=await axiosInstance.delete(`/delete-bill/${id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            // console.log(data);
            return data
            
        } catch (error) {
            // console.log(error);
            return error
        }
    }
}
export default empServices
//abcdefghijklmnopqrstuvwxyz
//