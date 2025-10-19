# --- Base image ---
FROM node:20.16.0

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port (change if your app uses another port)
EXPOSE 5001

# Start the app
CMD ["node", "index.js"]
