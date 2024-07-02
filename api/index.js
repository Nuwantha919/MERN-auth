import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((error) => {
    console.log(error);
}
);

const app = express();

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