
import mongoose from "mongoose"
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
export const connectDB=async()=>{
   const conn= await  mongoose.connect(process.env.MONGODB_URI);
   if(conn){
    console.log("Db connected successfully..........");
   }
}
