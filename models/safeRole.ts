import { Schema, model } from 'mongoose';


interface SafeRole {
    guildID: string;
    roleID: string;
    safeState: boolean;
};

const safeRole = new Schema<SafeRole>({
    guildID: { type: String, default: null },
    roleID: { type: String, default: null},
    safeState: { type: Boolean, default: false},
});

export default model("safeRole", safeRole)

