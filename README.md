# 🛒 Online Store REST API

A full-featured e-commerce backend built with Node.js, Express, and PostgreSQL. This REST API provides complete functionality for managing an online store with user authentication, product management, and shopping cart features.

## 🚀 Features

- **User Authentication & Authorization** - JWT-based authentication with role-based access control
- **Product Management** - Full CRUD operations for products with image upload support
- **Brand & Category Management** - Organize products by brands and types
- **Shopping Cart** - Complete cart functionality for users
- **Product Rating System** - Users can rate and review products
- **Pagination & Filtering** - Efficient product browsing with search and filter capabilities
- **Admin Panel Support** - Administrative functions for store management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Express-fileupload
- **Password Hashing**: bcrypt
- **Documentation**: Swagger UI

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expressjs-online-store-rest-api-full
   ```

2. **Navigate to backend directory**
   ```bash
   cd backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   SECRET_KEY=your_jwt_secret_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

#### Users (`/api/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/users/registration` | Register a new user | No |
| `POST` | `/api/users/login` | User login | No |
| `GET` | `/api/users/auth` | Verify authentication | Yes (Token) |

### Product Management

#### Brands (`/api/brands`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/brands` | Create new brand | Yes (Admin only) |
| `GET` | `/api/brands` | Get all brands | No |
| `GET` | `/api/brands/:id` | Get brand by ID | No |
| `PUT` | `/api/brands/:id` | Update brand | Yes (Admin only) |
| `DELETE` | `/api/brands/:id` | Delete brand | Yes (Admin only) |

#### Types (`/api/types`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/types` | Create new type | Yes (Admin only) |
| `GET` | `/api/types` | Get all types | No |
| `GET` | `/api/types/:id` | Get type by ID | No |
| `PUT` | `/api/types/:id` | Update type | Yes (Admin only) |
| `DELETE` | `/api/types/:id` | Delete type | Yes (Admin only) |

#### Products (`/api/products`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/products` | Create product (with image upload) | Yes (Admin only) |
| `GET` | `/api/products` | Get all products (with filtering & pagination) | No |
| `GET` | `/api/products/:id` | Get product by ID | No |
| `PUT` | `/api/products/:id` | Update product | Yes (Admin only) |
| `DELETE` | `/api/products/:id` | Delete product | Yes (Admin only) |

## 🗄️ Database Schema

The application uses 8 interconnected tables:

### 1. **users**
- `id` - Primary Key
- `email` - User email (unique)
- `password` - Hashed password
- `role` - User role (USER/ADMIN)

### 2. **ratings**
- `id` - Primary Key
- `user_id` - Foreign Key to users
- `device_id` - Foreign Key to devices
- `rate` - Rating value

### 3. **baskets**
- `id` - Primary Key
- `user_id` - Foreign Key to users

### 4. **devices** (Products)
- `id` - Primary Key
- `name` - Product name
- `price` - Product price
- `rating` - Average rating
- `img` - Product image URL
- `typeId` - Foreign Key to types
- `brandId` - Foreign Key to brands

### 5. **device_info**
- `id` - Primary Key
- `device_id` - Foreign Key to devices
- `title` - Information title
- `description` - Information description

### 6. **types**
- `id` - Primary Key
- `name` - Type name

### 7. **brands**
- `id` - Primary Key
- `name` - Brand name

### 8. **basket_devices**
- `id` - Primary Key
- `device_id` - Foreign Key to devices
- `basket_id` - Foreign Key to baskets

## 🔧 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🐳 Docker Support

The project includes Docker configuration for easy deployment:

```bash
docker-compose up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

If you have any questions or need help with setup, please create an issue in the repository.