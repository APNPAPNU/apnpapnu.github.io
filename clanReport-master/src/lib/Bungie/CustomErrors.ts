/**
 * A special error with a title and a message
 * */
export class DetailedError extends Error {
  public logTitle: string;
  public logMessage: string;
  public logDetail: any[];
  public readonly detail: any[];

  constructor(
    public readonly title: string,
    public readonly message: string,
    ...detail: any[]
  ) {
    super(message);

    this.logTitle = title;
    this.logMessage = message;
    this.detail = detail;
    this.logDetail = detail;

    Object.setPrototypeOf(this, DetailedError.prototype);
  }
}

/** A system is disabled */
export class SystemDisabledError extends DetailedError {
  constructor(public readonly systemName) {
    super(
      "System Disabled",
      "This system is currently disabled. Please try again later.",
      systemName
    );
  }
}

/** Throw when a page is not found */
export class NotFoundError extends DetailedError {
  constructor() {
    super(
      "Page Not Found",
      "Sorry, the page you're looking for has moved or been incinerated."
    );
  }
}
