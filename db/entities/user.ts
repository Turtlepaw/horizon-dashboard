import mongoose, { model, Schema } from "mongoose";

const baseSchema = new Schema({
    access_token: String,
    token_type: String,
    jwt_token: String
});

let modelThing;

if(mongoose.models.cookies_){
    modelThing = model(`cookies_`);
} else {
    modelThing = model(`cookies_`, baseSchema);
}

export const User = modelThing;

export interface UserOptions {
    access_token?: string;
    token_type?: string;
    jwt_token?: string;
}