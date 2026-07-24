import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const {
  MONGODB_URI,
  INITIAL_ADMIN_NAME,
  INITIAL_ADMIN_EMAIL,
  INITIAL_ADMIN_PASSWORD,
} = process.env;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI");
}

if (
  !INITIAL_ADMIN_NAME ||
  !INITIAL_ADMIN_EMAIL ||
  !INITIAL_ADMIN_PASSWORD
) {
  throw new Error(
    "Missing INITIAL_ADMIN_* environment variables."
  );
}

await mongoose.connect(MONGODB_URI, {
  dbName: process.env.MONGODB_DB_NAME,
});

const AdminSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const Admin =
  mongoose.models.Admin ||
  mongoose.model("Admin", AdminSchema);

const existing = await Admin.findOne({
  email: INITIAL_ADMIN_EMAIL,
});

if (existing) {
  console.log("✅ Admin already exists.");
  process.exit(0);
}

const hashedPassword = await bcrypt.hash(
  INITIAL_ADMIN_PASSWORD,
  12
);

await Admin.create({
  name: INITIAL_ADMIN_NAME,
  email: INITIAL_ADMIN_EMAIL,
  password: hashedPassword,
  role: "super_admin",
});

console.log("✅ Admin created successfully.");
console.log("Email:", INITIAL_ADMIN_EMAIL);

process.exit(0);