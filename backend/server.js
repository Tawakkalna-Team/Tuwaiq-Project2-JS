const express = require('express');
const cors = require('cors');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
