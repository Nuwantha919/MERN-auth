import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import e from 'express';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((error) => {
    console.log(error);
}
);

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.listen(3000, () => {
  console.log('Server is running aaon http://localhost:3000 !');
});

// app.get('/', (req, res) => {  // Define a route
//   res.json({                  // Send a JSON response
//     message: 'Welcome to the API' ,
//   });
// }
// );

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return  res.status(statusCode).json({ 
    success: false,
    error: message,
    statusCode
  });
  });