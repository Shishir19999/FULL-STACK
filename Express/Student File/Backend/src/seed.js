// Idempotent seed: `npm run seed`. Upserts by email, safe to run repeatedly.
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentFormData';
const students = mongoose.model('students', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String }
}));

const data = [
    { name: 'Asha Sharma', email: 'asha@example.com', phone: '9800000001', address: 'Kathmandu' },
    { name: 'Bikash Thapa', email: 'bikash@example.com', phone: '9800000002', address: 'Pokhara' },
    { name: 'Chandra Rai', email: 'chandra@example.com', phone: '9800000003', address: 'Biratnagar' }
];

(async () => {
    await mongoose.connect(uri);
    for (const s of data) await students.updateOne({ email: s.email }, { $setOnInsert: s }, { upsert: true });
    console.log('Seeded students:', await students.countDocuments());
    await mongoose.disconnect();
})().catch((e) => { console.error(e.message); process.exit(1); });
