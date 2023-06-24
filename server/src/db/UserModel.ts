import { Schema, model, connect } from "mongoose";

import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    name: string;
    password: string;
    createdAt: Date;
}
    

const userSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;