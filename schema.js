const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing : Joi.object({
    title: Joi.string().required(),
    description : Joi.string().required(),
    category: Joi.string().valid("trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms", "arctic", "domes", "boats").required(),
    image: Joi.string().allow("", null),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    mapEmbed: Joi.string().allow("", null)
  }).required()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required(),
    comment: Joi.string().required()
  }).required()
});
