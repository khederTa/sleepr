#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envContent = `# MongoDB Connection String
# For local development, you can use:
MONGO_URI=mongodb://localhost:27017/sleepr

# For production, use your actual MongoDB connection string:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/sleepr

# Environment
NODE_ENV=development

# Port (optional)
# PORT=3000
`;

const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
  console.log('.env file already exists');
} else {
  fs.writeFileSync(envPath, envContent);
  console.log('.env file created successfully');
  console.log('Please make sure MongoDB is running on localhost:27017');
  console.log('Or update the MONGO_URI in the .env file to point to your MongoDB instance');
}

console.log('\nTo start the application:');
console.log('pnpm start:dev');
