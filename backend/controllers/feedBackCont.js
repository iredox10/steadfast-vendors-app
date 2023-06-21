import Vendor from "../models/vendor.js"
import Feedback from "../models/VendorFeedBack.js"

export const send_feedback = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id)
    const feedback = await Feedback.create({
      vendorId: vendor.id,
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    })
    res.status(201).json(feedback)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const get_feedbacks = async (req, res) => {
  try {
    const feedbacks = await Vendor.findByPk(req.params.id, {
      include: ["feedbacks"],
    })
    res.status(200).json({ feedbacks: feedbacks.feedbacks })
  } catch (err) {
    res.status(404).json(err)
  }
}

export const get_feedback = async (req, res) => { 
    try {
        const feedback = await Feedback.findByPk(req.params.id)
        res.status(200).json(feedback)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const delete_feedback = async (req, res) => {
    try {
        const feedback = await Feedback.destroy({ where: { id: req.params.id } })
        res.status(200).json(feedback)
    } catch (err) {
        res.status(404).json(err)
    }
 }

