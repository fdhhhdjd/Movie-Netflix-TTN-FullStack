const router = require('express').Router();
const cloudinary = require('cloudinary');
const auth = require('../middleware/auth');
const fs = require('fs');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
console.log(process.env.CLOUD_NAME, 'cloudinary connect');

// Upload image user
router.post('/uploadImageUser', auth, (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: 'No files were uploaded.' });

    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: 'Size too large' });
    }

    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: 'File format is incorrect.' });
    }
    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: 'user' },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// Delete image user
router.post('/destroyImageUser', auth, (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.status(400).json({ msg: 'No images Selected' });

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: 'Deleted Image' });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

//upload video film
router.post('/uploadVideoFilm', auth, (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: 'No files were uploaded.' });

    const file = req.files.file;
    cloudinary.v2.uploader.upload_large(
      file.tempFilePath,
      { folder: 'film/video', resource_type: 'video', chunk_size: 6000000 },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

//delete video film
router.post('/destroyVideoFilm', auth, (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id)
      return res.status(400).json({ msg: 'No Video Film Selected' });

    cloudinary.v2.uploader.destroy(
      public_id,
      { resource_type: 'video' },
      async (err, result) => {
        if (err) throw err;

        res.json({ msg: 'Deleted Video Film' });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
