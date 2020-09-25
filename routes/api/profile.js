const express = require('express');
const router = express.Router();
// const auth = require('../../middleware/auth');
// const Profile = require('../models/Profile');
// const profile = require('../models/Profile');
const user = require('../models/User');
//@route GET api/profile/me
//@desc Get Current User profile
//@access Private
router.get('/me', (req, res) => {
  res.send(500);
  //   try {
  //     const profile = await (
  //       await Profile.findOne({ user: req.user.id })
  //     ).populated('user', ['name', 'avatar']);
  //     if (!profile) {
  //       return res.status(400).json({ msg: 'The profile does not exist' });
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     res.status(500).send('Server Error');
  //   }
});

module.exports = router;
