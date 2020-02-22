import { app, port } from "./app";
import mongoose from "mongoose";
import { seed } from "./database/seed/seedSetup";

const dbUrl = "mongodb://mongo:27017/techgames";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.set("useCreateIndex", true);

async function postStart() {
    try {
        await seed();
        // tslint:disable-next-line:no-console
        console.log("Seeding successful");
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(`Failure with seeding: ${error}`);
        throw error;
    }
}

const server = app.listen(port, async () => {
    console.log(`Server listening on port ${port} ...`);
    postStart()
});

export { server };
