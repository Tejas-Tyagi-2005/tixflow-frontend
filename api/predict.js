export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  try {
    const body = req.body;

    const response = await fetch("http://3.7.189.38:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
