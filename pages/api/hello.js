export default function handler(req, res) {
  console.log("the req", req);
  res.status(200).json({ text: "Hello" });
}
