import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import AddBill from "../components/user/main/addbill/AddBill";
import FilterBills from "../components/user/main/filterbills/FilterBills";
import Items from "../components/user/main/addbill/Items";
import UpdateBills from "../components/user/main/updatebills/UpdateBills";
import ViewBills from "../components/user/main/viewBills/ViewBills";
import PrivateRoutes from "../components/helper/PrivateRoutes";

let routes=createBrowserRouter(
    [
        {
path:"/register",
element:<Register></Register>
        },
        {
path:"/",
element:<Login></Login>
        },
         {
path:"/home",
element:<PrivateRoutes><Main></Main></PrivateRoutes>,
children:[
        {
               index:true,
              element:<Home></Home>
        },
        {
                path:"about",
                element:<About></About>
        },
        {
               path:"addbill",
              element:<AddBill></AddBill>,
       
       
        },
        {
               path:"filterbills",
               element:<FilterBills></FilterBills>
        },
        {
                path:"updatebills",
                element:<UpdateBills></UpdateBills>
        },
        {
                path:"viewBills",
                element:<ViewBills></ViewBills>
        }
       
       

]
        }
    ]
)

export default routes