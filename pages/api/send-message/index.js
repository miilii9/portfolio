import Message from "@/models/MessageModel";
import connectMongoDB from "@/mongodb";

export default async function handler(req, res) {
  const { subject, email, body } = req.body;
  if (!subject || !email || !body) {
    res.status(400).json({ error: "اطلاعات ناقص وارد شده است" });
    return;
  }

  await connectMongoDB()
    .then(async () => {
      const message = new Message({ subject, email, body });
      await message.save();
      res.status(200).json({
        message,
        text: "پیام شما با موفقیت ارسال شد",
        status: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
}
