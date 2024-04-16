import express from 'express';
import newsRouter from './newsRouter.js';
import categoryRouter from './categoryRouter.js';
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/category', categoryRouter);
router.use('/news', newsRouter);


export default router;