import { default as swaggerJSDoc } from "swagger-jsdoc";
import * as fs from "node:fs";

const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SmartKiosk API",
            version: "1.0.0",
            description: "API REST pour le système SmartKiosk",
        }
    },
    apis: [
        "./src/controller/**/*.ts",
        "./src/middleware/**/*.ts",
        "./src/model/**/*.ts",
        "./src/routes/**/*.ts"
    ]
});

fs.writeFileSync("./spec.json", JSON.stringify(swaggerSpec));
