import { Alerts } from "../models/index.js";

export const seedAlerts = async () => {
    await Alerts.bulkCreate(
        [
            {
                type: 'Blizard',
                snow: 'heavy snow warning',
                message: 'check the weather forecast for the next 24 hours',
                severity: 'High'
            },
            {
                type: 'snowing mildly',
                snow: 'mild',
                message: 'Driver carefully',
                severity: 'mild'
            },
            {
                type: 'snow',
                snow: 'light',
                message: 'Drive safely :)',
                severity: 'Light'
            },
            {
                type: 'Extreme Heat',
                message: 'Dont forget your sunglasseses, stay hydrated roll down windows,turn on the AC and check for your cars temperature',
                severity: 'High'
            },
            {
                type: 'hot',
                message: 'Dont forget your sunglasseses, stay hydrated roll down windows,turn on the AC and check for your cars temperature',
                severity: 'mild'
            },
            {
                type: 'warm',
                message: 'Dont forget your sunglasseses, stay hydrated roll down windows, and enjoy the weather',
                severity: 'Light'
            },
            {
                type: 'Heavy Rain',
                message: 'stay home, but if you must go out, drive carefully',
                severity: 'High'
            },
            {
                type: 'Rain',
                message: 'Drive carefully,dont forget your umbrella, and stay dry',
                severity: 'High'
            },
            {
                type: 'Drizzle',
                message: 'Drive carefully,dont forget your umbrella, and stay dry :)',
                severity: 'Light'
            },
            {
                type: 'Hailing',
                message: 'Move your car to a safe place, and stay indoors',
                severity: 'High'
            },
        ]
    );
};