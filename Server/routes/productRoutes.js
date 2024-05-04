const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer middleware
const Product = require('../models/product');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Initialize multer instance with the storage configuration
const upload = multer({ storage: storage });

// Upload a new product with image
router.post('/upload', upload.single('image'), async (req, res) => {
  const { name, price, description, category } = req.body;
  const image = req.file;

  try {
    if (!image) {
      throw new Error('No image provided');
    }

    const newProduct = new Product({ name, price, description, category, image: { url: `/uploads/${image.filename}`, filename: image.filename } });
    await newProduct.save();
    res.status(200).send('Product uploaded successfully');
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).send('Failed to upload product');
  }
});

// Fetch all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});


// Fetch product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
});


module.exports = router;



















// const express = require('express');
// const Product = require('../models/Product'); // Adjust path as needed
// const router = express.Router();

// // GET all products
// router.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// // GET products with category "Burger"
// router.get('/Burger', async (req, res) => {
//     const category = 'Burger';

//     try {
//         const products = await Product.find({ category: category });
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // GET products with category "pizza"
// router.get('/Pizza', async (req, res) => {
//     const category = 'pizza';

//     try {
//         const products = await Product.find({ category: category });
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // POST a new product
// router.post('/', async (req, res) => {
//     const product = new Product(req.body);
//     try {
//         const newProduct = await product.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// module.exports = router;
