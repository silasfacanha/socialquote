
import mongoose, { mongo } from "mongoose";

export interface IUser extends mongoose.Document {
    name: string;
    password: string;
    createdAt: Date;
}


const userSchema: mongoose.Schema= new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;