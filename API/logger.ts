class CustomLogger {
    public errors: string[] = [];

    addError(...errors: string[]) {
        errors.forEach((error) => {
            this.errors.push(error);
        });
    }

    getErrors(): string[] {
        return this.errors;
    }

    logAll() {
        this.errors.forEach(error => {
            console.log(error);
        });
        this.errors = [];
    }
}

export const Logger = new CustomLogger();

setInterval(() => {
    //@ts-expect-error
    if(process.env?.dev == null || process.env?.dev == false) return;
    Logger.logAll();
}, 1000);