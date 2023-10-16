import { ApplicationError } from "protocols";

export function UnauthorizedError(): ApplicationError {
  return {
    name: 'UnauthorizedError',
    message: `Unauthorized`,
  };
}