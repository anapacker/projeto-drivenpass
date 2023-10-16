import { ApplicationError } from "protocols";

export function ConflictError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: `conflict`,
  };
}