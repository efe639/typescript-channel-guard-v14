import { Schema, model } from 'mongoose';


interface SafeUser {
    guildID: string;
    memberID: string;
    safeState: boolean;
};

const safeUser = new Schema<SafeUser>({
    guildID: { type: String, default: null },
    memberID: { type: String, default: null},
    safeState: { type: Boolean, default: false},
});

export default model("safeUser", safeUser)

