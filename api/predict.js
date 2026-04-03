export default async function handler(req, res) {
  const response = await fetch("http://3.7.189.38:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
