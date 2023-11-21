const { User } = require('../models');
const userController = {

    async getAllUsers(req, res) {
        try {
            const userData = await User.find();
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const userData = await User.findById(req.params.user - id).populate('thoughts').populate('friends');
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async updateUser(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.user - id, req.body, { new: true, runValidators: true });
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }

    },



    async deleteUser(req, res) {
        try {
            const userData = await User.findByIdAndDelete(req.params.user - id);
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async addFriend(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.user - id, { $push: { friends: req.params.friend - id } }, { new: true });
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },



    async deleteFriend(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.user - id, { $pull: { friends: req.params.friend - id } }, { new: true });
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = userController;