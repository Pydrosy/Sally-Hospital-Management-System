import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
config({ path: './config/.env' });

// Debug environment variables
console.log('=== ENVIRONMENT VARIABLES ===');
console.log('PORT:', process.env.PORT);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('DASHBOARD_URL:', process.env.DASHBOARD_URL);
console.log('=============================');

// Clean up allowed origins - remove duplicates
const allowedOrigins = [
  'http://localhost:5174', // Frontend
  'http://localhost:5173', // Dashboard
  'http://localhost:3000'  // Additional dev server
].filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

console.log('Allowed CORS origins:', allowedOrigins);

// Simple CORS configuration - the cors package handles preflight automatically
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Remove the problematic app.options('*') line completely
// The cors package above will handle preflight requests automatically

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));

// Add a test route to verify CORS
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'CORS is working!', 
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// Your routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();
app.use(errorMiddleware);

export default app;