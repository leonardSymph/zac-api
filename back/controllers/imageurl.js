import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "9f4c1f3441984e9ca9465063e0f6cef8",
});

export const handleApiCall = (req, res) => {
  //   console.log(req, res);
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.status(400).json("Unable to work with API"));
};

export default handleApiCall;
