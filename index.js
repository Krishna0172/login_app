const app = require("./src/app");
const { PORT } = process.env;
const startApp = () => {
    app.listen(PORT, () => {
        console.log(`Auth Backend running on port ${PORT}`);
    });
    app.get('/',(req,res)=>{
        return res.send('Listening ....');
    })
    app.get('/api/v1/user',(req,res)=>{
        return res.send('Enter from the List : <br> 1.signUp for Sign-up <br> 2. / for sign-in <br> 3. AllUser for All-Data</br>');
    })
};
startApp();
