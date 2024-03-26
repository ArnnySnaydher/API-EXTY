"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //  middleware que transforma la req.body a un json
const port = 3000;
app.get('/', (_req, res) => res.send('Hello World AS!'));
//  En la ruta usar diaryRouter
app.use('/api/diaries', diaries_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
