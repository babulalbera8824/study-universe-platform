# Study Universe 🎓

A modern, premium full-stack educational website with video lectures, PDF books, courses, and a powerful admin dashboard.

## Features

✨ **Student Portal**
- Video Library with advanced search & filtering
- PDF/Book Library with integrated viewer
- Course Management with progress tracking
- Responsive design (Mobile-First)
- Bilingual support (Hindi & English)
- Smooth animations & premium UI

⚙️ **Admin Dashboard**
- Video Management (Upload, Edit, Delete)
- PDF Management (Upload, Edit, Delete)
- Course Management (Create, Manage, Publish)
- Category/Subject Management
- User Management
- Website Settings
- Secure Authentication

## Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Responsive Design
- Animation Library (AOS)
- PDF Viewer Integration
- Video Player

**Backend:**
- Node.js + Express.js
- MongoDB (Database)
- JWT Authentication
- Multer (File Uploads)
- CORS

## Installation

1. Clone the repository
```bash
git clone https://github.com/babulalbera8824/study-universe-platform.git
cd study-universe-platform
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Configure MongoDB
- Update `MONGODB_URI` in `.env`

5. Start the server
```bash
npm run dev
```

6. Open browser
```
http://localhost:5000
```

## Project Structure

```
study-universe-platform/
├── public/                 # Static files
│   ├── css/               # Stylesheets
│   ├── js/                # Frontend JavaScript
│   └── images/            # Images & Icons
├── uploads/               # User uploaded files
├── server.js              # Express server
├── config/                # Configuration files
├── models/                # MongoDB models
├── routes/                # API routes
├── controllers/           # Route controllers
├── middleware/            # Custom middleware
└── views/                 # HTML templates
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin-login` - Admin login

### Videos
- `GET /api/videos` - Get all videos
- `GET /api/videos/:id` - Get video details
- `POST /api/videos` - Create video (Admin)
- `PUT /api/videos/:id` - Update video (Admin)
- `DELETE /api/videos/:id` - Delete video (Admin)

### PDFs
- `GET /api/pdfs` - Get all PDFs
- `GET /api/pdfs/:id` - Get PDF details
- `POST /api/pdfs` - Upload PDF (Admin)
- `PUT /api/pdfs/:id` - Update PDF (Admin)
- `DELETE /api/pdfs/:id` - Delete PDF (Admin)

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

## Default Admin Credentials

**Email:** admin@studyuniverse.com
**Password:** Admin@123456

⚠️ Change these credentials in production!

## License

MIT License - See LICENSE file

## Author

Babul Albera
