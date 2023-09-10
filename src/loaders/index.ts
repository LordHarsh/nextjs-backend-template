import express from "./express";
import Express from "express";

export default async ({ expressApp}: { expressApp: Express.Application }): Promise<void> => {
    await express({ app: expressApp });
    console.log("Express App Intialized");

    console.log("All modules loaded!");
}