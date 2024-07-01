const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { addLostItem, addFoundItem } = require('./Database/SupabaseClient');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Database');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname);
  },
});

const upload = multer({ storage });

app.post('/api/submitLostItem', upload.single('itemImage'), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      itemName,
      timeLost,
      dateLost,
      category,
      subCategory,
      locationLost,
      ownerName,
      itemColour,
      itemSize,
      itemDescription,
    } = req.body;

    let itemImage = null;
    if (req.file) {
      itemImage = req.file.path; // or filename depending on your needs
    }

    const newItem = {
      firstName,
      lastName,
      phoneNumber,
      itemName,
      timeLost,
      dateLost,
      category,
      subCategory,
      locationLost,
      ownerName,
      itemColour,
      itemSize,
      itemDescription,
      itemImage
    };

    const result = await addLostItem(newItem);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error submitting lost item:', error);
    res.status(500).send('Error submitting lost item');
  }
});

app.post('/api/submitFoundItem', upload.single('itemImage'), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      itemName,
      timeFound,
      dateFound,
      category,
      subCategory,
      locationFound,
      ownerName,
      itemColour,
      itemSize,
      itemDescription,
      handTo
    } = req.body;

    let itemImage = null;
    if (req.file) {
      itemImage = req.file.path; // or filename depending on your needs
    }

    const newItem = {
      firstName,
      lastName,
      phoneNumber,
      itemName,
      timeFound,
      dateFound,
      category,
      subCategory,
      locationFound,
      ownerName,
      itemColour,
      itemSize,
      itemDescription,
      handTo,
      itemImage
    };

    const result = await addFoundItem(newItem);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error submitting found item:', error);
    res.status(500).send('Error submitting found item');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
